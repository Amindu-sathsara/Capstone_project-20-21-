// delete-user.dto.ts

//this dto is used to delete a user only using two values : fullName and nicNo


import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  nicNo: string;
}
