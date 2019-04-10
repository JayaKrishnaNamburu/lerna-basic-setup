"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var one = __importStar(require("package_one"));
var two = __importStar(require("package_two"));
console.log('This is server.js file');
// @ts-ignore
one();
// @ts-ignore
two();
