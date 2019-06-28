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
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.startConnection = () => __awaiter(this, void 0, void 0, function* () {
            mongoose_1.default.connect('mongodb://localhost:27017/enai', {
                useNewUrlParser: true
            });
            let dbStatus = mongoose_1.default.connection;
            dbStatus.once('open', function () {
                console.log('链接成功');
            });
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map