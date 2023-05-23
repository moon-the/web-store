import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserRegisterDTO {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    link: string;
}