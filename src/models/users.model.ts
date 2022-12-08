import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  id: {
    type: Date,
    require: true,
    unique: true,
  },
  scenario_id: {
    type: Date,
    require: true,
    unique: false, // it is not unique per user.
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
    type: [String],
    require: false, // might be false if user sent nothing.
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
