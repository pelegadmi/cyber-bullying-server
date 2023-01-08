import { model, Schema, Document } from 'mongoose';
import { Severity } from '@/enums/severity.enum';
import { CommentType } from '@/enums/commentType.enum';
import { Scenario } from '@interfaces/scenario.interface';
import scenarioMessageModel from '@models/scenario-messgae.model';

const scenarioSchema: Schema = new Schema({
  severity: {
    type: String,
    enum: Severity,
    require: true,
  },
  comment_type: {
    type: String,
    enum: CommentType,
    require: true,
  },
  number_of_users: {
    type: Number,
    required: true,
  },
  messages: {
    type: [scenarioMessageModel], // Array of ScenarioMessages
    require: true,
  },
});

const scenarioModel = model<Scenario & Document>('Scenario', scenarioSchema);

export default scenarioModel;
