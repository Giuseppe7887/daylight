"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const dotenv_1 = require("dotenv");
//@ts-ignore
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to the Daylight API"
    });
});
app.get("/api/:date", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locaion = req.query;
        const { date } = req.params;
        const dates = (0, utils_1.getDates)(date);
        const apiResponse = yield (0, utils_1.getApiData)(locaion, dates);
        const data = (0, utils_1.getDayLightDuration)(apiResponse);
        res.status(200).json({ status: "success", data });
    }
    catch (err) {
        res.json({ status: "error", message: err });
    }
}));
exports.default = app;
