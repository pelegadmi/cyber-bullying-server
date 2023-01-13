import { IsString } from 'class-validator';

export class AdminLoginDto {
  @IsString()
  public password: string;
}
