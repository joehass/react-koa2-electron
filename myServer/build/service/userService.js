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
const useEntity_1 = __importDefault(require("../models/useEntity"));
const R_1 = __importDefault(require("../models/R"));
const databaseHelper_1 = __importDefault(require("./../util/databaseHelper"));
class UserService {
    constructor() {
        //TODO:注册相关逻辑
        this.register = (user) => __awaiter(this, void 0, void 0, function* () {
            let Intimacy = this.generatorIntimacy();
            user.intimacy = Intimacy;
            const u = new useEntity_1.default(user);
            let r = new R_1.default();
            yield databaseHelper_1.default.save(u, function (msg) {
                if (msg == 0) { //插入成功
                    return r.data(user);
                }
                else {
                    return r.error(msg);
                }
            });
        });
    }
    //TODO:生成亲密号,一串8位随机数
    generatorIntimacy() {
        let ran = '';
        for (let i = 0; i < 9; i++) {
            ran += Math.floor(Math.random() * 10) + '';
        }
        return ran;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map