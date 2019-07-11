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
const const_1 = require("../config/const");
class DatabaseHelper {
    constructor() {
        this.find = (model, value) => __awaiter(this, void 0, void 0, function* () {
            const value1 = yield model.find(value);
            return value1;
        });
        /**
         * TODO:保存进入数据库
         *
         * @memberof DatabaseHelper
         */
        this.save = (model, callback) => {
            model.save(function (err) {
                if (err) {
                    console.log('保存失败: ' + err);
                    callback(err);
                }
                else {
                    console.log('保存成功');
                    callback(const_1.SUCCESS__MSG);
                }
            });
        };
    }
}
const databaseHelper = new DatabaseHelper();
exports.default = databaseHelper;
//# sourceMappingURL=databaseHelper.js.map