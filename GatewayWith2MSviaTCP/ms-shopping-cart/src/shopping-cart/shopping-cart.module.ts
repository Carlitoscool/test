import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from 'src/logger/logger.service';
import Product from './model/product.entity';
import ShoppingCart from './model/shopping-cart.entity';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShoppingCart]),
        TypeOrmModule.forFeature([Product])
    ],
    providers:[ShoppingCartService, LoggerService],
    controllers: [ShoppingCartController],
    exports: [TypeOrmModule]
})
export class ShoppingCartModule { }
