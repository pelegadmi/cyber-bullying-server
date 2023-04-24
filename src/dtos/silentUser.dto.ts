import { IsString } from 'class-validator';
export class SilentUserDto {
  @IsString()
  public nickname: string;
}
