import { IUser } from "./IUser.interface";
import { IAuthenticationResponse } from "./authentication-response";
import {ApiProperty} from "@nestjs/swagger";

export class ActivatedReponse implements IAuthenticationResponse {
    @ApiProperty({example: 201})
    status: number;

    @ApiProperty({example: 'user login success'})
    message: string;

    @ApiProperty({
        example: {
            user: {
                email: '',
                id: ''
            }
        },
        nullable: true
    })
    data: {
        user: IUser,
        token: object
    };

    @ApiProperty({example: null, nullable: true})
    errors: {
        [key: string]: any
    };

}