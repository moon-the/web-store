import { IsNotEmpty, MinLength } from "class-validator";

export class DTOChat {
    @IsNotEmpty()
    @MinLength(5)
    token: string;

    @IsNotEmpty()
    message: string;

    @IsNotEmpty()
    roomId: string;
}