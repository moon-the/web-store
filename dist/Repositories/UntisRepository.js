"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntisRepository = void 0;
const Untis_entity_1 = require("../models/Untis.entity");
const BaseRepository_1 = require("./BaseRepository");
class UntisRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Untis_entity_1.Untis);
    }
}
exports.UntisRepository = UntisRepository;
//# sourceMappingURL=UntisRepository.js.map