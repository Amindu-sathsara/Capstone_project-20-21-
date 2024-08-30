//find-user.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
export class FindUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    nicNo: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    contactNo: string;
}