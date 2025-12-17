<script setup>
import { defineProps } from "vue";

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
    <div class="">
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
    </div>

    <div class="rounded-xl  border border-[#B7B7B7] mt-3">
      <div v-if="!isMobile" class="hidden sm:block">
        <table class="w-full text-sm text-left text-[#414141]">
          <thead class="text-[#3B3B3B] border-b border-[#B7B7B7]">
            <tr>
              <th class="px-4 py-3 font-semibold text-lg">Transaction ID</th>
              <th class="px-4 py-3 font-semibold text-lg">Date</th>
              <th class="px-4 py-3 font-semibold text-lg">Pick up</th>
              <th class="px-4 py-3 font-semibold text-lg">Drop off</th>
              <th class="px-4 py-3 font-semibold text-lg">Fare</th>
              <th class="px-4 py-3 font-semibold text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[#B7B7B7]">
              <td class="px-4 py-3">TR </td>
              <td class="px-4 py-3">10/20/2025</td>
              <td class="px-4 py-3">LaGuardia</td>
              <td class="px-4 py-3">JFK</td>
              <td class="px-4 py-3">$120</td>
              <td class="px-4 py-3">
                <span class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs">
                  Complete
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div v-else class="sm:hidden space-y-4 p-4 text-sm text-[#414141]">
        <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
          <div class="flex justify-between">
            <span class="font-semibold">Ride ID:</span><span>TR 1154</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Date:</span><span>10/20/2025</span>
          </div>
          <div class="flex justify-between">
            <span class="font-semibold">Fare:</span><span>$120</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
