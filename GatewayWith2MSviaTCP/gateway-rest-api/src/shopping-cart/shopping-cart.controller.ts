import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateShoppingCartDTO } from '../dtos/create-shopping-cart';
import { LoggerService } from '../logger/logger.service';
import { ShoppingCartDTO } from '../dtos/shopping-cart.dto';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';

@Controller('shopping-carts')
export class ShoppingCartController {

    constructor(
        private readonly msShoppingCartClient: MsShoppingCartClient,
        private logger: LoggerService
    ) { }

    @ApiCreatedResponse({ type: ShoppingCartDTO })
    @Post()
    async create(@Body() shoopingCart: CreateShoppingCartDTO): Promise<ShoppingCartDTO> {
        this.logger.debug('Create shopping cart Endpoint');
        return this.msShoppingCartClient.create(shoopingCart);
    }

    @ApiOkResponse({ type: ShoppingCartDTO })
    @Delete(':id')
    async delete(@Param('id') shoppingCartId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Delete shopping cart Endpoint');
        return this.msShoppingCartClient.delete(shoppingCartId);
    }

    @ApiOkResponse({ type: ShoppingCartDTO })
    @Get(':id')
    async findById(@Param('id') shoppingCartId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Get shopping cart by id Endpoint');
        return this.msShoppingCartClient.findById(shoppingCartId);
    }

    @ApiOkResponse({ type: ShoppingCartDTO })
    @Put(':shoppingCartId/addProduct/:productId')
    async addProduct(@Param('shoppingCartId') shoppingCartId: string, @Param('productId') productId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Add product to shopping cart Endpoint');
        return this.msShoppingCartClient.addProduct(shoppingCartId, productId);
    }

    @ApiOkResponse({ type: ShoppingCartDTO })
    @Put(':shoppingCartId/removeProduct/:productId')
    async removeProduct(@Param('shoppingCartId') shoppingCartId: string, @Param('productId') productId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Remove product product to shopping cart Endpoint');
        return this.msShoppingCartClient.removeProduct(shoppingCartId, productId);
    }

}
