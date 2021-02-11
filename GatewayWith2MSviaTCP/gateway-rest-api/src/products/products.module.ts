import { Module } from '@nestjs/common';
import { MsProductsClient } from './ms-products-client.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from 'src/logger/logger.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([{
            name: 'GATEWAY-REST-API',
            transport: Transport.TCP,
            options: {
                host: process.env.MS_PRODUCTS_ADDRESS,
                port: parseInt(process.env.MS_PRODUCTS_PORT),
            }
        }])
    ],
    providers: [MsProductsClient, LoggerService],
    controllers: [ProductsController]
})
export class ProductsModule { }
