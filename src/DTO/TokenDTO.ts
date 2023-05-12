import { IsNotEmpty, MinLength } from "class-validator";

export class TokenDTO {
  
    refreshToken: string;

    info: string;

    ip: string;

    mac: string;

    idUser: number;
}