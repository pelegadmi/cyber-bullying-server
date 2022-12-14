import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';
import { UserMessage } from '@interfaces/user-message.interface';

const userSchema: Schema = new Schema({
  scenario_id: {
    type: String,
    require: true,
    unique: false, // some users may go through the same scenario
  },
  nickname: {
    type: String,
    require: true,
  },
  scenario_start_time: {
    type: Date,
    required: true,
  },
  messages: {
    type: Array<UserMessage>(),
    require: false, // might be null if user sent nothing.
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
