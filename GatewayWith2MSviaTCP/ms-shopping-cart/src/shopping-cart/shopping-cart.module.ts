import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from 'src/logger/logger.service';
import { MsProductsClientService } from 'src/ms-products-client/ms-products-client.service';
import Product from './model/product.entity';
import ShoppingCart from './model/shopping-cart.entity';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShoppingCart]),
        TypeOrmModule.forFeature([Product]),
        ConfigModule.forRoot(),
        ClientsModule.register([{
            name: 'MS-SP',
            transport: Transport.TCP,
            options: {
                host: process.env.MS_PRODUCTS_ADDRESS,
                port: parseInt(process.env.MS_PRODUCTS_PORT),
            }
        }])
    ],
    providers:[ShoppingCartService, LoggerService, MsProductsClientService],
    controllers: [ShoppingCartController],
    exports: [TypeOrmModule]
})
export class ShoppingCartModule { }
