"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var package_two_1 = __importDefault(require("@jkrishna95/package_two"));
var packageOne = function () {
    console.log('This is from imported package');
};
package_two_1.default();
exports.default = packageOne;
//# sourceMappingURL=index.js.map