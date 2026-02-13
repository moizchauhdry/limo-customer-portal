<template>
    <div class="space-y-5 pt-4">
        <!-- Heading -->
        <div class="h-6 w-40 rounded bg-gray-200 animate-pulse"></div>

        <!-- Inputs -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="i in 3" :key="i" class="flex flex-col gap-2">
                <!-- Label -->
                <div class="h-4 w-16 rounded bg-gray-200 animate-pulse"></div>

                <!-- Input -->
                <div class="h-10 rounded-md bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
// visual-only skeleton
</script>
