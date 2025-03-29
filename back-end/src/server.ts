import express from "express";
import type { Express, Request, Response } from "express";
import { getApiData, getDates, getDayLightDuration } from "./utils";
import { ApiResponse, DaylightData, LatLng } from "./types";
import { config } from "dotenv";
//@ts-ignore
import cors from "cors";

config();

const app: Express = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Daylight API"
  })
});



app.get("/api/:date", async (req: Request, res: Response) => {
  try {
    const locaion: Partial<LatLng> = req.query;
    const { date } = req.params;

    const dates: string[] = getDates(date);

    const apiResponse: ApiResponse[] = await getApiData(locaion, dates);
    const data: DaylightData[] = getDayLightDuration(apiResponse);

    res.status(200).json({ status: "success", data });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
});

export default app;
