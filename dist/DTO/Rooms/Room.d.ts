import { DTOChat } from "./chatDTO";
import { Participant } from "./Participant";
export declare class Room {
    createdBy: string;
    createdDate: Date;
    message: Array<DTOChat>;
    participants: Map<string, Participant>;
    constructor(createdBy: string);
}
