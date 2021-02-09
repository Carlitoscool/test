import { ProductDTO } from "../dto/product.dto";
import { Product } from "./product.interface";
export interface IProductsService {
    findAll(): Promise<ProductDTO[]>;
    findById(productId: string): Promise<ProductDTO>;
    create(product: Product): Promise<ProductDTO>;
    update(productId: string, product: Product): Promise<ProductDTO>;
    delete(id: any): Promise<ProductDTO>;
}
