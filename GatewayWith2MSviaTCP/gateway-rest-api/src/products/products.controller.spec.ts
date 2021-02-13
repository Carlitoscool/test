import { Test } from '@nestjs/testing';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { ProductDTO } from 'src/dtos/product.dto';
import { LoggerService } from '../logger/logger.service';
import { MsProductsClient } from './ms-products-client.service';
import { ProductsController } from './products.controller';
jest.mock('./ms-products-client.service');
jest.mock('../logger/logger.service');

describe('ProductsController', () => {
  let productsController: ProductsController;

  beforeEach(async () => {
    const productModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [MsProductsClient, LoggerService]
    }).compile();

    productsController = productModule.get(ProductsController);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  it('should respond an array of products', async () => {
    let result: ProductDTO[] = [{
      price: 123,
      productId: "12345"
    }]
    jest.spyOn(productsController, 'findAll').mockResolvedValue(result);
    expect(await productsController.findAll()).toEqual(result);
  });

  it('should respond a product', async () => {
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(productsController, 'findById').mockResolvedValue(result);
    expect(await productsController.findById(result.productId)).toEqual(result);
  });

  it('should create a product', async () => {
    let request: CreateProductDTO = {
      price: 123,
      productId: "12345"
    }
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(productsController, 'create').mockResolvedValue(result);
    expect(await productsController.create(request)).toEqual(result);
  });

  it('should update a product', async () => {
    let request: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(productsController, 'update').mockResolvedValue(result);
    expect(await productsController.update(request.productId, request)).toEqual(result);
  });

  it('should delete a product', async () => {
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(productsController, 'delete').mockResolvedValue(result);
    expect(await productsController.delete("12345")).toEqual(result);
  });

});