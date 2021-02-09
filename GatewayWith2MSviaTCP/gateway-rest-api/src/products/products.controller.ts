import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
        private logger: LoggerService
    ) { }

    @Get()
    async findAll(): Promise<ProductDTO[]> {
        this.logger.debug('Find all products Endpoint');
        return this.productsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Find product by id Endpoint');
        return this.productsService.findById(productId);
    }

    @Post()
    async create(@Body() product: Product): Promise<ProductDTO> {
        this.logger.debug('Create product Endpoint');
        return this.productsService.create(product);
    }

    @Put(':id')
    async update(@Param('id') productId: string, @Body() product: Product): Promise<ProductDTO> {
        this.logger.debug('Update product Endpoint');
        return this.productsService.update(productId, product);
    }

    @Delete(':id')
    async delete(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Delete product Endpoint');
        return this.productsService.delete(productId);
    }

}
