import { Product } from '../entities'

export abstract class ProductsRepositoryInterface {
  abstract create(data: Product): Promise<Product>

  abstract getById(id: string): Promise<Product | null>

  abstract getByUrl(url: string): Promise<Product | null>

  abstract getAllByAccountId(accountId: string): Promise<Product[]>
}
