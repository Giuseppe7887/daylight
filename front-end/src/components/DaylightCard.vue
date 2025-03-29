<script setup lang="ts">
import type { DaylightData } from '../types';
import { splitTimeFromMniutes, toLocalDate, toLocalTime } from '../utils';

const props = defineProps<{ index: number, data: DaylightData }>();

let { sunrise, sunset, dayLightMinutes, day }: DaylightData = props.data;

const splittedTime = splitTimeFromMniutes(dayLightMinutes);

const isCurrentYear = day.split("-")[0] == new Date().getFullYear().toString();

</script>

<template>
    <div class="mb-2 w-full h-50 shadow-md grid grid-cols-2 gird-rows-3 rounded-md">
        <div class="flex flex-col items-start justify-center col-span-2">
            <p class="font-bold text-lg ml-3">{{ (isCurrentYear && index == 0) ? "Today" : toLocalDate(day) }} </p>
            <p class="ml-3 font-medium text-gray-400"><span class="text-gray-600 font-bold">{{ splittedTime.hours }}</span>
                hours and <span class="text-gray-600 font-bold">{{ splittedTime.minutes }}</span> minutes of daylight
            </p>
        </div>

        <div class="sm:w-full flex flex-col items-start justify-center pl-4">
            <p>sunrise</p>

            <div class="flex">

                <img class="size-5 mr-2" src="../assets/sunrise.svg" alt="sunrise">
                <p class="font-bold">{{ toLocalTime(sunrise) }}</p>
            </div>

        </div>

        <div class="flex flex-col items-start justify-center pl-4">
            <p>sunset</p>
            <div class="flex">
                <img class="size-5 mr-2" src="../assets/sunset.svg" alt="sunset">
                <p class="font-bold">{{ toLocalTime(sunset) }}</p>
            </div>
        </div>
    </div>
</template>