import { IsString, IsNotEmpty } from 'class-validator';
export class FindChildProfileDto {
    @IsString() 
    @IsNotEmpty()
    fullName: string;

    @IsString() 
    @IsNotEmpty()
    parentNic: string;

    
}