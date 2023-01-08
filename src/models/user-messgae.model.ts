import { model, Schema, Document } from 'mongoose';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';
import { UserMessage } from '@interfaces/user-message.interface';

const userMessageSchema: Schema = new Schema({
  text: {
    type: String,
    require: true,
  },
  milliseconds_offset: {
    type: Number,
    require: true,
  },
});

const userMessageModel = model<UserMessage & Document>('ScenarioMessage', userMessageSchema);

export default userMessageModel;
