import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerService } from 'src/logger/logger.service';
import { ProductDTO } from './dto/product.dto';
import { IProduct } from './interfaces/iProduct.interface';
import { IUpdateProduct } from './interfaces/iUpdateProduct.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
        private logger: LoggerService
    ) { }

    @MessagePattern( 'create' )
    async create(productDTO: IProduct): Promise<ProductDTO> {
        this.logger.debug('Creating a new product in ms-products.');
        return await this.productsService.create(productDTO);
    }

    @MessagePattern( 'findAll' )
    async findAll(): Promise<ProductDTO[]> {
        this.logger.debug('Find all products in ms-products.');
        return await this.productsService.findAll();
    }

    @MessagePattern( 'findById' )
    async findById(productId: string): Promise<ProductDTO> {
        this.logger.debug('Find a products by id in ms-products.');
        return await this.productsService.findById(productId);
    }

    @MessagePattern( 'update' )
    async update(updateProductDTO: IUpdateProduct): Promise<ProductDTO> {
        this.logger.debug('Updating a product in ms-products.');
        return await this.productsService.update(updateProductDTO);
    }

    @MessagePattern( 'delete' )
    async delete(productId: string): Promise<ProductDTO> {
        this.logger.debug('Deleting a product in ms-products.');
        return await this.productsService.delete(productId);
    }

}
