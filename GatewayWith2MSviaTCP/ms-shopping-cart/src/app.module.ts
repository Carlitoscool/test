import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsProductsClientModule } from './ms-products-client/ms-products-client.module';
import Product from './shopping-cart/model/product.entity';
import ShoppingCart from './shopping-cart/model/shopping-cart.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          ShoppingCart, Product
        ],
        synchronize: true,
      })
    }),
    LoggerModule,
    ShoppingCartModule,
    ConfigModule.forRoot(),
    MsProductsClientModule
  ],
  exports: [ConfigModule]
})
export class AppModule { }
