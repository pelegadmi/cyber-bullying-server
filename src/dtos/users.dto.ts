import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public nickname: string;
  //todo add scenarioid,

  // @IsString()
  // public _id: string;
}
