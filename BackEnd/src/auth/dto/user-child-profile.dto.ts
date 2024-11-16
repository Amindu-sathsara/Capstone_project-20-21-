
import {IsEmail, IsNotEmpty} from 'class-validator';
export class UserChildProfileDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    fullName: string;

    @IsNotEmpty()
    nicNo: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    contactNo: string;

    @IsNotEmpty()
    userType: string;
    
    childProfiles: any[];

   

   
   

   

  
  }
  

  