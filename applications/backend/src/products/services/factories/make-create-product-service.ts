import { ProductsRepositoryInterface } from '../../repositories'
import { CreateProductService } from '../create-product.service'

export class MakeCreateProductService {
  static create(productsRepository: ProductsRepositoryInterface) {
    return new CreateProductService(productsRepository)
  }
}
