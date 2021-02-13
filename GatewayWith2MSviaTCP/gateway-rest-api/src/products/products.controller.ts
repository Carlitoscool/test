import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { ProductDTO } from '../dtos/product.dto';
import { LoggerService } from '../logger/logger.service';
import { MsProductsClient } from './ms-products-client.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly msProductsClient: MsProductsClient,
        private logger: LoggerService
    ) { }

    @ApiCreatedResponse({ type: ProductDTO })
    @Post()
    async create(@Body() product: CreateProductDTO): Promise<ProductDTO> {
        this.logger.debug('Create product Endpoint');
        return this.msProductsClient.create(product);
    }

    @ApiOkResponse({ type: ProductDTO })
    @Get()
    async findAll(): Promise<ProductDTO[]> {
        this.logger.debug('Find all products Endpoint');
        return this.msProductsClient.findAll();
    }

    @ApiOkResponse({ type: ProductDTO })
    @Get(':id')
    async findById(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Find product by id Endpoint');
        return this.msProductsClient.findById(productId);
    }

    @ApiOkResponse({ type: ProductDTO })
    @Put(':id')
    async update(@Param('id') productId: string, @Body() product: ProductDTO): Promise<ProductDTO> {
        this.logger.debug('Update product Endpoint');
        return this.msProductsClient.update(productId, product);
    }

    @ApiOkResponse({ type: ProductDTO })
    @Delete(':id')
    async delete(@Param('id') productId: string): Promise<ProductDTO> {
        this.logger.debug('Delete product Endpoint');
        return this.msProductsClient.delete(productId);
    }

}
