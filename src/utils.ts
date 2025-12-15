//@ts-ignore
import { DateTime } from "luxon";
import { ApiResponse, DaylightData, LatLng } from "./types";
import axios from "axios";
import { API_SERVER } from "./constants";

export function getDates(dateRef: string): string[] {
  let date = DateTime.fromISO(dateRef);
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
    .filter((x: DateTime) => x.isValid)
    .map((x: DateTime) => x.toISODate());
}

export async function getApiData(location: Partial<LatLng>, dates: string[]) {
  const responses: ApiResponse[] = [];
  for (const date of dates) {
    const response = await axios.get(API_SERVER, {
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
}

export function getDayLightDuration(data: ApiResponse[]): DaylightData[] {
  const adesso = DateTime.now();

  const format = "h:m:s a";
  return data.map((x: ApiResponse) => {
    const sunrise = DateTime.fromFormat(x.results.sunrise, format);
    const sunset = DateTime.fromFormat(x.results.sunset, format);
    return {
      sunrise: sunrise.toFormat(format),
      sunset: sunset.toFormat(format),
      dayLightMinutes: Math.round(
        sunset.diff(sunrise, "minutes").values.minutes
      ),
      day: x.day,
    };
  });
}
