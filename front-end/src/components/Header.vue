<script setup lang="ts">
//@ts-ignore
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
//@ts-ignore
import PWAButton from './PWAButton.vue';

const route = computed(() => useRoute())
const { state } = useStore();
const position = computed(() => {
  return `lat. ${state.location.latitude}, lng.${state.location.longitude}`
});



</script>

<template>
  <div class="min-h-20 w-full flex items-center justify-between">
    <div class="flex flex-col items-start justify-center">
      <h1 class="ml-3 text-2xl font-bold mr-5 md:text-3xl">DAYLIGHT</h1>
      <div v-if="route.path != '/form'" class="ml-3">
        <img class="inline translate-y-[-3px]" alt="marker" src="../assets/marker.svg" />
        <span class="inline ml-2">
          {{ position }}
        </span>
      </div>
    </div>
   
    <PWAButton/>
  </div>
</template>