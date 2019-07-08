"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const LoginController_1 = __importDefault(require("../controller/Login/LoginController"));
const router = new koa_router_1.default();
router.get('/login', (ctx) => {
    debugger;
    console.log("ctx" + ctx);
    const books = [
        {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
        },
        {
            title: 'Jurassic Park',
            author: 'Michael Crichton',
        },
    ];
    ctx.body = books;
});
router.post('/register', LoginController_1.default.register);
exports.default = router;
//# sourceMappingURL=userRouter.js.map