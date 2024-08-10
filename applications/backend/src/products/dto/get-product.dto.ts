import { IsString } from 'class-validator'

export class GetProductDto {
  @IsString()
  productId: string
}
