import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ShoppingCartDTO } from 'src/dtos/shopping-cart.dto';
import { LoggerService } from 'src/logger/logger.service';
import { ShoppingCartService } from './shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {

    constructor(
        private readonly shoppingCartService: ShoppingCartService,
        private logger: LoggerService
    ) { }

    @MessagePattern( 'create' )
    async create(shoppingCartDTO: ShoppingCartDTO): Promise<ShoppingCartDTO> {
        this.logger.debug('Creating a new shopping-cart in ms-shopping-cart.');
        return await this.shoppingCartService.create(shoppingCartDTO);
    }

    @MessagePattern( 'delete' )
    async delete(shoppingCartId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Deleting a shopping-cart in ms-shopping-cart.');
        return await this.shoppingCartService.delete(shoppingCartId);
    }

    @MessagePattern( 'findById' )
    async findById(shoppingCartId: string): Promise<ShoppingCartDTO> {
        this.logger.debug('Get shopping-cart by id in ms-shopping-cart.');
        return this.shoppingCartService.findById(shoppingCartId);
    }

}
