import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'

import { CreateSessionDto } from '../dto'
import { AccountsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateSessionService {
  constructor(
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: CreateSessionDto) {
    const account = await this.accountsRepository.getByEmail(data.email)
    if (!account) {
      throw new UnauthorizedException('invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      account.password,
    )
    if (!isPasswordValid) {
      throw new UnauthorizedException('invalid credentials')
    }

    return {
      account: {
        id: account.id,
        name: account.name,
        email: account.email,
      },
    }
  }
}
