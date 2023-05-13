"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(createdBy) {
        this.createdBy = createdBy;
        this.createdDate = new Date();
        this.message = new Array();
        this.participants = new Map();
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map