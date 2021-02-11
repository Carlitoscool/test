import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDTO } from './dto/product.dto';
import { IProduct } from './interfaces/iProduct.interface';
import { IUpdateProduct } from './interfaces/iUpdateProduct.interface';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async create(productDTO: IProduct) {
        const newProduct = new this.productModel(productDTO);
        return newProduct.save();
    }

    async findById(productId: string) {
        let product = await this.productModel.findOne({ productId: productId }).exec();
        return new this.productModel(product);
    }

    async findAll(): Promise<ProductDTO[]> {
        let productsList: ProductDTO[] = []
        const result: Product[] = await this.productModel.find().exec();

        if (!!result && result.length > 0) {
            result.map(prodEntity => {
                let productDTO: ProductDTO = {
                    productId: prodEntity.productId,
                    price: prodEntity.price
                }
                productsList.push(productDTO);
            });
        }
        return productsList;
    }

    async update(updateProductDTO: IUpdateProduct) {
        return await this.productModel.findByIdAndUpdate(updateProductDTO.productId, updateProductDTO.product, { new: true });
    }

    async delete(productId: string) {
        return this.productModel.findByIdAndRemove(productId);
    }
}
