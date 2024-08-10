import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

import { DeleteAccountDto } from '../dto'
import { AccountsRepositoryInterface } from '../repositories'

@Injectable()
export class DeleteAccountService {
  constructor(
    private readonly accountsRepository: AccountsRepositoryInterface,
  ) {}

  async execute(data: DeleteAccountDto) {
    const account = await this.accountsRepository.getById(data.accountId)
    if (!account) {
      throw new NotFoundException('account not found')
    }

    const hasPermission = data.accountId !== data.requestedByAccountId
    if (!hasPermission) {
      throw new UnauthorizedException('missing permission')
    }

    await this.accountsRepository.delete(account.id)

    return {
      message: 'account deleted successfully',
    }
  }
}
