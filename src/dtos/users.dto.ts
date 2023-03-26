import { IsString } from 'class-validator';
import { UserMessage } from '@interfaces/user-message.interface';
import { Scenario } from '@interfaces/scenario.interface';
import { User } from '@interfaces/users.interface';

export class CreateUserDto {
  @IsString()
  public nickname: string;
  @IsString()
  public scenarioId: string;
}

export class CreatedUserDto {
  public user: User;
  public scenario: Scenario;
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
