import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'

import {
  CreateAccountDto,
  CreateSessionDto,
  GetProfileFromTokenDto,
} from './dto'
import {
  CreateAccountService,
  CreateSessionService,
  DeleteAccountService,
  GetProfileFromTokenService,
} from './services'

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountService: CreateAccountService,
    private readonly createSessionService: CreateSessionService,
    private readonly deleteAccountService: DeleteAccountService,
    private readonly getProfileFromTokenService: GetProfileFromTokenService,
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

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async getProfile(@Body() dto: GetProfileFromTokenDto) {
    return this.getProfileFromTokenService.execute(dto)
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
