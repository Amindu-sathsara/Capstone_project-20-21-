
import {IsNotEmpty} from 'class-validator';
export class SignInUserDto {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    nicNo: string;

    @IsNotEmpty()
    userType: string;
  }
  