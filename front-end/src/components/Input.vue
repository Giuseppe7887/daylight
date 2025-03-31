<script setup lang="ts">


export interface InputProps {
    value: string;
    type: "number" | "date";
    placeholder: string,
    disabled?: boolean;
    action: (event: Event) => void;
}

defineProps<InputProps>();

</script>

<template>
    <div class="md:w-2/3 md:ml-2">
        <input @keydown="(e) => {
            if (type === 'date') e.preventDefault()
        }" :disabled :placeholder="placeholder" @input="action"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" :type="type" :value="value">
    </div>

</template>