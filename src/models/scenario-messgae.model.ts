import { model, Schema, Document } from 'mongoose';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

const scenarioMessageSchema: Schema = new Schema({
  text: {
    type: String,
    require: true,
  },
  milliseconds_offset: {
    type: Number,
    require: true,
  },
  user: {
    type: Object,
    require: true,
  },
});

const scenarioMessageModel = model<ScenarioMessage & Document>('ScenarioMessage', scenarioMessageSchema);

export default scenarioMessageModel;
