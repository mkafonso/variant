import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../../products/repositories'
import { ExperimentsRepositoryInterface } from '../../repositories'
import { CreateExperimentService } from '../create-experiment.service'

export class MakeCreateExperimentService {
  static create(
    experimentsRepository: ExperimentsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
    productsRepository: ProductsRepositoryInterface,
  ) {
    return new CreateExperimentService(
      experimentsRepository,
      accountsRepository,
      productsRepository,
    )
  }
}
