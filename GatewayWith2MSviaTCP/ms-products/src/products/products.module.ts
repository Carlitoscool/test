import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'src/logger/logger.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductsController],
    providers: [ProductsService, LoggerService],
})
export class ProductsModule { }
