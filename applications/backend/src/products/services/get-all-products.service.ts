import { Injectable } from '@nestjs/common'

import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class GetAllProductsService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute() {
    const products = await this.productsRepository.getAll()
    return products
  }
}
