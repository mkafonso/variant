import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { GetProfileFromTokenDto } from '../dto'
import { AccountsRepositoryInterface } from '../repositories'

@Injectable()
export class GetProfileFromTokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: GetProfileFromTokenDto) {
    const decoded = this.jwtService.verify(data.token)

    const account = await this.accountsRepository.getById(decoded.sub)
    if (!account) {
      throw new UnauthorizedException('userNotFound')
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
