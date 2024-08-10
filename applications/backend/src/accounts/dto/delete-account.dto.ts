import { IsString } from 'class-validator'

export class DeleteAccountDto {
  @IsString()
  accountId: string

  @IsString()
  requestedByAccountId: string
}
