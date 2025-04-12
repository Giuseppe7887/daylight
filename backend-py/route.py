from fastapi import APIRouter, Query
from typing import Optional, List, Dict, Any
from utils import get_dates, get_api_data, get_daylight_duration

router = APIRouter(
    tags=["Daylight"]
)

@router.get("/{date}")
def daylight_api(
    date: str,
    latitude: Optional[float] = Query(None),
    longitude: Optional[float] = Query(None)
):
    try:
        location = {
            "latitude": latitude,
            "longitude": longitude
        }

        dates: List[str] = get_dates(date)
        api_response: List[Dict[str, Any]] = get_api_data(location, dates)
        data: List[Dict[str, Any]] = get_daylight_duration(api_response)

        return {
            "status": "success",
            "data": data
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
