import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { MemoryAccountsRepository } from '../__tests__'
import { AccountsController } from './accounts.controller'
import { AccountsRepositoryInterface } from './repositories'
import {
  CreateAccountService,
  CreateSessionService,
  DeleteAccountService,
  GetProfileFromTokenService,
} from './services'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret:
        'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AccountsController],
  providers: [
    CreateAccountService,
    DeleteAccountService,
    CreateSessionService,
    GetProfileFromTokenService,
    {
      provide: AccountsRepositoryInterface,
      useClass: MemoryAccountsRepository,
    },
  ],
})
export class AccountsModule {}
