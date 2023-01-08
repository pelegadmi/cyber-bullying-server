import { User } from '@interfaces/users.interface';

export interface ScenarioMessage {
  Text: string;
  milliseconds_offset: number;
  user: User;
}
