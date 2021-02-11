import { ApiProperty } from "@nestjs/swagger";
import { IProduct } from "src/products/interfaces/iProduct.interface";

export class ShoppingCartDTO {

    @ApiProperty({
        description: 'Id of the shopping cart',
        example: '123456',
        uniqueItems: true
    })
    readonly shoppingCartId: string;

    @ApiProperty({
        description: 'Id of the user',
        example: '123456',
        uniqueItems: true
    })
    readonly userId: string;

    @ApiProperty({
        description: 'Total amount in the shopping cart',
        example: '123.31'
    })
    readonly totalPrice: number;

    @ApiProperty({
        description: 'Total quantity of products in the shopping cart',
        example: '3'
    })
    readonly totalQuantity: number;

    @ApiProperty({
        description: 'List of products in the shopping cart',
    })
    readonly products: IProduct[];
}