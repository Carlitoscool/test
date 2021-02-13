import { ClientProxy } from '@nestjs/microservices';
import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { ShoppingCartDTO } from '../dtos/shopping-cart.dto';
export declare class MsShoppingCartClient {
    private readonly msShoppingCartClient;
    constructor(msShoppingCartClient: ClientProxy);
    create(shoppingCartDTO: CreateShoppingCartDTO): Promise<ShoppingCartDTO>;
    delete(shoppingCartId: string): Promise<ShoppingCartDTO>;
    findById(shoppingCartId: string): Promise<ShoppingCartDTO>;
    addProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO>;
    removeProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO>;
}
