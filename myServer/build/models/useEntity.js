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
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let User = class User extends typegoose_1.Typegoose {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", mongodb_1.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    typegoose_1.prop({ required: true }) // 标识mongosse
    ,
    type_graphql_1.Field({ nullable: true }) //标识graphql
    ,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "sex", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], User.prototype, "telephone", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], User.prototype, "Intimacy", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "userAccount", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "userPassword", void 0);
User = __decorate([
    type_graphql_1.ObjectType()
], User);
exports.default = new User().getModelForClass(User); //将该对象导出为mongoose可使用的scheme
//# sourceMappingURL=useEntity.js.map