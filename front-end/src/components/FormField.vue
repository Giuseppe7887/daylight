<script setup lang="ts">
//@ts-ignore
import type { InputProps } from './Input.vue';



export interface FormFieldProps {
    label: string
}

const { label } = defineProps<FormFieldProps>();
</script>

<template>
    <div class="w-full md:flex md:items-center mb-2">
        <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                {{ label }}
            </label>
        </div>
        <div class="md:w-2/3">
            <slot></slot>
        </div>
    </div>

</template>