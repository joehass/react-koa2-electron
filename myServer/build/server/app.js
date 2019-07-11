"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const database_1 = __importDefault(require("./mongoose/database"));
const index_1 = require("./router/index");
const router = require('koa-router')();
const koa2_cors_1 = __importDefault(require("koa2-cors"));
var bodyParser = require('koa-bodyparser');
const app = new koa_1.default();
const database = new database_1.default();
database.startConnection();
//设置跨域
app.use(koa2_cors_1.default({
    origin: function (ctx) {
        return '*'; //允许所有域名访问
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(bodyParser()); //解析post请求传过来的参数
//启动路由
app.use(index_1.UserRouter.routes())
    .use(index_1.UserRouter.allowedMethods());
app.listen(2222);
console.log('🚀 app started at port 2222');
//# sourceMappingURL=app.js.map