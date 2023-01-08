import { UserMessage } from '@interfaces/user-message.interface';

export interface User {
  scenario_id: string;
  nickname: string;
  scenario_start_time: Date;
  messages: Array<UserMessage>;
}
