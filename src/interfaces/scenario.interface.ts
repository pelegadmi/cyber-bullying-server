import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

export interface Scenario {
  severity: Severity;
  commentType: CommentType;
  numberOfUsers: Number;
  messages: Array<ScenarioMessage>;
}
