import { Injectable } from '@nestjs/common'

import { Product } from '../entities'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class GetAllProductsService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.getAll()
    return products
  }
}
