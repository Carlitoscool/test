import { ApiProperty } from "@nestjs/swagger";
import { IProduct } from "src/products/interfaces/iProduct.interface";

export class CreateShoppingCartDTO {

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

}