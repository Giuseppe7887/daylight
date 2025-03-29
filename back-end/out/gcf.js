"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const functions_framework_1 = __importDefault(require("@google-cloud/functions-framework"));
functions_framework_1.default.http('daylight', server_1.default);
