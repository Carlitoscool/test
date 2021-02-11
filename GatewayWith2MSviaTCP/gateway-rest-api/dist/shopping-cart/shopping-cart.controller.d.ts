import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { LoggerService } from 'src/logger/logger.service';
import { ShoppingCartDTO } from '../dtos/shopping-cart.dto';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';
export declare class ShoppingCartController {
    private readonly msShoppingCartClient;
    private logger;
    constructor(msShoppingCartClient: MsShoppingCartClient, logger: LoggerService);
    create(shoopingCart: CreateShoppingCartDTO): Promise<ShoppingCartDTO>;
    delete(shoppingCartId: string): Promise<ShoppingCartDTO>;
    findById(shoppingCartId: string): Promise<ShoppingCartDTO>;
    addProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO>;
    removeProduct(shoppingCartId: string, productId: string): Promise<ShoppingCartDTO>;
}
