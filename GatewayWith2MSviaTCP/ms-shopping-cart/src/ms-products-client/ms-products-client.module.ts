import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerService } from 'src/logger/logger.service';
import { MsProductsClientService } from './ms-products-client.service';

@Module({
    imports: [ ],
    providers: [LoggerService]
})
export class MsProductsClientModule { }
