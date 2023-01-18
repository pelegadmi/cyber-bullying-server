import { IsString } from 'class-validator';
import { UserMessage } from '@interfaces/user-message.interface';

export class CreateUserDto {
  @IsString()
  public nickname: string;
}

export class UpdateUserDto {
  @IsString()
  public nickname: string;
  public messages: Array<UserMessage>;

  @IsString()
  public scenario_id: string;
}
export class AddUserMessageDto {
  public messages: Array<UserMessage>;
}
