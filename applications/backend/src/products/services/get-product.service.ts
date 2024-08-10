import { Injectable, NotFoundException } from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { GetProductDto } from '../dto'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class GetProductService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: GetProductDto) {
    const account = await this.accountsRepository.getById(
      data.requestedByAccountId,
    )
    if (!account) {
      throw new NotFoundException('account not found')
    }

    const product = await this.productsRepository.getById(data.productId)
    return product
  }
}
