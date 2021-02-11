import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerService } from 'src/logger/logger.service';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';
import { ShoppingCartController } from './shopping-cart.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([{
            name: 'GATEWAY-REST-API',
            transport: Transport.TCP,
            options: {
                host: process.env.MS_SHOPPING_CART_ADDRESS,
                port: parseInt(process.env.MS_SHOPPING_CART_PORT),
            }
        }])
    ],
    providers: [LoggerService, MsShoppingCartClient],
    controllers: [ShoppingCartController]
})
export class ShoppingCartModule { }
