//import { CreateUserDto } from './user.dto';
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    nicNo: string;

    @IsString()
    userType: string;

}
