import { IUser } from "../IUser.interface";
import {ApiProperty} from "@nestjs/swagger";
import { IResponse } from "@app/common/Authentication/Responses/IResponse";

export class LoginResponse implements IResponse {
    @ApiProperty({example: 200})
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