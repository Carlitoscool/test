import { ProductDTO } from "../dto/product.dto";

export interface IUpdateProduct {
    productId?: string;
    product: ProductDTO;
  }