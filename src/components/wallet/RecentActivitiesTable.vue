<script setup>
import { defineProps, onMounted, ref } from "vue";
import axios from "@/axios";
import { formatDate } from "@/utils";

const RecentData = ref([]); // array instead of 0

const fetchRecentActivities = async () => {
    try {
        const { data } = await axios.get('/customer/wallet/recent-activities');
        RecentData.value = data.data.data; // note the nested structure: data.data.data
    } catch (err) {
        console.log("Failed to load Recent Data:", err);
    }
};

onMounted(() => {
    fetchRecentActivities();
});

defineProps({
    isMobile: {
        type: Boolean,
        default: false,
    },
});

</script>

<template>
    <div class="rounded-xl shadow-lg border border-[#B7B7B7] mt-3 p-5">
        <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
            Recent Activities
        </p>

        <!-- Filter Section -->
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-4">
            <div class="relative col-span-1 sm:col-span-2">
                <input type="text" placeholder="Search"
                    class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]" />
                <img src="../../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4"
                    alt="Search Icon" />
            </div>

            <button class="w-full bg-[#0072EF] text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Transaction Type
            </button>

            <button
                class="w-full border border-[#BDBDBD] text-[#828282] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#EAEAEA] transition">
                Date Range
            </button>
        </div>

        <!-- Table -->
        <!-- Table Wrapper -->
        <div class="rounded-xl border border-[#B7B7B7] mt-3 overflow-hidden">
            <div v-if="!isMobile" class="hidden sm:block">
                <!-- Scrollable Table -->
                <div class="max-h-80 overflow-y-auto scrollbar-hide">
                    <table class="w-full text-sm text-left text-[#414141]">
                        <thead class="text-[#3B3B3B] border-b border-[#B7B7B7]">
                            <tr>
                                <th class="px-4 py-3 font-semibold text-lg">Ride ID</th>
                                <th class="px-4 py-3 font-semibold text-lg">Amount</th>
                                <th class="px-4 py-3 font-semibold text-lg">Type</th>
                                <th class="px-4 py-3 font-semibold text-lg">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="activity in RecentData" :key="activity.id" class="border-b border-[#B7B7B7]">
                                <td class="px-4 py-3">#{{ activity.booking_id }}</td>
                                <td class="px-4 py-3">${{ activity.amount }}</td>
                                <td class="px-4 py-3 capitalize">{{ activity.type }}</td>
                                <td class="px-4 py-3">{{ formatDate(activity.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Mobile Table -->
            <div v-else class="sm:hidden space-y-4 p-4 text-sm text-[#414141]">
                <div v-for="activity in RecentData" :key="activity.id"
                    class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
                    <div class="flex justify-between"><span class="font-semibold">Ride ID:</span><span>TR {{
                            activity.booking_id }}</span></div>
                    <div class="flex justify-between"><span class="font-semibold">Amount:</span><span>${{
                            activity.amount }}</span></div>
                    <div class="flex justify-between"><span class="font-semibold">Type:</span><span>{{ activity.type ===
                            'credit' ? 'Top-up' : 'Debit' }}</span></div>
                    <div class="flex justify-between"><span class="font-semibold">Date:</span><span>{{
                        formatDate(activity.created_at) }}</span></div>
                </div>
            </div>
        </div>

    </div>
</template>
