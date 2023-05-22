import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class UserLoginDTO {
    @ApiProperty()
    @IsNotEmpty()
    username: string;


    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}