<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "@/axios";

import RidesComing from "./rides/components/RidesComing.vue";
import RidesCompleted from "./rides/components/RidesCompleted.vue";
import RidesCancelled from "./rides/components/RidesCancelled.vue";

const activeTab = ref("upcoming");

// API data variable
const bookings = ref([]);
const totalBookings = ref(0);
const cancelledBookings = ref(0);
const search = ref("");
const dateType = ref("");
const dateRange = ref(null);

// Watch for tab changes to refetch data
watch(activeTab, () => {
  fetchBookings();
});

const handleCompleted = () => {
  activeTab.value = "completed";
  search.value = "";
  dateType.value = "";
  dateRange.value = null;
};

const filterRidesBySearch = (value) => {
  search.value = value;
  fetchBookings();
};

const filterRidesByDate = (value, range) => {
  dateType.value = value;
  dateRange.value = range;
  fetchBookings();
};

const filterRidesByDateRange = (value) => {
  dateRange.value = value;
  fetchBookings();
};

// API call function
const fetchBookings = async () => {
  try {
    let filters = {
      tab: activeTab.value,
      search: activeTab.value === "completed" ? search.value : "",
      search_date_key: activeTab.value === "completed" ? dateType.value : "",
      start_date: activeTab.value === "completed" && dateType.value === "date_range" ? dateRange.value?.start : "",
      end_date: activeTab.value === "completed" && dateType.value === "date_range" ? dateRange.value?.end : "",
    };

    const res = await axios.get(`/customer/bookings`, {
      params: filters,
    });

    const data = res.data.data;
    bookings.value = data.bookings;
    totalBookings.value = data.total_bookings_count;
    cancelledBookings.value = data.cancelled_bookings_count;
  } catch (err) {
    console.error("Error fetching bookings:", err);
  }
};
// Call API on mount
onMounted(() => {
  fetchBookings();
});
</script>

<template>
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- =============== STATS ROW =============== -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <!-- Total Trips -->
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between">
          <p class="text-[#878787] text-sm sm:text-md font-medium">
            Total Trips
          </p>
          <h1 class="text-[#0072EF] text-3xl sm:text-4xl font-semibold">
            {{ totalBookings }}
          </h1>
        </div>

        <!-- Canceled Rides -->
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between">
          <p class="text-[#878787] text-sm sm:text-md font-medium">
            Canceled Rides
          </p>
          <h1 class="text-[#0072EF] text-3xl sm:text-4xl font-semibold">
            {{ cancelledBookings }}
          </h1>
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <div class="mt-4 border border-[#CECECE] rounded-xl p-2 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
        <!-- Up-coming -->
        <button @click="activeTab = 'upcoming'" :class="activeTab === 'upcoming'
          ? 'bg-[#329EE7] text-white'
          : 'border border-[#878787] text-[#878787] bg-white'
          " class="text-sm py-2 px-8 sm:px-16 rounded-md shadow hover:bg-blue-600 transition">
          Up-coming Rides
        </button>

        <!-- Completed -->
        <button @click="handleCompleted" :class="activeTab === 'completed'
          ? 'bg-[#0FB14B] text-white'
          : 'border border-[#878787] text-[#878787] bg-white'
          " class="text-sm py-2 px-8 sm:px-16 rounded-md shadow">
          Completed Rides
        </button>

        <!-- Cancelled -->
        <button @click="activeTab = 'cancelled'" :class="activeTab === 'cancelled'
          ? 'bg-[#0FB14B] text-white'
          : 'border border-[#878787] text-[#878787] bg-white'
          " class="text-sm py-2 px-8 sm:px-16 rounded-md shadow">
          Canceled Rides
        </button>
      </div>

      <RidesComing v-if="activeTab === 'upcoming'" :rides="bookings" @refresh="fetchBookings" />
      <RidesCompleted v-if="activeTab === 'completed'" :rides="bookings" @search="filterRidesBySearch"
        @filterRidesByDate="filterRidesByDate" @filterRidesByDateRange="filterRidesByDateRange" />
      <RidesCancelled v-if="activeTab === 'cancelled'" :rides="bookings" />
    </div>
  </main>
</template>
