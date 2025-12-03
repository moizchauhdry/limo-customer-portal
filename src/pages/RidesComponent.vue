<script setup>
import { ref } from "vue";
import RidesComing from "./rides/components/RidesComing.vue";
import RidesCompleted from "./rides/components/RidesCompleted.vue";
import RidesCancelled from "./rides/components/RidesCancelled.vue";

const activeTab = ref("coming");
</script>

<template>
  <main
    class="lg:ml-64 pt-[100px] mb-5"
    data-aos="fade-right"
    data-aos-duration="1200"
    data-aos-offset="150"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- =============== STATS ROW =============== -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <!-- Total Trips -->
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between"
        >
          <p class="text-[#878787] text-sm sm:text-md font-medium">
            Total Trips
          </p>
          <h1 class="text-[#0072EF] text-3xl sm:text-4xl font-semibold">12</h1>
        </div>

        <!-- Canceled Rides -->
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between"
        >
          <p class="text-[#878787] text-sm sm:text-md font-medium">
            Canceled Rides
          </p>
          <h1 class="text-[#0072EF] text-3xl sm:text-4xl font-semibold">05</h1>
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <div
        class="mt-4 border border-[#CECECE] rounded-xl p-2 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between"
      >
        <!-- Up-coming -->
        <button
          @click="activeTab = 'coming'"
          :class="
            activeTab === 'coming'
              ? 'bg-[#329EE7] text-white'
              : 'border border-[#878787] text-[#878787] bg-white'
          "
          class="text-sm py-2 px-8 sm:px-16 rounded-md shadow hover:bg-blue-600 transition"
        >
          Up-coming Rides
        </button>

        <!-- Completed -->
        <button
          @click="activeTab = 'completed'"
          :class="
            activeTab === 'completed'
              ? 'bg-[#0FB14B] text-white'
              : 'border border-[#878787] text-[#878787] bg-white'
          "
          class="text-sm py-2 px-8 sm:px-16 rounded-md shadow"
        >
          Completed Rides
        </button>

        <!-- Cancelled -->
        <button
          @click="activeTab = 'cancelled'"
          :class="
            activeTab === 'cancelled'
              ? 'bg-[#0FB14B] text-white'
              : 'border border-[#878787] text-[#878787] bg-white'
          "
          class="text-sm py-2 px-8 sm:px-16 rounded-md shadow"
        >
          Canceled Rides
        </button>
      </div>

      <RidesComing v-if="activeTab === 'coming'" />
      <RidesCompleted v-if="activeTab === 'completed'" />
      <RidesCancelled v-if="activeTab === 'cancelled'" />
    </div>
  </main>
</template>
