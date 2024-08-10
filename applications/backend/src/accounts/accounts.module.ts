import { Module } from '@nestjs/common'

import { MemoryAccountsRepository } from '../__tests__'
import { AccountsController } from './accounts.controller'
import { AccountsRepositoryInterface } from './repositories'
import {
  CreateAccountService,
  CreateSessionService,
  DeleteAccountService,
} from './services'

@Module({
  controllers: [AccountsController],
  providers: [
    CreateAccountService,
    DeleteAccountService,
    CreateSessionService,
    {
      provide: AccountsRepositoryInterface,
      useClass: MemoryAccountsRepository,
    },
  ],
})
export class AccountsModule {}
