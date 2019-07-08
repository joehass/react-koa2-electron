"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const useEntity_1 = require("../../models/useEntity");
const userService_1 = require("../userService");
class CreateUserInput {
}
__decorate([
    type_graphql_1.Field(type => String) //标识graphql
    ,
    __metadata("design:type", String)
], CreateUserInput.prototype, "userAccount", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "userPassword", void 0);
let UserServiceImpl = class UserServiceImpl {
    constructor() {
        this.service = new userService_1.UserService;
    }
    me(userid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.findOneById(userid);
        });
    }
    //对应post请求
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.createUser(user);
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => useEntity_1.User),
    __param(0, type_graphql_1.Arg('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserServiceImpl.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(returns => CreateUserInput),
    __param(0, type_graphql_1.Arg('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [useEntity_1.User]),
    __metadata("design:returntype", Promise)
], UserServiceImpl.prototype, "createUser", null);
UserServiceImpl = __decorate([
    type_graphql_1.Resolver(useEntity_1.User),
    __metadata("design:paramtypes", [])
], UserServiceImpl);
exports.default = UserServiceImpl;
//# sourceMappingURL=userServiceImpl.js.map