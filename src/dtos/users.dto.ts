import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public nickname: string;

  @IsString()
  public scenario_id: string;
}

export class UpdateUserDto {
  @IsString()
  public nickname: string;
  public messages: [string];

  @IsString()
  public scenario_id: string;
}
