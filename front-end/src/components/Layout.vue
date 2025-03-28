<script setup lang="ts">
import Header from '../components/Header.vue';

</script>

<template>
    <div class="p-0 m-0 w-screen min-h-screen">
        <header>
            <Header></Header>
        </header>
        <main class="w-full min-h-screen flex items-center justify-center  h-auto">
            <slot></slot>
        </main>
    </div>
</template>