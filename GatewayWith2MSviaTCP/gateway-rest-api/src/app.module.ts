import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ProductsService } from './products/products.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [ProductsModule, ShoppingCartModule, LoggerModule],
  controllers: [AppController, ProductsController, ShoppingCartController],
  providers: [
    AppService, 
    ProductsService, 
    ShoppingCartService, 
    LoggerService
  ],
})
export class AppModule {}
