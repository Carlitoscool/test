import { Test, TestingModule } from '@nestjs/testing';
import { MsShoppingCartClient } from './ms-shopping-cart-client.service';

describe('MsShoppingCartClient', () => {
  let service: MsShoppingCartClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsShoppingCartClient],
    }).compile();

    service = module.get<MsShoppingCartClient>(MsShoppingCartClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
