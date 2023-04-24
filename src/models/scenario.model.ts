import { model, Schema, Document } from 'mongoose';
import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { Scenario } from '@interfaces/scenario.interface';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

const scenarioSchema: Schema = new Schema({
  tag: {
    type: String,
    require: true,
  },
  severity: {
    type: String,
    enum: Severity,
    require: true,
  },
  commentType: {
    type: String,
    enum: CommentType,
    require: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  numberOfUsers: {
    type: Number,
    required: true,
  },
  messages: {
    type: Array<ScenarioMessage>(),
    require: true,
  },
  silentUsers: {
    type: Array<string>,
    require: true,
  },
});

const scenarioModel = model<Scenario & Document>('Scenario', scenarioSchema);

export default scenarioModel;
