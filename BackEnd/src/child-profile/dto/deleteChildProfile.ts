// deleteChildProfile.ts


//this dto is used to delete a child only using two values : fullName and parentNic


import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteChildProfileDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  parentNic: string;
}
