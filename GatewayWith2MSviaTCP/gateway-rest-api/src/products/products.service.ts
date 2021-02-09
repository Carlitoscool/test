import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {

    async findAll(): Promise<ProductDTO[]> {
        throw new Error('Method not implemented.');
    }

    async findById(productId: string): Promise<ProductDTO> {
        throw new Error('Method not implemented.');
    }

    async create(product: Product): Promise<ProductDTO> {
        throw new Error('Method not implemented.');
    }

    async update(productId: string, product: Product): Promise<ProductDTO> {
        throw new Error('Method not implemented.');
    }

    async delete(id: any): Promise<ProductDTO> {
        throw new Error('Method not implemented.');
    }

}
