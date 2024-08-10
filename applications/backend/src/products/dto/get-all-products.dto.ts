import { IsString } from 'class-validator'

export class GetAllProductsDto {
  @IsString()
  requestedByAccountId: string
}
