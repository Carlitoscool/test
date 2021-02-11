import { ClientProxy } from '@nestjs/microservices';
import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { ShoppingCartDTO } from '../dtos/shopping-cart.dto';
export declare class MsShoppingCartClient {
    private readonly msShoppingCartClient;
    constructor(msShoppingCartClient: ClientProxy);
    create(shoppingCartDTO: CreateShoppingCartDTO): Promise<ShoppingCartDTO>;
    delete(shoopingCartId: string): Promise<ShoppingCartDTO>;
    findById(shoopingCartId: string): Promise<ShoppingCartDTO>;
    addProduct(shoopingCartId: string, productId: string): Promise<ShoppingCartDTO>;
    removeProduct(shoopingCartId: string, productId: string): Promise<ShoppingCartDTO>;
}
