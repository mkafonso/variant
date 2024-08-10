import { IsString } from 'class-validator'

export class DeleteExperimentDto {
  @IsString()
  experimentId: string

  @IsString()
  productId: string

  @IsString()
  requestedByAccountId: string
}
