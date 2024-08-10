import { AccountsRepositoryInterface } from '../../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../../products/repositories'
import { ExperimentsRepositoryInterface } from '../../repositories'
import { DeleteExperimentService } from '../delete-experiment.service'

export class MakeDeleteExperimentService {
  static create(
    experimentsRepository: ExperimentsRepositoryInterface,
    accountsRepository: AccountsRepositoryInterface,
    productsRepository: ProductsRepositoryInterface,
  ) {
    return new DeleteExperimentService(
      experimentsRepository,
      accountsRepository,
      productsRepository,
    )
  }
}
