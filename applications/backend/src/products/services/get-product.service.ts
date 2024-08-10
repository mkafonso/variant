import { Injectable } from '@nestjs/common'

import { GetProductDto } from '../dto'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class GetProductService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(data: GetProductDto) {
    const product = await this.productsRepository.getById(data.productId)
    return product
  }
}
