<script setup>
import { defineProps } from 'vue';

defineProps({
    count: {
      type:Number,
      default:3,
    },
});
</script>
<!-- ================= SKELETON LOADER ================= -->
<template>
    <div class="space-y-6 mt-6" >
        <div v-for="i in count" :key="i" class="bg-white border border-[#DBDBDB] rounded-xl shadow p-4 animate-pulse">
            <!-- Header -->
            <div class="flex justify-between mb-4">
                <div class="h-5 w-32 bg-gray-200 rounded"></div>
                <div class="h-8 w-24 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Ride ID + Fare -->
            <div class="flex justify-between mb-4">
                <div class="h-4 w-40 bg-gray-200 rounded"></div>
                <div class="h-4 w-24 bg-gray-200 rounded"></div>
            </div>

            <!-- Route -->
            <div class="space-y-2 mb-4">
                <div class="h-3 w-full bg-gray-200 rounded"></div>
                <div class="h-3 w-3/4 bg-gray-200 rounded"></div>
            </div>

            <!-- Stats -->
            <div class="flex justify-between">
                <div class="h-4 w-32 bg-gray-200 rounded"></div>
                <div class="h-4 w-32 bg-gray-200 rounded"></div>
            </div>

            <!-- Driver -->
            <div class="flex items-center gap-4 mt-6">
                <div class="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div class="flex-1 space-y-2">
                    <div class="h-4 w-40 bg-gray-200 rounded"></div>
                    <div class="h-3 w-32 bg-gray-200 rounded"></div>
                </div>
                <div class="h-8 w-24 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    </div>
</template>