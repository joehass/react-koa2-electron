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
const koa_1 = __importDefault(require("koa"));
const database_1 = __importDefault(require("./mongoose/database"));
const app = new koa_1.default();
const database = new database_1.default();
database.startConnection();
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = 'PORT11';
    next();
}));
// app.use(async (ctx, next) => {
//     console.log('开始查询数据库')
//     let value = {
//         userName: 'tom',
//         sex: '0',
//         telephone: 18870221780,
//         Intimacy: 55530,
//         userAccount: '1031377677',
//         userPassword: 'aaa'
//     }
//     let user = new User(value)
//     DatabaseHelper.save(user)
//     let where = {
//         userName: 'tom',
//     }
//     let value2;
//     value2 = await DatabaseHelper.find(User, where)
//     console.log("输出是："+ value2)
// })
app.listen(2222);
console.log('🚀 app started at port 2222');
//# sourceMappingURL=app.js.map