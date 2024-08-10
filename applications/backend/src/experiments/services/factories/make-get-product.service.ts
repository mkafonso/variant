import { ProductsRepositoryInterface } from '../../repositories'
import { GetProductService } from '../get-product.service'

export class MakeGetProductService {
  static create(productsRepository: ProductsRepositoryInterface) {
    return new GetProductService(productsRepository)
  }
}
