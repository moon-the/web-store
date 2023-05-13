import { IsNotEmpty } from "class-validator";

export class RoomDto {
    @IsNotEmpty()
    roomId: string;
    @IsNotEmpty()
    creatorUsername: string;
}