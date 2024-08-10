import { ConflictException, Injectable } from '@nestjs/common'

import { CreateProductDto } from '../dto'
import { Product } from '../entities'
import { ProductsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateProductService {
  constructor(
    private readonly productsRepository: ProductsRepositoryInterface,
  ) {}

  async execute(data: CreateProductDto) {
    const isUrlTaken = await this.productsRepository.getByUrl(data.url)
    if (isUrlTaken) {
      throw new ConflictException('url already in use')
    }

    const product = Product.create(data.name, data.url, data.description)

    return await this.productsRepository.create(product)
  }
}
