"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
const votes_entity_1 = require("../models/votes.entity");
class VotesRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(votes_entity_1.Votes);
    }
}
exports.VotesRepository = VotesRepository;
//# sourceMappingURL=VotesRepository.js.map