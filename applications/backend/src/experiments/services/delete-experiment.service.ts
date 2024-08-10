import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../products/repositories'
import { DeleteExperimentDto } from '../dto'
import { ExperimentsRepositoryInterface } from '../repositories'

@Injectable()
export class DeleteExperimentService {
  constructor(
    private readonly experimentsRepository: ExperimentsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(data: DeleteExperimentDto) {
    const account = await this.accountsRepository.getById(
      data.requestedByAccountId,
    )
    if (!account) {
      throw new NotFoundException('account not found')
    }

    const product = await this.productsRepository.getById(data.productId)
    if (!product) {
      throw new NotFoundException('product not found')
    }

    const experiment = await this.experimentsRepository.getById(
      data.experimentId,
    )
    if (!experiment) {
      throw new NotFoundException('experiment not found')
    }

    const hasPermission = product.ownerId === data.requestedByAccountId
    if (!hasPermission) {
      throw new UnauthorizedException('missing permission')
    }

    await this.experimentsRepository.delete(account.id)

    return {
      message: 'experiment deleted successfully',
    }
  }
}
