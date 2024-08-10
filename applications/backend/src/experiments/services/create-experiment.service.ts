import { Injectable, NotFoundException } from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../products/repositories'
import { CreateExperimentDto } from '../dto'
import { Experiment } from '../entities'
import { ExperimentsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateExperimentService {
  constructor(
    private readonly experimentsRepository: ExperimentsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(data: CreateExperimentDto): Promise<Experiment> {
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

    const experiment = Experiment.create(
      data.name,
      data.description,
      data.status,
      data.variations,
      product.id,
    )

    return await this.experimentsRepository.create(experiment)
  }
}
