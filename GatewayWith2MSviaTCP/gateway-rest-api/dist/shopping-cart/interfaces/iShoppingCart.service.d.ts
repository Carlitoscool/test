import { ProductDTO } from "src/products/dto/product.dto";
import { Product } from "src/products/interfaces/product.interface";
export interface IShoppingCartService {
    findById(productId: string): Promise<ProductDTO>;
    addProduct(product: Product): Promise<ProductDTO>;
    removeProduct(product: Product): Promise<ProductDTO>;
}
