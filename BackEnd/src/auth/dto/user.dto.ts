
import {IsNotEmpty} from 'class-validator';
export class UserDto {

    @IsNotEmpty()
    id: string;

   @IsNotEmpty()
   fullName: string;

   @IsNotEmpty()
   nicNo: string;

   @IsNotEmpty()
   email: string;

   @IsNotEmpty()
   contactNo: string;

   @IsNotEmpty()
   userType: string;

   @IsNotEmpty()
   userName: string;

  
  }
  

  