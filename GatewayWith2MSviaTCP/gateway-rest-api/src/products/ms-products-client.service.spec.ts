import { Test, TestingModule } from '@nestjs/testing';
import { MsProductsClient } from './ms-products-client.service';

describe('ProductsService', () => {
  let service: MsProductsClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsProductsClient],
    }).compile();

    service = module.get<MsProductsClient>(MsProductsClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
