import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO {
    @ApiProperty({
        description:'Id of the product',
        example:'123456',
        uniqueItems: true
    })
    readonly productId: string;
    @ApiProperty({
        description:'Price of the product',
        example:'123.31'
    })
    readonly price: number;
}