import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

export interface Scenario {
  _id: any;
  tag: string;
  severity: Severity;
  commentType: CommentType;
  creationDate: Date;
  numberOfUsers: Number;
  messages: Array<ScenarioMessage>;
  silentUsers: Array<string>;
}
