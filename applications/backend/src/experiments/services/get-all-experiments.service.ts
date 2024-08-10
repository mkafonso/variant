import { Injectable, NotFoundException } from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { ProductsRepositoryInterface } from '../../products/repositories'
import { GetAllExperimentsDto } from '../dto'
import { ExperimentsRepositoryInterface } from '../repositories'

@Injectable()
export class GetAllExperimentsService {
  constructor(
    private readonly experimentsRepository: ExperimentsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(data: GetAllExperimentsDto) {
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

    const products = await this.experimentsRepository.getAll()
    return products
  }
}
