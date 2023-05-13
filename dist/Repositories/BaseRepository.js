"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async findById(id) {
        return this.model.findByPk(id);
    }
    async getAll() {
        return this.model.findAll();
    }
    async deleteById(id) {
        const model = await this.model.findByPk(id);
        return model.destroy();
    }
    save(type) {
        return type.save();
    }
    update(model) {
        return model.save();
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map