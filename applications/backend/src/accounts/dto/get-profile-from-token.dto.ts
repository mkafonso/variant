import { IsString } from 'class-validator'

export class GetProfileFromTokenDto {
  @IsString()
  token: string
}
