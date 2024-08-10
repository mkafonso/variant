import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../repositories'
import { GetProductService } from '../get-product.service'

export class MakeGetProductService {
  static create(
    productsRepository: ProductsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
  ) {
    return new GetProductService(productsRepository, accountsRepository)
  }
}
