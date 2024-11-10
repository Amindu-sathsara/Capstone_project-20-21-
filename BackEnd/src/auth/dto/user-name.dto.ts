
import {IsNotEmpty} from 'class-validator';
export class UserNameDto {

    
   @IsNotEmpty()
   fullName: string;

   @IsNotEmpty()
   userType: string;

  

  
  }
  

  