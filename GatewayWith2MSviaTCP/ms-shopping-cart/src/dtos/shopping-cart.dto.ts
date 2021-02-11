import { ProductDTO } from "./product.dto";

export class ShoppingCartDTO {
    readonly shoppingCartId: string;
    readonly userId: string;
    readonly totalPrice?: number;
    readonly totalQuantity?: number;
    readonly products?: ProductDTO[];
}