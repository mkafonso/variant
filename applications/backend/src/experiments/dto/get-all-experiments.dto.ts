import { IsString } from 'class-validator'

export class GetAllExperimentsDto {
  @IsString()
  productId: string

  @IsString()
  requestedByAccountId: string
}
