"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const Messages_entity_1 = require("../models/Messages.entity");
const BaseRepository_1 = require("./BaseRepository");
class MessageRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Messages_entity_1.Messages);
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=MessageRepository.js.map