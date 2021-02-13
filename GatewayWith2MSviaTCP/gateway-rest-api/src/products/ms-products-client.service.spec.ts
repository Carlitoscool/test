import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { ProductDTO } from 'src/dtos/product.dto';
import { LoggerService } from '../logger/logger.service';
import { MsProductsClient } from './ms-products-client.service';
jest.mock('../logger/logger.service');

describe('MsProductsClient', () => {
  let service: MsProductsClient;

  beforeEach(async () => {
    const productModule = await Test.createTestingModule({
      providers: [MsProductsClient, LoggerService],
      imports: [
        ClientsModule.register([{
          name: 'GATEWAY-REST-API',
          transport: Transport.TCP,
          options: {
            host: process.env.MS_PRODUCTS_ADDRESS,
            port: parseInt(process.env.MS_PRODUCTS_PORT),
          }
        }])
      ]
    }).compile();

    service = productModule.get(MsProductsClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should respond an array of products', async () => {
    let result: ProductDTO[] = [{
      price: 123,
      productId: "12345"
    }]
    jest.spyOn(service, 'findAll').mockResolvedValue(result);
    expect(await service.findAll()).toEqual(result);
  });

  it('should respond a product', async () => {
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(service, 'findById').mockResolvedValue(result);
    expect(await service.findById(result.productId)).toEqual(result);
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
    jest.spyOn(service, 'create').mockResolvedValue(result);
    expect(await service.create(request)).toEqual(result);
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
    jest.spyOn(service, 'update').mockResolvedValue(result);
    expect(await service.update(request.productId, request)).toEqual(result);
  });

  it('should delete a product', async () => {
    let result: ProductDTO = {
      price: 123,
      productId: "12345"
    }
    jest.spyOn(service, 'delete').mockResolvedValue(result);
    expect(await service.delete("12345")).toEqual(result);
  });

});
