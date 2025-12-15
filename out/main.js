"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const server_1 = __importDefault(require("./server"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT || constants_1.FALLBACK_PORT;
server_1.default.listen(PORT, (err) => {
    if (err)
        return console.error(err);
    console.log(`Server is running on http://localhost:${PORT}`);
});
