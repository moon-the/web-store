import { IsNotEmpty, MinLength } from "class-validator";
import { DTOChat } from "./chatDTO";
import { Participant } from "./Participant";


export class Room {
    createdBy: string;
    createdDate: Date;
    message: Array<DTOChat>;
    participants: Map<string, Participant>;
    constructor(createdBy: string) {
        this.createdBy = createdBy;
        this.createdDate = new Date();
        this.message = new Array<DTOChat>();
        this.participants = new Map();
    }
}