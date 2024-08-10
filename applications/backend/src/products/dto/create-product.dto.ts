import { IsString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  name: string

  @IsString()
  url: string

  @IsString()
  description: string
}
