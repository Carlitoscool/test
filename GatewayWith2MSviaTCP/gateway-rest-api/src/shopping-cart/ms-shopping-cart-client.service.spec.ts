import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { ShoppingCartDTO } from 'src/dtos/shopping-cart.dto';
import { LoggerService } from '../logger/logger.service';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';

describe('MsShoppingCartClient', () => {
  let service: MsShoppingCartClient;

  beforeEach(async () => {
    const shoppingCartModule = await Test.createTestingModule({
      providers: [MsShoppingCartClient, LoggerService],
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
    service = shoppingCartModule.get(MsShoppingCartClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should respond a shopping cart', async () => {
    let result: ShoppingCartDTO = {
      shoppingCartId: "123",
      totalPrice: 123,
      totalQuantity: 1,
      userId: "1234",
      products: [{
        price: "123",
        productId: "12345"
      }]
    }
    jest.spyOn(service, 'findById').mockResolvedValue(result);
    expect(await service.findById(result.shoppingCartId)).toEqual(result);
  });

  it('should create a shopping cart', async () => {
    let request: CreateShoppingCartDTO = {
      shoppingCartId: "1234",
      userId: "1234"
    }
    let result: ShoppingCartDTO = {
      shoppingCartId: "1234",
      userId: "1234",
      totalPrice: 0,
      totalQuantity: 0,
      products: []
    }
    jest.spyOn(service, 'create').mockResolvedValue(result);
    expect(await service.create(request)).toEqual(result);
  });

  it('should delete a shopping cart', async () => {
    let shoppingCartId: string = "1234";
    let result: ShoppingCartDTO = {
      shoppingCartId: "1234",
      userId: "1234",
      totalPrice: 0,
      totalQuantity: 0,
      products: []
    }
    jest.spyOn(service, 'delete').mockResolvedValue(result);
    expect(await service.delete(shoppingCartId)).toEqual(result);
  });

  it('should add a product to the shopping cart', async () => {
    let shoppingCartId: string = "1234";
    let productId: string = "222";
    let result: ShoppingCartDTO = {
      shoppingCartId: "1234",
      userId: "1234",
      totalPrice: 0,
      totalQuantity: 0,
      products: [{
        price: "123",
        productId: "222"
      }]
    }
    jest.spyOn(service, 'addProduct').mockResolvedValue(result);
    expect(await service.addProduct(shoppingCartId, productId)).toEqual(result);
  });

  it('should remove a product to the shopping cart', async () => {
    let shoppingCartId: string = "1234";
    let productId: string = "222";
    let result: ShoppingCartDTO = {
      shoppingCartId: "1234",
      userId: "1234",
      totalPrice: 0,
      totalQuantity: 0,
      products: []
    }
    jest.spyOn(service, 'removeProduct').mockResolvedValue(result);
    expect(await service.removeProduct(shoppingCartId, productId)).toEqual(result);
  });

});
