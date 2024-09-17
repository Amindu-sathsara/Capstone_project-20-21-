
import {IsNotEmpty} from 'class-validator';
export class AuthorizedUserResultDto {
    @IsNotEmpty()
    accessToken: string;

    @IsNotEmpty()
    nicNo: string;
    
    @IsNotEmpty()
    userName: string;
  }

  
  //type AuthResult = { accessToken: string, userId: string, username: string };
