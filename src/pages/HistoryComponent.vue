<script setup>
import { onMounted, ref, watch } from "vue";
import SkeletonLoading from "@/components/SkeletonLoading.vue";
import axios from "@/axios";
import PaginationComponent from "@/components/PaginationComponent.vue";

const now = new Date();
const start = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const end = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
const range = ref({ start, end });
const bookingHistory = ref([]);
const pagination = ref({});
const loading = ref(false);

const filters = ref({
  search: "",
  search_date_key: "",
  sort: "desc",
});

const fetchBookingHistory = async (url = '/customer/bookings/history') => {
  try {
    loading.value = true;
    if (filters.value.search_date_key === "date_range") {
      filters.value.start_date = range.value.start;
      filters.value.end_date = range.value.end;
    } else {
      filters.value.start_date = "";
      filters.value.end_date = "";
    }
    const { data } = await axios.get(url, {
      params: filters.value,
    });

    bookingHistory.value = data.data.data;
    pagination.value = data.data;
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
  <main class="lg:ml-64 pt-[100px] mb-5">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-light font-poppins sm:mt-4 mb-3">
        Your Rides History
      </p>
      <p class="mb-2 text-[#606060] font-poppins text-sm sm:text-md">
        Review your completed journeys and rides
      </p>
      <!-- Select by Date Section -->
      <div class="bg-white rounded-xl space-y-4">
        <!-- Filters Row -->
        <div class="flex flex-wrap gap-4">
          <!-- Search by Trips (Wider: spans 2 columns) -->
          <div class="w-full sm:flex-[2] relative">
            <input type="text" placeholder="Search by trip ID & destination"
              class="w-full pl-10 pr-4 py-3 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:font-light placeholder:font-poppins placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              v-model="filters.search" />
            <img src="../assets/icons/rides/search-icon.svg" class="absolute left-3 top-[0.8rem] h-5"
              alt="Search Icon" />
          </div>

          <!-- Date Range Dropdown -->
          <div class="w-full sm:flex-1">
            <select
              class="w-full appearance-none pr-10 pl-4 py-3 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
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
              class="w-full appearance-none pr-10 pl-4 py-3 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
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
          <SkeletonLoading />
        </div>
        <!-- first card completed status -->
        <section v-else class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
          <div class="flex-1 space-y-6">
            <div class="px-2 sm:px-0 ">
              <div v-for="history in bookingHistory" :key="history.id"
                class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6">
                <!-- ========== HEADER ========== -->
                <div class="flex flex-row lg:flex-row items-center lg:items-center justify-between gap-3 border-b p-3">
                  <div class="flex items-center gap-2 font-poppins">

                    <img v-if="['completed', 'reservation confirmed'].includes(
                      history.booking_status_name?.toLowerCase()
                    )" src="../assets/icons/rides/ride-complete.svg" alt="complete" class="h-6 sm:h-8" />


                    <img v-else-if="history.booking_status_name?.toLowerCase() === 'cancelled'"
                      src="../assets/icons/rides/cancelled.svg" alt="pending" class="h-8" />


                    <img v-else src="../assets/icons/rides/ride-info.png" alt="info" class="h-8" />


                    <h3 class="text-md sm:text-lg lg:text-xl text-[#414141] font-poppins font-light">
                      {{ history.booking_status_name || 'Completed' }}
                    </h3>
                  </div>

                  <RouterLink :to="`/view-booking/${history.id}`"
                    class="bg-[#329EE7] px-4 sm:px-12 py-1.5 font-poppins font-light rounded-full text-white text-xs hover:bg-blue-700 transition">
                    View
                  </RouterLink>
                </div>
                <!-- header -->
                <div class="flex items-center justify-between px-4 mt-2">
                  <h3 class="text-lg text-[#414141] font-regular font-poppins">Ride ID: TR:{{ history.id }}</h3>
                  <div class="flex items-center gap-2">
                    <img src="../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                    <p class="text-sm sm:text-lg text-[#212121]">Final Fare:</p>
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
                    <div class="flex items-center gap-2 text-[#17171A]">
                      <img src="../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                      <span class="text-xs sm:text-sm font-poppins">
                        {{ history.pickup_location }}
                      </span>
                    </div>

                    <!-- Route Icon -->
                    <img src="../assets/icons/dashboard/small-fare.svg"
                      class="h-2 sm:mt-1.5 my-1 sm:my-0 mx-auto sm:mx-0" alt="route" />

                    <!-- End -->
                    <div class="flex items-center gap-2 text-[#17171A]">
                      <img src="../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                      <span class="text-xs sm:text-sm font-poppins">{{ history.drop_location }}</span>
                    </div>
                  </div>
                </div>

                <!-- ========== STATS ROW ========== -->
                <div
                  class="grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3 items-start  mt-4 sm:mt-0">
                  <!-- Distance -->
                  <div
                    class="flex flex-col font-poppins items-start sm:items-start gap-1 rounded-lg px-1 text-md text-[#17171A]">
                    <span class="text-[#414141] text-xs sm:text-lg">Distance: {{ history.total_distance }}</span>
                  </div>

                  <!-- Duration -->
                  <div class="flex flex-col font-poppins items-start sm:items-end gap-1">
                    <span class="text-[#414141] text-xs sm:text-lg">Duration: {{ history.total_time }}</span>
                  </div>
                </div>

                <!-- ========== DRIVER DETAILS ========== -->
                <div v-if="history.driver_bookings && history.driver_bookings.length"
                  class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
                  <div v-for="d in history.driver_bookings" :key="d.id"
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <img src="../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full" alt="Driver" />

                    <div class="text-sm text-#000000 font-poppins">
                      <p class="font-regular">{{ d.driver_name }}</p>
                      <p class="text-xs sm:text-sm font-medium">
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

              <PaginationComponent :pagination="pagination" @change="fetchBookingHistory" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
