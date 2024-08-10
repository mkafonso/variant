import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'

import { CreateAccountDto, CreateSessionDto } from './dto'
import {
  CreateAccountService,
  CreateSessionService,
  DeleteAccountService,
} from './services'

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountService: CreateAccountService,
    private readonly createSessionService: CreateSessionService,
    private readonly deleteAccountService: DeleteAccountService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async createAccount(@Body() dto: CreateAccountDto) {
    return this.createAccountService.execute(dto)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async createSession(@Body() dto: CreateSessionDto) {
    return this.createSessionService.execute(dto)
  }

  @Delete(':accountId')
  @HttpCode(HttpStatus.OK)
  async deleteAccount(@Param('accountId') accountId: string) {
    const requestedByAccountId = '-----'

    return this.deleteAccountService.execute({
      accountId,
      requestedByAccountId,
    })
  }
}
