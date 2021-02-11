import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductDTO } from './dto/product.dto';
import { IProduct } from './interfaces/iProduct.interface';

@Injectable()
export class MsProductsClient {

    constructor(@Inject('GATEWAY-REST-API') private readonly msProductsClient: ClientProxy) { };

    async create(product: CreateProductDTO) {
        return await this.msProductsClient.send('create', product).toPromise();
    }

    async findAll(): Promise<ProductDTO[]> {
        return await this.msProductsClient.send('findAll', {}).toPromise();
    }

    async findById(productId: string): Promise<ProductDTO> {
        return await this.msProductsClient.send('findById', productId).toPromise();
    }

    async update(productId: string, product: ProductDTO): Promise<ProductDTO> {
        return await this.msProductsClient.send('update', { productId, product }).toPromise();
    }

    async delete(productId: any): Promise<ProductDTO> {
        return await this.msProductsClient.send('delete', productId).toPromise();
    }

}
