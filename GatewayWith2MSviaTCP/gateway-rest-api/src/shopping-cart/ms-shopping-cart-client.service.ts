import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { ShoppingCartDTO } from '../dtos/shopping-cart.dto';

@Injectable()
export class MsShoppingCartClient {

    constructor(@Inject('GATEWAY-REST-API') private readonly msShoppingCartClient: ClientProxy) { };

    async create(shoppingCartDTO: CreateShoppingCartDTO): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('create', shoppingCartDTO).toPromise();
    }

    async delete(shoopingCartId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('delete', shoopingCartId).toPromise();
    }

    async findById(shoopingCartId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('findById', shoopingCartId).toPromise();
    }

    async addProduct(shoopingCartId: string, productId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('addProduct', [shoopingCartId, productId]).toPromise();
    }

    async removeProduct(shoopingCartId: string, productId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('removeProduct', [shoopingCartId, productId]).toPromise();
    }

}
