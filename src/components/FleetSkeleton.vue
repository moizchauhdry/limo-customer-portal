<template>
    <!-- Fleet Cards Skeleton -->
    <div class="flex gap-4 overflow-x-hidden no-scrollbar">
        <div v-for="i in 3" :key="i"
            class="border border-[#E0E0E0] rounded-xl p-2 shadow flex flex-col min-w-[250px] animate-pulse">
            <!-- Title -->
            <div class="h-4 w-32 bg-gray-300 rounded mb-2"></div>

            <!-- Subtitle -->
            <div class="h-3 w-44 bg-gray-200 rounded mb-3"></div>

            <!-- Image -->
            <div class="w-full h-24 bg-gray-200 rounded mb-3"></div>

            <!-- Footer icons -->
            <div class="flex items-center gap-4 mt-auto">
                <div class="flex items-center gap-2">
                    <div class="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div class="h-3 w-6 bg-gray-300 rounded"></div>
                </div>

                <div class="flex items-center gap-2">
                    <div class="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <div class="h-3 w-6 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    </div>

</template>