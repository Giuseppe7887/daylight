// @ts-ignore
import { createStore } from "vuex";
import type { AppState, LatLng, Option, DaylightData } from "./types";
// @ts-ignore
import {DateTime} from 'luxon';
import axios from "axios";
import { API_URL } from "./constants";

const store = {
  state(): AppState {
    return {
      location: {longitude:"", latitude:""},
      currentDay: null,
      daylightData: [],
    };
  },
  getters: {
    location(state: AppState): Option<LatLng> {
      return state.location;
    },
    currentDay(state: AppState): Option<string> {
      return state.currentDay;
    },
    daylightData(state: AppState): DaylightData[] {
      return state.daylightData;
    },

    // funzioni di filtraggio
    appState(state: AppState): AppState {
      return state;
    },
  },

  mutations: {
    setCurrentDay(state: AppState, day: DateTime): void {
      state.currentDay = day;
    },
    setLatitude(state: AppState, latitude: string): void {
      if (!state.location) return;
      state.location.latitude = latitude;
    },
    setLongitude(state: AppState, longitude: string): void {
      if (!state.location) return;
      state.location.longitude = longitude;
    },
    setdDaylightData(state: AppState, data: DaylightData[]): void {
      state.daylightData = data;
    } ,
    resetdDaylightData(state: AppState): void {
      state.daylightData = [];
    } 
  },

  actions: {
    async fetchDaylightData({ state,commit }:{state:AppState, commit:Function}): Promise<void> {
      const { latitude, longitude } = state.location!;
      const date = state.currentDay;
      axios.get(`${API_URL}/${date}?latitude=${latitude}&longitude=${longitude}`).then(res=>{
        commit("setdDaylightData", res.data.data);
      }).catch(err=>{
        console.log(err)
      });
    }
  }
};

export default createStore(store);
