import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDTO } from 'src/dtos/product.dto';
import { ShoppingCartDTO } from 'src/dtos/shopping-cart.dto';
import { MsProductsClientService } from 'src/ms-products-client/ms-products-client.service';
import { Repository } from 'typeorm';
import { IUpdateShoppingCart } from './interfaces/Ishopping-cart-update.interface';
import Product from './model/product.entity';
import { ShoppingCart } from './model/shopping-cart.entity';

@Injectable()
export class ShoppingCartService {

    constructor(
        @InjectRepository(ShoppingCart)
        private shoppingCartRepository: Repository<ShoppingCart>,
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private msProductsClient: MsProductsClientService
    ) { }

    async create(shoppingCartDTO: ShoppingCartDTO): Promise<ShoppingCartDTO> {
        let shoppingCart = new ShoppingCart();
        shoppingCart.shoppingCartId = shoppingCartDTO.shoppingCartId;
        shoppingCart.userId = shoppingCartDTO.userId;
        shoppingCart.totalPrice = 0;
        shoppingCart.totalQuantity = 0;
        shoppingCart.products = [];
        return this.shoppingCartEntityToDTO(await this.shoppingCartRepository.save(shoppingCart));
    }

    async findById(shoppingCartId: string): Promise<ShoppingCartDTO> {
        let shoppingCart: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: shoppingCartId });
        let toReturnShoppingCartDTO: ShoppingCartDTO = this.shoppingCartEntityToDTO(shoppingCart);
        return toReturnShoppingCartDTO;
    }

    async delete(shoppingCartId: string): Promise<ShoppingCartDTO> {
        let shoppingCart: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: shoppingCartId });

        shoppingCart.products.map(prodEntity => {
            this.productRepository.remove(prodEntity);
        })

        shoppingCart = await this.shoppingCartRepository.remove(shoppingCart);
        return this.shoppingCartEntityToDTO(shoppingCart);
    }

    async addProduct(iUpdateShoppingCart: IUpdateShoppingCart): Promise<ShoppingCartDTO> {
        let shoppingCartEntity: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: iUpdateShoppingCart.shoppingCartId });
        let productDTO = await this.msProductsClient.findById(iUpdateShoppingCart.productId);

        if (!productDTO.productId) {
            throw new Error('O produto não existe!');
        }

        // If product already exists.
        if (shoppingCartEntity.products.some(prod => prod.productId == productDTO.productId)) {
            shoppingCartEntity.products.map(prodEntity => {
                if (prodEntity.productId == productDTO.productId) {
                    prodEntity.quantity++;
                    shoppingCartEntity.totalQuantity++;
                    shoppingCartEntity.totalPrice = Number(shoppingCartEntity.totalPrice) + Number(productDTO.price);
                }
            });
        } else {
            // Creating new product
            let newEntityProduct: Product = new Product();
            newEntityProduct.price = productDTO.price;
            newEntityProduct.productId = productDTO.productId;
            newEntityProduct.shoppingCart = shoppingCartEntity;
            newEntityProduct.quantity = 1;

            // Update shopping-cart
            shoppingCartEntity.totalQuantity = Number(shoppingCartEntity.totalQuantity) + 1;
            shoppingCartEntity.totalPrice = Number(shoppingCartEntity.totalPrice) + Number(productDTO.price);
            shoppingCartEntity.products.push(newEntityProduct);
        }

        this.shoppingCartRepository.save(shoppingCartEntity);
        return this.shoppingCartEntityToDTO(shoppingCartEntity);
    }

    async removeProduct(iUpdateShoppingCart: IUpdateShoppingCart): Promise<ShoppingCartDTO> {
        let shoppingCartEntity: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: iUpdateShoppingCart.shoppingCartId });
        let productDTO = await this.msProductsClient.findById(iUpdateShoppingCart.productId);
        if (shoppingCartEntity.products.length == 0) {
            throw new Error('O carrinho está vazio.');
        } else {
            for (let prodEntity of shoppingCartEntity.products) {
                if (prodEntity.productId == productDTO.productId) {
                    if (prodEntity.quantity == 1) {
                        shoppingCartEntity.products = shoppingCartEntity.products.filter(prod => prod.productId != productDTO.productId);
                        this.productRepository.remove(prodEntity);
                        break;
                    }
                    prodEntity.quantity--;
                    shoppingCartEntity.totalQuantity--;
                    shoppingCartEntity.totalPrice = Number(shoppingCartEntity.totalPrice) - Number(productDTO.price);
                }
            }
        }
        this.shoppingCartRepository.save(shoppingCartEntity);
        return this.shoppingCartEntityToDTO(shoppingCartEntity);
    }

    private shoppingCartEntityToDTO(shoppingCart: ShoppingCart): ShoppingCartDTO {
        let toReturnShoppingCartDTO: ShoppingCartDTO = {
            shoppingCartId: shoppingCart.shoppingCartId,
            totalPrice: shoppingCart.totalPrice,
            totalQuantity: shoppingCart.totalQuantity,
            userId: shoppingCart.userId,
            products: this.productsEntityToProductsDTO(shoppingCart.products)
        }
        return toReturnShoppingCartDTO;
    }

    private productsEntityToProductsDTO(products: Product[]): ProductDTO[] {
        let productsDTOList: ProductDTO[] = [];
        products.map(prodEntity => {
            let productDTO: ProductDTO = {
                productId: prodEntity.productId,
                price: Number(prodEntity.price),
                quantity: prodEntity.quantity
            }
            productsDTOList.push(productDTO);
        });
        return productsDTOList;
    }

}
