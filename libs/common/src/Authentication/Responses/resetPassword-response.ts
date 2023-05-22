import {ApiProperty} from "@nestjs/swagger";
import { IResponse } from "@app/common/Authentication/Responses/IResponse";

export class ResetPasswordResponse implements IResponse {
    @ApiProperty({example: 200})
    status: number;

    @ApiProperty({example: 'success'})
    message: string;

    @ApiProperty({
        example: {
            email: "xxx.@gmail.com"
        },
        nullable: true
    })
    data: {
       email: string
    };

    @ApiProperty({example: null, nullable: true})
    errors: {
        [key: string]: any
    };

}