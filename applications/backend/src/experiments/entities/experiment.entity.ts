import { createId } from '@paralleldrive/cuid2'

export class Experiment {
  public id: string
  public name: string
  public url: string
  public description: string
  public status: 'active' | 'inactive'
  public variations: { [key: string]: number }
  public createdAt: Date
  public updatedAt: Date

  constructor(
    id: string,
    name: string,
    url: string,
    description: string,
    status: 'active' | 'inactive',
    variations: { [key: string]: number },
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id
    this.name = name
    this.url = url
    this.description = description
    this.status = status
    this.variations = variations
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public static create(
    name: string,
    url: string,
    description: string,
    status: 'active' | 'inactive' = 'active',
    variations: { [key: string]: number } = {},
  ): Experiment {
    const id = createId()
    const createdAt = new Date()
    const updatedAt = new Date()

    return new Experiment(
      id,
      name,
      url,
      description,
      status,
      variations,
      createdAt,
      updatedAt,
    )
  }
}
