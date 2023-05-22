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

<<<<<<< Updated upstream:src/DTO/UserRegisterDTO.ts
<<<<<<< HEAD
    salt: string;
=======
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826

=======
    link: string;
>>>>>>> Stashed changes:libs/common/src/authentication/UserRegisterDTO.ts
}