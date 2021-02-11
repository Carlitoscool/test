import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { ProductDTO } from 'src/dtos/product.dto';
export declare class MsProductsClient {
    private readonly msProductsClient;
    constructor(msProductsClient: ClientProxy);
    create(product: CreateProductDTO): Promise<any>;
    findAll(): Promise<ProductDTO[]>;
    findById(productId: string): Promise<ProductDTO>;
    update(productId: string, product: ProductDTO): Promise<ProductDTO>;
    delete(productId: any): Promise<ProductDTO>;
}
