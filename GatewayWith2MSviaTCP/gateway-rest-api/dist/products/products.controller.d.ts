import { LoggerService } from 'src/logger/logger.service';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    private logger;
    constructor(productsService: ProductsService, logger: LoggerService);
    findAll(): Promise<ProductDTO[]>;
    findById(productId: string): Promise<ProductDTO>;
    create(product: Product): Promise<ProductDTO>;
    update(productId: string, product: Product): Promise<ProductDTO>;
    delete(productId: string): Promise<ProductDTO>;
}
