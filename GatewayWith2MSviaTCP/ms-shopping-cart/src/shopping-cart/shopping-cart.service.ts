import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDTO } from 'src/dtos/product.dto';
import { ShoppingCartDTO } from 'src/dtos/shopping-cart.dto';
import { Repository } from 'typeorm';
import Product from './model/product.entity';
import { ShoppingCart } from './model/shopping-cart.entity';

@Injectable()
export class ShoppingCartService {

    constructor(
        @InjectRepository(ShoppingCart)
        private shoppingCartRepository: Repository<ShoppingCart>,
    ) { }

    async create(shoppingCartDTO: ShoppingCartDTO): Promise<ShoppingCartDTO> {  
        let shoppingCart = new ShoppingCart();
        shoppingCart.shoppingCartId = shoppingCartDTO.shoppingCartId,
        shoppingCart.userId = shoppingCartDTO.userId  
        shoppingCart.totalPrice = 0;
        shoppingCart.totalQuantity = 0;
        shoppingCart.products = [];
        return this.shoppingCartRepository.save(shoppingCart);
    }

    async findById(shoppingCartId: string): Promise<ShoppingCartDTO> {
        let shoppingCart: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: shoppingCartId });
        let toReturnShoppingCartDTO: ShoppingCartDTO = this.shoppingCartEntityToDTO(shoppingCart);
        return toReturnShoppingCartDTO;
    }

    private shoppingCartEntityToDTO(shoppingCart: ShoppingCart): ShoppingCartDTO{
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
                price: prodEntity.price,
                quantity: prodEntity.quantity
            }
            productsDTOList.push(productDTO);
        });
        return productsDTOList;
    }

    async delete(shoppingCartId: string): Promise<ShoppingCartDTO> {
        let shoppingCart: ShoppingCart = await this.shoppingCartRepository.findOne({ shoppingCartId: shoppingCartId });
        shoppingCart = await this.shoppingCartRepository.remove(shoppingCart);
        return this.shoppingCartEntityToDTO(shoppingCart);
    }

}
