<script setup>
import { defineProps } from 'vue';

defineProps({
    count: {
        type: Number,
        default: 3,
    },
});
</script>

<template>
    <!-- ================= DESKTOP TABLE SKELETON ================= -->
    <div class="hidden sm:block bg-white rounded-xl shadow-lg border border-[#DBDBDB]"  data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
        <h3 class="text-lg ml-2 pt-2 font-regular text-[#626262] mb-2">

        </h3>

        <div class="overflow-x-auto w-full animate-pulse">
            <table class="w-full text-sm text-left">
                <thead class="border-b border-t border-[#E0E0E0]">
                    <tr>
                        <th class="px-4 py-3 font-normal"></th>
                        <th class="px-4 py-3 font-normal"></th>
                        <th class="px-4 py-3 font-normal"></th>
                        <th class="px-4 py-3 font-normal"></th>
                        <th class="px-4 py-3 font-normal"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="i in count" :key="i" class="border-b">
                        <td class="px-4 py-4">
                            <div class="h-4 w-24 bg-gray-200 rounded"></div>
                        </td>
                        <td class="px-4 py-4">
                            <div class="h-4 w-20 bg-gray-200 rounded"></div>
                        </td>
                        <td class="px-4 py-4">
                            <div class="h-4 w-48 bg-gray-200 rounded"></div>
                        </td>
                        <td class="px-4 py-4">
                            <div class="h-4 w-16 bg-gray-200 rounded"></div>
                        </td>
                        <td class="px-4 py-4">
                            <div class="h-6 w-20 bg-gray-200 rounded-lg"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- ================= MOBILE CARD SKELETON ================= -->
    <div class="block sm:hidden space-y-4 px-4 mt-4"  data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
        <div v-for="i in count" :key="`mobile-${i}`"
            class="bg-white border border-[#DBDBDB] rounded-xl shadow p-4 animate-pulse">
            <!-- Header -->
            <div class="flex justify-between items-center mb-3">
                <div class="h-4 w-32 bg-gray-200 rounded"></div>
                <div class="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>

            <!-- Body -->
            <div class="space-y-2">
                <div class="h-3 w-32 bg-gray-200 rounded"></div>
                <div class="h-3 w-48 bg-gray-200 rounded"></div>
                <div class="h-3 w-24 bg-gray-200 rounded"></div>
            </div>
        </div>
    </div>
</template>
