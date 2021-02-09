import { Product } from "src/products/interfaces/product.interface";
export declare class ShoppingCartDTO {
    readonly shoppingCartId: string;
    readonly userId: string;
    readonly totalPrice: number;
    readonly totalQuantity: number;
    readonly products: Product[];
}
