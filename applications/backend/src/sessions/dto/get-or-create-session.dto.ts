import { IsObject, IsOptional, IsString } from 'class-validator'

export class GetOrCreateSessionDto {
  @IsString()
  sessionId: string

  @IsString()
  productId: string

  @IsString()
  @IsOptional()
  ipAddress?: string

  @IsString()
  @IsOptional()
  device?: string

  @IsString()
  @IsOptional()
  os?: string

  @IsString()
  @IsOptional()
  browserVersion?: string

  @IsString()
  @IsOptional()
  browserLanguage?: string

  @IsString()
  @IsOptional()
  location?: string

  @IsString()
  @IsOptional()
  numberOfVisits?: number

  @IsOptional()
  @IsObject()
  variantAssignments?: { [experimentId: string]: string }
}
