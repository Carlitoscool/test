import { IProduct } from "src/products/interfaces/iProduct.interface";

export class ShoppingCartDTO {
    readonly shoppingCartId: string;
    readonly userId: string;
    readonly totalPrice: number;
    readonly totalQuantity: number;
    readonly products: IProduct[];
}