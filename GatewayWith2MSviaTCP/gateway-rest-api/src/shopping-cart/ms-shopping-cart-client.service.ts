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

    async delete(shoppingCartId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('delete', shoppingCartId).toPromise();
    }

    async findById(shoppingCartId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('findById', shoppingCartId).toPromise();
    }

    async addProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('addProduct', {shoppingCartId, productId}).toPromise();
    }

    async removeProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO> {
        return await this.msShoppingCartClient.send('removeProduct', {shoppingCartId, productId}).toPromise();
    }

}
