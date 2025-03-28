<script setup lang="ts">
import type { DaylightData } from '../types';
import {  splitTimeFromMniutes, toLocalDate, toLocalTime } from '../utils';

const props = defineProps<{index:number,data:DaylightData}>();

let { sunrise, sunset,dayLightMinutes,day }:DaylightData = props.data;

const splittedTime = splitTimeFromMniutes(dayLightMinutes);

</script>

<template>
    <div class="mb-2 w-full h-50 shadow-md grid grid-cols-2 gird-rows-3 rounded-md">
        <div class="flex flex-col items-center justify-center col-span-2">
            <p class="font-bold text-lg">{{index == 0 ? "Today" : toLocalDate(day) }} </p>        
            <p class="font-medium">{{ splittedTime.hours }} hours and {{ splittedTime.minutes }} minutes of daylight</p>        
        </div>       

        <div class="sm:w-full flex flex-col items-center justify-center">
            <img  class="size-5 color-yellow-400" src="../assets/sunrise.svg" alt="sunrise">
            <p>sunrise</p>
            <p class="font-bold">{{ toLocalTime(sunrise) }}</p>
        </div>

        <div class="flex flex-col items-center justify-center">
            <img class="size-5" src="../assets/sunset.svg" alt="sunset">
            <p>sunset</p>
            <p class="font-bold">{{ toLocalTime(sunset) }}</p>
        </div>
    </div>
</template>