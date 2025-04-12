import requests
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
from typing import List, Dict, Any
from constants import API_SERVER


def get_dates(date_ref: str) -> List[str]:
    date = datetime.fromisoformat(date_ref)
    month = date.month
    day = date.day
    results = []

    while month <= 12:
        try:
            new_date = date.replace(month=month, day=day)
            results.append(new_date.date().isoformat())
        except ValueError:
            pass  # Skip invalid dates like Feb 30
        month += 1

    return results


def get_api_data(location: Dict[str, float], dates: List[str]) -> List[Dict[str, Any]]:
    responses = []
    for date in dates:
        params = {
            "lat": location.get("latitude"),
            "lng": location.get("longitude"),
            "date": date,
        }
        response = requests.get(API_SERVER, params=params)
        data = response.json()
        data["day"] = date
        responses.append(data)
    return responses


def get_daylight_duration(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    result = []
    for entry in data:
        sunrise_str = entry["results"]["sunrise"]
        sunset_str = entry["results"]["sunset"]

        sunrise = datetime.strptime(sunrise_str, "%I:%M:%S %p")
        sunset = datetime.strptime(sunset_str, "%I:%M:%S %p")

        daylight_minutes = round((sunset - sunrise).total_seconds() / 60)

        result.append({
            "sunrise": sunrise.strftime("%I:%M:%S %p"),
            "sunset": sunset.strftime("%I:%M:%S %p"),
            "dayLightMinutes": daylight_minutes,
            "day": entry["day"],
        })

    return result
