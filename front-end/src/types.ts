//@ts-ignore
import  {DateTime} from 'luxon';

export interface LatLng{
    longitude:string;
    latitude:string;
}

export type Option<T> = T | null;

export interface AppState{
    location:Option<LatLng>;
    currentDay:Option<string>;
    daylightData:DaylightData[]        
}

export interface DaylightData {
    sunrise: string;
    sunset: string;
    dayLightMinutes: number;
    day: string;
  }
  