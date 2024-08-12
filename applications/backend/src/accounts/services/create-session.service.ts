import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

import { CreateSessionDto } from '../dto'
import { AccountsRepositoryInterface } from '../repositories'

@Injectable()
export class CreateSessionService {
  constructor(
    private readonly accountsRepository: AccountsRepositoryInterface,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: CreateSessionDto) {
    const account = await this.accountsRepository.getByEmail(data.email)
    if (!account) {
      throw new UnauthorizedException('invalidCredentialsError')
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      account.password,
    )
    if (!isPasswordValid) {
      throw new UnauthorizedException('invalidCredentialsError')
    }

    const payload = { sub: account.id }
    const token = await this.jwtService.signAsync(payload)

    return {
      account: {
        id: account.id,
        name: account.name,
        email: account.email,
      },
      token,
    }
  }
}
