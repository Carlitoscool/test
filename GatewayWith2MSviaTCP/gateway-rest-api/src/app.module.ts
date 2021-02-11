import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, ShoppingCartModule, LoggerModule, ConfigModule,
    ConfigModule.forRoot()],
  providers: [
    AppService
  ],

  exports: [ConfigModule]
})
export class AppModule { }
