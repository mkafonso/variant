import { createId } from '@paralleldrive/cuid2'

export class Product {
  public id: string
  public name: string
  public url: string
  public description: string
  public apiKey: string | null
  public createdAt: Date

  constructor(
    id: string,
    name: string,
    url: string,
    description: string,
    apiKey: string | null,
    createdAt: Date,
  ) {
    this.id = id
    this.name = name
    this.url = url
    this.description = description
    this.apiKey = apiKey
    this.createdAt = createdAt
  }

  public static create(
    name: string,
    url: string,
    description: string,
  ): Product {
    const apiKey = 'api-key-gerado-de-forma-magica'
    const id = createId()
    const createdAt = new Date()

    return new Product(id, name, url, description, apiKey, createdAt)
  }
}
