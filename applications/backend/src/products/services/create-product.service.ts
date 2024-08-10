import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { AccountsRepositoryInterface } from '../../accounts/repositories'
import { CreateProductDto } from '../dto'
import { Product } from '../entities'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateProductService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: CreateProductDto) {
    const account = await this.accountsRepository.getById(
      data.requestedByAccountId,
    )
    if (!account) {
      throw new NotFoundException('account not found')
    }

    const isUrlTaken = await this.productsRepository.getByUrl(data.url)
    if (isUrlTaken) {
      throw new ConflictException('url already in use')
    }

    const product = Product.create(
      data.name,
      data.url,
      data.description,
      account.id,
    )

    return await this.productsRepository.create(product)
  }
}
