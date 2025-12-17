<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "@/axios";

const now = new Date();
const start = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const end = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
const range = ref({ start, end });
const bookingHistory = ref([]);
const loading = ref(false);

const filters = ref({
  search: "",
  search_date_key: "",
  sort: "desc",
});

const fetchBookingHistory = async () => {
  try {
    loading.value = true;
    if (filters.value.search_date_key === "date_range") {
      filters.value.start_date = range.value.start;
      filters.value.end_date = range.value.end;
    } else {
      filters.value.start_date = "";
      filters.value.end_date = "";
    }
    const { data } = await axios.get('/customer/bookings/history', {
      params: filters.value,
    });

    bookingHistory.value = data.data;
  } catch (error) {
    console.error("Failed to load booking details:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchBookingHistory();
});

const dateFilterOptions = ref([
  { value: "", label: "All" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "this_week", label: "This Week" },
  { value: "last_week", label: "Last Week" },
  { value: "this_month", label: "This Month" },
  { value: "last_month", label: "Last Month" },
  { value: "this_year", label: "This Year" },
  { value: "last_year", label: "Last Year" },
  { value: "date_range", label: "Date Range" },
]);
let timer = null;

watch(
  () => filters.value.search,
  () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fetchBookingHistory();
    }, 500)
  }
);

</script>

<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-3">
        Your Rides History
      </p>
      <p class="mb-2 text-[#606060]">
        Review your completed journeys and rides
      </p>
      <!-- Select by Date Section -->
      <div class="bg-white rounded-xl space-y-4">
        <!-- Filters Row -->
        <div class="flex flex-wrap gap-4">
          <!-- Search by Trips (Wider: spans 2 columns) -->
          <div class="w-full sm:flex-[2] relative">
            <input type="text" placeholder="Search by trip ID & destination"
              class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              v-model="filters.search" />
            <img src="../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4" alt="Search Icon" />
          </div>

          <!-- Date Range Dropdown -->
          <div class="w-full sm:flex-1">
            <select
              class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              v-model="filters.sort" @change="fetchBookingHistory()">
              <option value="desc">Sort by newest first</option>
              <option value="asc">Sort by oldest first</option>
            </select>
            <img src="../assets/icons/dashboard/calender-arrow.svg" class="absolute right-3 top-4"
              alt="Dropdown Arrow" />
          </div>

          <!-- Date Range Dropdown -->
          <div class="w-full sm:flex-1">
            <select v-model="filters.search_date_key"
              class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              @change="fetchBookingHistory()">
              <option v-for="option in dateFilterOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div v-if="filters.search_date_key === 'date_range'" class="w-full sm:flex-[2]">
            <VDatePicker v-model.range="range" @update:modelValue="fetchBookingHistory()">
              <template #default="{ inputValue, inputEvents }">
                <div class="flex items-center gap-2">
                  <input class="w-full border border-[#D8D8D8] rounded-lg py-1 px-2" :value="inputValue.start"
                    v-on="inputEvents.start" />
                  <!-- <img src="../../../assets/icons/dashboard/mini-clock.svg" class="h-4" alt="date" /> -->
                  <input class="w-full border border-[#D8D8D8] rounded-lg py-1 px-2" :value="inputValue.end"
                    v-on="inputEvents.end" />
                </div>
              </template>
            </VDatePicker>
          </div>
        </div>
      </div>

      <!-- =============== MAIN SECTION WRAPPER =============== -->
      <!-- ========== SKELETON LOADING ========== -->
       <div>
      <div v-if="loading" class="space-y-6 mt-6">
        <div v-for="i in 3" :key="i" class="bg-white border border-[#DBDBDB] rounded-xl shadow p-4 animate-pulse">
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

      <!-- first card completed status -->
      <section v-else class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
        <div class="flex-1 space-y-6">
          <div  class="px-2 sm:px-0 ">
            <div v-for="history in bookingHistory" :key="history.id"
              class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6">
              <!-- ========== HEADER ========== -->
              <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b p-3">
                <div class="flex items-center gap-2">
                  <img src="../assets/icons/rides/ride-complete.svg" alt="complete" srcset="" class="h-8" />
                  <h3 class="text-md sm:text-lg lg:text-xl font-normal text-[#414141]">
                    Completed
                  </h3>
                </div>
                <button
                  class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                  View
                </button>
              </div>
              <!-- header -->
              <div class="flex items-center justify-between px-4 mt-2">
                <h3 class="text-lg text-[#414141]">Ride ID: TR:{{ history.id }}</h3>
                <div class="flex items-center gap-2">
                  <img src="../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                  <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                  <p class="text-sm sm:text-lg font-medium text-[#000]">${{ history.payments_total }}</p>
                </div>
              </div>
              <!-- One Way / Two Way Seal -->
              <div class="mr-4 mt-1 flex items-center">
                <div class="ml-auto inline-flex items-center justify-center
                             border border-[#329EE7]
                             whitespace-nowrap
                             px-3 sm:px-6
                             rounded-full
                             text-[#329EE7]
                             text-[10px] sm:text-[12px]
                              font-medium">
                  {{ history.travel_type === "1"
                    ? "One Way"
                    : history.travel_type === "2"
                      ? "Two Way"
                      : "N/A"
                  }}
                </div>
              </div>
              <!-- ========== ROUTE BLOCK ========== -->
              <div
                class="flex flex-col sm:flex-row justify-between mb-2 gap-3 items-start text-sm text-[#414141] px-4 pt-3">
                <!-- Left Side Route -->
                <div class="flex flex-col sm:flex-row gap-2 sm:items-center w-full">
                  <!-- Start -->
                  <div class="flex items-center gap-2">
                    <img src="../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                    <span class="text-xs sm:text-sm">
                      {{ history.pickup_location }}
                    </span>
                  </div>

                  <!-- Route Icon -->
                  <img src="../assets/icons/dashboard/small-fare.svg" class="h-2 sm:mt-1.5 my-1 sm:my-0 mx-auto sm:mx-0"
                    alt="route" />

                  <!-- End -->
                  <div class="flex items-center gap-2">
                    <img src="../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                    <span class="text-xs sm:text-sm">{{ history.drop_location }}</span>
                  </div>
                </div>
              </div>

              <!-- ========== STATS ROW ========== -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3 items-start">
                <!-- Distance -->
                <div class="flex flex-col items-start sm:items-start gap-1 rounded-lg px-1 text-md text-[#17171A]">
                  <span class="text-[#414141] text-lg">Distance: {{ history.total_distance }}</span>
                </div>

                <!-- Duration -->
                <div class="flex flex-col items-start sm:items-end gap-1">
                  <span class="text-[#414141] text-lg">Duration: {{ history.total_time }}</span>
                </div>
              </div>

              <!-- ========== DRIVER DETAILS ========== -->
              <div v-if="history.driver_bookings && history.driver_bookings.length"
                class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
                <div v-for="d in history.driver_bookings" :key="d.id"
                  class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <img src="../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full" alt="Driver" />

                  <div class="text-sm text-[#414141]">
                    <p class="font-semibold">{{ d.driver_name }}</p>
                    <p class="text-xs sm:text-sm">
                      Car: {{ d.vehicle_name }} Plate # ABC 123
                    </p>
                  </div>

                  <button
                    class="bg-[#FFFFFF] border border-[#8F8F8F] font-semibold px-6 sm:px-11 py-1 rounded-full text-[#8F8F8F] text-sm hover:bg-blue-700 transition">
                    Driver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  </main>
</template>
