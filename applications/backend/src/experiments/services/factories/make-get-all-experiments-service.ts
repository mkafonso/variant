import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../../products/repositories'
import { ExperimentsRepositoryInterface } from '../../repositories'
import { GetAllExperimentsService } from '../get-all-experiments.service'

export class MakeGetAllExperimentsService {
  static create(
    experimentsRepository: ExperimentsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
    productsRepository: ProductsRepositoryInterface,
  ) {
    return new GetAllExperimentsService(
      experimentsRepository,
      accountsRepository,
      productsRepository,
    )
  }
}
