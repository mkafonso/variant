import { ConflictException, Injectable } from '@nestjs/common'

import { CreateAccountDto } from '../dto'
import { Account } from '../entities'
import { AccountsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateAccountService {
  constructor(
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: CreateAccountDto) {
    const isEmailTaken = await this.accountsRepository.getByEmail(data.email)
    if (isEmailTaken) {
      throw new ConflictException('emailAlreadyTakenError')
    }

    const account = await Account.create(data.name, data.email, data.password)

    return await this.accountsRepository.create(account)
  }
}
