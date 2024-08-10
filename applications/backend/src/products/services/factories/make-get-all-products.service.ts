import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../repositories'
import { GetAllProductsService } from '../get-all-products.service'

export class MakeGetAllProductsService {
  static create(
    productsRepository: ProductsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
  ) {
    return new GetAllProductsService(productsRepository, accountsRepository)
  }
}
