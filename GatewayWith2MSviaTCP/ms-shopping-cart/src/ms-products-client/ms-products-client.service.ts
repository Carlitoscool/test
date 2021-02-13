import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductDTO } from 'src/dtos/product.dto';

@Injectable()
export class MsProductsClientService {

    constructor(@Inject('MS-SP') private readonly msProductsClient: ClientProxy) { };

    async findById(productId: string): Promise<ProductDTO> {
        return await this.msProductsClient.send('findById', productId).toPromise();
    }
}
