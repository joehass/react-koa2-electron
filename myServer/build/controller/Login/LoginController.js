"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../../service/userService");
class LoginController {
    constructor() {
        // @bindContext(User)
        this.register = (ctx) => __awaiter(this, void 0, void 0, function* () {
            let data = ctx.request.body;
            let res;
            res = yield this.userService.register(data);
            ctx.body = res;
        });
        this.userService = new userService_1.UserService();
    }
}
exports.default = new LoginController();
//# sourceMappingURL=LoginController.js.map