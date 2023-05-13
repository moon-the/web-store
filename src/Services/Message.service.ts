import { Injectable } from "@nestjs/common";
import { Messages } from "src/models/Messages.entity";
import { MessageRepository } from "src/Repositories/MessageRepository";

@Injectable()
export class MessageService {
    private messageRepository: MessageRepository;
    constructor() {
        this.messageRepository = new MessageRepository();
    }

    public async creatMessage(message: Messages): Promise<Messages> {
        return this.messageRepository.save(message)
    }

    public async getMessage(id: number): Promise<Messages[]>{
        return this.messageRepository.getAll();
    }
}