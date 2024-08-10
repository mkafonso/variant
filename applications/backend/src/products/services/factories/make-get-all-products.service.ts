import { ProductsRepositoryInterface } from '../../repositories'
import { GetAllProductsService } from '../get-all-products.service'

export class MakeGetAllProductsService {
  static create(productsRepository: ProductsRepositoryInterface) {
    return new GetAllProductsService(productsRepository)
  }
}
