<script setup>
import { defineProps, onMounted, ref } from "vue";
import axios from "@/axios";
import { formatDate } from "@/utils";
import TripTableSkeleton from "@/components/TripTableSkeleton.vue";

const recentHistory = ref([]);
const loading = ref()

const fetchTransactionHistory = async () => {
  try {
    loading.value = true;
    const { data } = await axios.get('/customer/wallet/transaction-history');
    recentHistory.value = data.data.data;
  } catch (err) {
    console.log("Failed to load Transaction History:", err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchTransactionHistory();
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
      Transaction History
    </p>
    <!-- Filter Section -->
    <!-- <div class="">
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div class="relative col-span-1 sm:col-span-2">
          <input type="text" placeholder="Search"
            class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]" />
          <img src="../../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4" alt="Search Icon" />
        </div>


        <button class="w-full bg-[#0072EF] text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Transaction Type
        </button>


        <button
          class="w-full border border-[#BDBDBD] text-[#828282] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#EAEAEA] transition">
          Date Range
        </button>
      </div>
    </div> -->

    <div>
      <div v-if="loading" class="space-y-6 mt-6">
        <TripTableSkeleton :count="4" />
      </div>
      <div v-else class="rounded-xl  border border-[#B7B7B7] mt-3">
        <div class="hidden sm:block">
          <!-- Scrollable Table -->
          <div class="max-h-80 overflow-y-auto no-scrollbar">
            <table class="w-full text-sm text-left text-[#414141]">
              <thead class="text-[#3B3B3B] border-b border-[#B7B7B7]">
                <tr>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Ride ID</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Date</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Pick up</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Drop off</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Payment Method</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Status</th>
                  <th class="px-4 py-3 font-semibold text-sm whitespace-nowrap">Fare</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="history in recentHistory" :key="history.id" class="border-b border-[#B7B7B7]">
                  <td class="px-4 py-3">
                    <span v-if="history.booking_id">#{{ history.booking_id }}</span>
                    <span v-else class="text-gray-400 italic">General</span>
                  </td>
                  <td class="px-4 py-3">{{ formatDate(history.payment_at) }}</td>
                  <td class="px-4 py-3">{{ history.pickup_location }}</td>
                  <td class="px-4 py-3">{{ history.drop_location }}</td>
                  <td class="px-4 py-3 font-bold">{{ history.payment_method }}</td>
                  <!-- <td class="px-4 py-3">
                <span class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs">
                  Complete
                </span>
              </td> -->
                  <td class="px-4 py-3">
                    <span class="px-3 py-1 rounded-full text-xs font-medium" :class="history.payment_status === 1
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'">
                      {{ history.payment_status === 1 ? 'Paid' : 'Unpaid' }}
                    </span>
                  </td>

                  <td class="px-4 py-3">{{ history.payment_grand_total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Mobile Cards -->
        <div v-for="history in recentHistory" :key="history.id" class="sm:hidden space-y-4 p-4 text-sm text-[#414141]">
          <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
            <div class="flex justify-between">
              <span class="font-semibold">Ride ID:</span><span>#{{ history.booking_id }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Date:</span><span>{{ formatDate(history.payment_at) }}</span>
            </div>
            <div class="flex justify-between gap-5">
              <span class="font-semibold whitespace-nowrap">Pick up</span><span class="text-xs justify-end">{{
                history.pickup_location }}</span>
            </div>
            <div class="flex justify-between gap-5">
              <span class="font-semibold">Drop off</span><span class="text-xs">{{ history.drop_location }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold whitespace-nowrap">Payment Method</span><span class="font-bold">{{
                history.payment_method }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Status</span><span class="px-3 py-1 rounded-full text-xs font-medium" :class="history.payment_status === 1
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'">
                {{ history.payment_status === 1 ? 'Paid' : 'Unpaid' }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Fare:</span><span>{{ history.payment_grand_total }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
