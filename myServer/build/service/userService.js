"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useEntity_1 = __importDefault(require("../server/models/useEntity"));
class UserService {
    constructor() {
        this.model = useEntity_1.default;
    }
    //Partial<User>是一个{}对象
    find(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find(selector);
        });
    }
    findOneById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ _id });
        });
    }
    remove(_id, String) {
        return __awaiter(this, void 0, void 0, function* () {
            let entityToRemove = yield this.model.findOne(_id);
            yield this.model.remove(entityToRemove);
        });
    }
    count(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.count(entity);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map