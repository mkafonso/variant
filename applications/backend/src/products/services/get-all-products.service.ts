import { Injectable, NotFoundException } from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { GetAllProductsDto } from '../dto'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class GetAllProductsService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: GetAllProductsDto) {
    const account = await this.accountsRepository.getById(
      data.requestedByAccountId,
    )
    if (!account) {
      throw new NotFoundException('account not found')
    }

    const products = await this.productsRepository.getAll()
    return products
  }
}
