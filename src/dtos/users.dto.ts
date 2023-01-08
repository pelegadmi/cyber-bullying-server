import { IsString } from 'class-validator';
import { UserMessage } from '@interfaces/user-message.interface';

export class CreateUserDto {
  @IsString()
  public nickname: string;

  @IsString()
  public scenario_id: string;
}

export class UpdateUserDto {
  @IsString()
  public nickname: string;
  public messages: [message: UserMessage];

  @IsString()
  public scenario_id: string;
}
