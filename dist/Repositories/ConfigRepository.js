"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
const Configs_entity_1 = require("../models/Configs.entity");
class ConfigRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(Configs_entity_1.Configs);
    }
}
exports.ConfigRepository = ConfigRepository;
//# sourceMappingURL=ConfigRepository.js.map