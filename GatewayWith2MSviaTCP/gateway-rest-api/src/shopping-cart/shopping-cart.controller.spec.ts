import { Test } from '@nestjs/testing';
import { CreateShoppingCartDTO } from 'src/dtos/create-shopping-cart';
import { ShoppingCartDTO } from 'src/dtos/shopping-cart.dto';
import { LoggerService } from '../logger/logger.service';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';
import { ShoppingCartController } from './shopping-cart.controller';
jest.mock('./ms-shopping-cart-client.service');
jest.mock('../logger/logger.service');

describe('ShoppingCartController', () => {
  let controller: ShoppingCartController;
  let msShoppingCartClient: MsShoppingCartClient;

  beforeEach(async () => {
    const shoppingCartModule = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [MsShoppingCartClient, LoggerService]
    }).compile();

    msShoppingCartClient = shoppingCartModule.get(MsShoppingCartClient);
    controller = shoppingCartModule.get(ShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
    jest.spyOn(controller, 'findById').mockResolvedValue(result);
    expect(await controller.findById(result.shoppingCartId)).toEqual(result);
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
    jest.spyOn(controller, 'create').mockResolvedValue(result);
    expect(await controller.create(request)).toEqual(result);
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
    jest.spyOn(controller, 'delete').mockResolvedValue(result);
    expect(await controller.delete(shoppingCartId)).toEqual(result);
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
    jest.spyOn(controller, 'addProduct').mockResolvedValue(result);
    expect(await controller.addProduct(shoppingCartId, productId)).toEqual(result);
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
    jest.spyOn(controller, 'removeProduct').mockResolvedValue(result);
    expect(await controller.removeProduct(shoppingCartId, productId)).toEqual(result);
  });
});
