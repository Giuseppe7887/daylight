<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const deferredPrompt = ref<any>(null);
const showInstallButton = ref(false);

onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt.value = e;
        showInstallButton.value = true;
    });
});

const installPwa = async () => {
    if (!deferredPrompt.value) {
        return;
    }

    deferredPrompt.value.prompt();

    try {
        const choiceResult = await deferredPrompt.value.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // Reset the deferred prompt variable
        deferredPrompt.value = null;
        showInstallButton.value = false;
    } catch (error) {
        console.error('Error during the install prompt:', error);
    }
};
</script>


<template>

    <button v-if="showInstallButton && route.path == '/form'" @click="installPwa"
        class="mr-4 px-3 py-2 bg-blue-500 text-white rounded-md flex items-center shadow-md hover:bg-blue-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Install App
    </button>
</template>