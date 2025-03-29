<script setup lang="ts">
//@ts-ignore
import { computed, onMounted, type ComputedRef } from 'vue';
//@ts-ignore
import { useStore } from 'vuex';
import type { AppState } from '../types';
import DaylightCard from '../components/DaylightCard.vue';
import Spinner from '../components/Spinner.vue';

const store = useStore();

const state: ComputedRef<AppState> = computed(() => store.state);


onMounted(async () => {
    await store.dispatch('fetchDaylightData');
});
</script>


<template>
    <div v-if="state.daylightData.length"
        class="w-11/12  md:grid md:grid-cols-2 md:gap-1 lg:gap.2 lg:grid-cols-3 flex flex-col items-center justify-center">

        <template v-for="(data, index) in state.daylightData">
            <DaylightCard :data :index />
        </template>
    </div>
    <div v-else class="overflow-hidden w-full flex items-center justify-center" role="status">
        <Spinner  size="50px"/>
    </div>


</template>