//@ts-ignore
import {DateTime} from "luxon"

export const formattedDateFromMinutes = (minutes: number): string => `${Math.floor(minutes / 60)}:${minutes % 60}`



export const splitTimeFromMniutes = (minutes:number) => {
    const splitted = formattedDateFromMinutes(minutes).split(":")
    return {
        hours:splitted[0],
        minutes:splitted[1]
    }
};


export function toLocalTime(timeStr: string): string {
    const time =  DateTime.fromFormat(timeStr, "h:m:s a");
    return time.toFormat("HH:mm:ss");
}


export function toLocalDate(dateStr: string): string {
    const date =  DateTime.fromFormat(dateStr, "yyyy-MM-dd");
    return date.toFormat("dd MMMM yyyy");
}


