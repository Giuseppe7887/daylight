<script setup lang="ts">
//@ts-ignore
import { useStore } from 'vuex';
import { computed, onMounted, ref, type ComputedRef } from 'vue';
import Input from '../components/Input.vue';
import FormField from '../components/FormField.vue';
import type { AppState } from '../types';
import { useRouter } from 'vue-router';
//@ts-ignore
import { DateTime } from 'luxon';
import Spinner from '../components/Spinner.vue';

const store = useStore();
const router = useRouter();
const searchingLocation = ref(false);

const state: ComputedRef<AppState> = computed(() => store.state);


function changeCallback(action: string, event: Event) {
    store.commit(action, (event.target as HTMLInputElement).value.toString());
}

function getPosition() {
    searchingLocation.value = true
    navigator.geolocation.getCurrentPosition((position) => {
        store.commit('setLatitude', position.coords.latitude);
        store.commit('setLongitude', position.coords.longitude);
        searchingLocation.value = false
    });
}

const okForm = computed(() => {
    return state.value.currentDay && state.value.location?.latitude && state.value.location?.longitude;
});

function confirm() {
    if(searchingLocation.value) return searchingLocation.value =  !window.confirm("Ricerca della posizione in corso, vuoi annullarla?")
 
    if (okForm.value) {
        store.commit("resetdDaylightData")
        router.push('/');
    } else {
        alert("All fields are required")
    }
}

onMounted(() => {
    store.commit("resetdDaylightData")
})

</script>

<template>
    <div class="w-10/12 md:w-3/6  flex items-center justify-center flex-col ">

        <FormField label="Date">
            <Input placeholder="Date" :value="state.currentDay!" type="date"
                :action="(event) => changeCallback('setCurrentDay', event)" />
        </FormField>

        <span class="text-gray-400">or</span>
        <p @click="store.commit('setCurrentDay', DateTime.now().toISODate())"
            class="text-blue-400 hover:text-blue-200 hover:cursor-pointer">Get today's date</p>
        <br>
        <br>


        <FormField label="Location">
            <Input :disabled="searchingLocation" placeholder="latitude" :value="state.location?.latitude!" type="number"
                :action="(event) => changeCallback('setLatitude', event)" />

            <br />
            <Input :disabled="searchingLocation"  placeholder="longitude" :value="state.location?.longitude!" type="number"
                :action="(event) => changeCallback('setLongitude', event)" />

        </FormField>
        <span class="text-gray-400">or</span>

        <div class="flex items-center justify-center">
            <p @click="getPosition" class="mr-2 text-blue-400 hover:text-blue-200 hover:cursor-pointer">
                {{ searchingLocation ? "getting position..." : "Get the position" }}
            </p>
            <Spinner v-if="searchingLocation" size="15" />
        </div>



        <br>
        <br>
        <br>

        <button :class="`p-3 rounded-md bg-red-300 hover:cursor-${okForm ? 'pointer' : 'not-allowed'}`"
            @click="confirm">START</button>

    </div>



</template>