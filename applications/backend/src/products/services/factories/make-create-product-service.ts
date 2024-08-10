import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../repositories'
import { CreateProductService } from '../create-product.service'

export class MakeCreateProductService {
  static create(
    productsRepository: ProductsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
  ) {
    return new CreateProductService(productsRepository, accountsRepository)
  }
}
