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


}
