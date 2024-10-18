import { IsNotEmpty } from "class-validator";

export class ChangeUserPasswordDto{
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    newPassword: string;

}

