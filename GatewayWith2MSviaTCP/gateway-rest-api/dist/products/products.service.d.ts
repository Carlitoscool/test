import { ProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
export declare class ProductsService {
    findAll(): Promise<ProductDTO[]>;
    findById(productId: string): Promise<ProductDTO>;
    create(product: Product): Promise<ProductDTO>;
    update(productId: string, product: Product): Promise<ProductDTO>;
    delete(id: any): Promise<ProductDTO>;
}
