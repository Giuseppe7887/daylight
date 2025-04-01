"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daylight = void 0;
// servers
const server_1 = __importDefault(require("./server"));
// functions
const daylight = (req, res) => (0, server_1.default)(req, res);
exports.daylight = daylight;
