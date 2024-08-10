import { createId } from '@paralleldrive/cuid2'

export class Experiment {
  public id: string
  public productId: string
  public name: string
  public description: string
  public status: 'active' | 'inactive'
  public variations: { [key: string]: number }
  public createdAt: Date
  public updatedAt: Date

  constructor(
    id: string,
    productId: string,
    name: string,
    description: string,
    status: 'active' | 'inactive',
    variations: { [key: string]: number },
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id
    this.productId = productId
    this.name = name
    this.description = description
    this.status = status
    this.variations = variations
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public static create(
    name: string,
    description: string,
    status: 'active' | 'inactive' = 'active',
    variations: { [key: string]: number } = {},
    productId: string,
  ): Experiment {
    const id = createId()
    const createdAt = new Date()
    const updatedAt = new Date()

    return new Experiment(
      id,
      productId,
      name,
      description,
      status,
      variations,
      createdAt,
      updatedAt,
    )
  }
}
