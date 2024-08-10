import { IsEnum, IsObject, IsOptional, IsString, IsUrl } from 'class-validator'

export class CreateExperimentDto {
  @IsString()
  name: string

  @IsString()
  @IsUrl()
  url: string

  @IsOptional()
  description?: string

  @IsOptional()
  @IsEnum(['active', 'inactive'])
  status?: 'active' | 'inactive'

  @IsOptional()
  @IsObject()
  variations?: { [key: string]: number }

  @IsString()
  productId: string

  @IsString()
  requestedByAccountId: string
}
