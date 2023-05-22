import { IUser } from "../IUser.interface";
import { IResponse } from "./IResponse";
import {ApiProperty} from "@nestjs/swagger";

export class VerifyOTPResponse implements IResponse {
    @ApiProperty({example: 201})
    status: number;

    @ApiProperty({example: 'success'})
    message: string;

    @ApiProperty({
        example: {
            image: "",
            urlOTP: ""
        },
        nullable: true
    })
    data: {
        accessToken: string,
        refreshToken: string
    };

    @ApiProperty({example: null, nullable: true})
    errors: {
        [key: string]: any
    };

}