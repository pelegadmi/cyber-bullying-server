import { AddUserMessageDto, CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { UserMessage } from '@interfaces/user-message.interface';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    return this.users.find();
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'UserId is empty');

    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    if (isEmpty(createUserDto)) throw new HttpException(400, 'createUserDto is empty');

    return await this.users.create({
      ...createUserDto,
      scenario_id: '1', // todo calculate scenario_id
      scenario_start_time: Date.now(),
      messages: Array<UserMessage>(),
    });
  }

  public async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (isEmpty(updateUserDto)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.findUserById(userId);

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, {
      ...updateUserDto,
      scenario_start_time: findUser.scenario_start_time,
    });

    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return updateUserById;
  }

  public async addUserMessages(userId: string, addUserMessageDto: AddUserMessageDto): Promise<User> {
    if (isEmpty(addUserMessageDto)) throw new HttpException(400, 'messages array is empty');

    const findUser: User = await this.findUserById(userId);

    const combinedMessages = findUser.messages;
    combinedMessages.push(...addUserMessageDto.messages);

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, {
      messages: combinedMessages,
      scenario_start_time: findUser.scenario_start_time,
      scenario_id: findUser.scenario_id,
      nickname: findUser.nickname,
    });

    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return { ...updateUserById, messages: combinedMessages };
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    return deleteUserById;
  }
}

export default UserService;
