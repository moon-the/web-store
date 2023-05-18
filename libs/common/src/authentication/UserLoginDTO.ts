import { IsNotEmpty, MinLength } from "class-validator";

export class UserLoginDTO {
  
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}