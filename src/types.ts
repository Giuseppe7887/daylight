export interface LatLng {
  longitude: string;
  latitude: string;
}

export interface ApiResponse {
  day: string;
  results: {
    sunrise: string; // Formato orario: "7:27:02 AM"
    sunset: string; // Formato orario: "5:05:55 PM"
    solar_noon: string; // Formato orario: "12:16:28 PM"
    day_length: string; // Durata del giorno in formato "9:38:53"
    civil_twilight_begin: string; // Inizio crepuscolo civile
    civil_twilight_end: string; // Fine crepuscolo civile
    nautical_twilight_begin: string; // Inizio crepuscolo nautico
    nautical_twilight_end: string; // Fine crepuscolo nautico
    astronomical_twilight_begin: string; // Inizio crepuscolo astronomico
    astronomical_twilight_end: string; // Fine crepuscolo astronomico
  };
  status: string; // Status della risposta, es. "OK"
  tzid: string; // Identificativo del fuso orario, es. "UTC"
}

export interface DaylightData {
  sunrise: string;
  sunset: string;
  dayLightMinutes: number;
  day: string;
}
