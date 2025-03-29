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
exports.getDates = getDates;
exports.getApiData = getApiData;
exports.getDayLightDuration = getDayLightDuration;
//@ts-ignore
const luxon_1 = require("luxon");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
function getDates(dateRef) {
    let date = luxon_1.DateTime.fromISO(dateRef);
    let { month, day } = date;
    let res = [];
    while (month <= 12) {
        const newDate = date.set({ month, day });
        if (newDate.day == day) {
            res.push(newDate);
        }
        month++;
    }
    return res
        .filter((x) => x.isValid)
        .map((x) => x.toISODate());
}
function getApiData(location, dates) {
    return __awaiter(this, void 0, void 0, function* () {
        const responses = [];
        for (const date of dates) {
            const response = yield axios_1.default.get(constants_1.API_SERVER, {
                params: {
                    lat: location.latitude,
                    lng: location.longitude,
                    date: date,
                },
            });
            response.data.day = date;
            responses.push(response.data);
        }
        return responses;
    });
}
function getDayLightDuration(data) {
    const adesso = luxon_1.DateTime.now();
    const format = "h:m:s a";
    return data.map((x) => {
        const sunrise = luxon_1.DateTime.fromFormat(x.results.sunrise, format);
        const sunset = luxon_1.DateTime.fromFormat(x.results.sunset, format);
        return {
            sunrise: sunrise.toFormat(format),
            sunset: sunset.toFormat(format),
            dayLightMinutes: Math.round(sunset.diff(sunrise, "minutes").values.minutes),
            day: x.day,
        };
    });
}
