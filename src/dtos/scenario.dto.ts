import { IsNumber, IsString } from "class-validator";
import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

export class CreateScenarioDto {
  public severity: Severity;
  public commentType: CommentType;

  @IsString()
  public tag: string;

  @IsNumber()
  public numberOfUsers: Number;

  public messages: Array<ScenarioMessage>;
}
