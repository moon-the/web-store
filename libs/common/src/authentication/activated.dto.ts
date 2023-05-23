import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, MinLength } from "class-validator";

export class ActivatedDTO {
    @IsNotEmpty()
    token: string;
}