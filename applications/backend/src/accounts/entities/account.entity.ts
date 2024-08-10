import { createId } from '@paralleldrive/cuid2'
import * as bcrypt from 'bcryptjs'

export class Account {
  public id: string
  public name: string
  public email: string
  public password: string
  public createdAt: Date

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.createdAt = createdAt
  }

  public static async create(
    name: string,
    email: string,
    password: string,
  ): Promise<Account> {
    const hashedPassword = await bcrypt.hash(password, 12)
    const id = createId()
    const createdAt = new Date()

    return new Account(id, name, email, hashedPassword, createdAt)
  }
}
