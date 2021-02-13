import { Test, TestingModule } from '@nestjs/testing';
import { MsProductsClientService } from './ms-products-client.service';

describe('MsProductsClientService', () => {
  let service: MsProductsClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsProductsClientService],
    }).compile();

    service = module.get<MsProductsClientService>(MsProductsClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
