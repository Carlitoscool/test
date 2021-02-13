import { CreateProductDTO } from '../dtos/create-product.dto';
import { ProductDTO } from '../dtos/product.dto';
import { LoggerService } from '../logger/logger.service';
import { MsProductsClient } from './ms-products-client.service';
export declare class ProductsController {
    private readonly msProductsClient;
    private logger;
    constructor(msProductsClient: MsProductsClient, logger: LoggerService);
    create(product: CreateProductDTO): Promise<ProductDTO>;
    findAll(): Promise<ProductDTO[]>;
    findById(productId: string): Promise<ProductDTO>;
    update(productId: string, product: ProductDTO): Promise<ProductDTO>;
    delete(productId: string): Promise<ProductDTO>;
}
