import { Product } from '../entities'

export abstract class ProductsRepositoryInterface {
  abstract create(data: Product): Promise<Product>

  abstract getByUrl(url: string): Promise<Product | null>
}
