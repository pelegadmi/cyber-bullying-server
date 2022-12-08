import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';

export interface Scenario {
  id: Date;
  severity: Severity;
  commentType: CommentType;
  numberOfUsers: Number;
  message: [];
}
