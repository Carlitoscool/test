import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductDTO } from './dto/product.dto';
import { IProduct } from './interfaces/iProduct.interface';
import { MsProductsClient } from './ms-products-client.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly msProductsClient: MsProductsClient,
        private logger: LoggerService
    ) { }

    @Post()
    async create(@Body() product: CreateProductDTO): Promise<ProductDTO> {
        this.logger.debug('Create product Endpoint');
        return this.msProductsClient.create(product);
    }

    @Get()
    async findAll(): Promise<ProductDTO[]> {
        this.logger.debug('Find all products Endpoint');
        return this.msProductsClient.findAll();
    }

    @Get(':id')
    async findById(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Find product by id Endpoint');
        return this.msProductsClient.findById(productId);
    }

    @Put(':id')
    async update(@Param('id') productId: string, @Body() product: ProductDTO): Promise<ProductDTO> {
        this.logger.debug('Update product Endpoint');
        return this.msProductsClient.update(productId, product);
    }

    @Delete(':id')
    async delete(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Delete product Endpoint');
        return this.msProductsClient.delete(productId);
    }

}
