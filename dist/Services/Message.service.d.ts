import { Messages } from "src/models/Messages.entity";
export declare class MessageService {
    private messageRepository;
    constructor();
    creatMessage(message: Messages): Promise<Messages>;
    getMessage(id: number): Promise<Messages[]>;
}
