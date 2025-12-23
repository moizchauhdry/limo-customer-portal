<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
//  defining the props comes from the Rides parent component
defineProps({
  rides: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  "filterRidesByDate",
]);

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

const search = ref("");
const selectedDateFilter = ref("");

const now = new Date();
const start = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const end = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
const range = ref({ start, end });

let timer = null;

watch(search, (value) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    emit("search", value);
  }, 500);
});
</script>

<template>
  <!-- MAIN CONTENT -->
  <div data-aos="fade-up" data-aos-duration="1000">
    <!-- Heading -->
    <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
      Select by date
    </p>
    <!-- Select by Date Section -->
    <div class="bg-white rounded-xl space-y-4">
      <!-- Filters Row -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <!-- Search by Trips (Wider: spans 2 columns) -->
        <div class="relative col-span-1 sm:col-span-2">
          <input type="text" placeholder="Search by trips"
            class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
            v-model="search" />
          <img src="../../../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4"
            alt="Search Icon" />
        </div>

        <!-- Date Range Dropdown -->
        <div class="relative col-span-1">
          <select v-model="selectedDateFilter"
            class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
            @change="emit('filterRidesByDate', selectedDateFilter, range)">
            <option v-for="option in dateFilterOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <VDatePicker v-if="selectedDateFilter === 'date_range'" v-model.range="range"
          @update:modelValue="emit('filterRidesByDateRange', range)">
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

    <!-- =============== MAIN SECTION WRAPPER =============== -->
    <section class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
      <!-- LEFT COLUMN -->
      <div class="flex-1 space-y-6">
        <div class="px-2 sm:px-0">
          <div v-for="(ride, index) in rides" :key="index"
            class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6">
            <!-- ========== HEADER ========== -->
            <div class="flex flex-col lg:flex-row items-start lg:items-center gap-3 border-b p-3">
              <img src="../../../assets/icons/rides/ride-complete.svg" alt="ride" class="h-8" />
              <h3 class="text-md sm:text-lg lg:text-xl font-normal text-[#414141] font-poppins">
                Completed Rides
              </h3>

              <!-- <button
                    class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition"
                  >
                    View
                  </button> -->
            </div>
            <!-- header -->
            <div class="flex items-center justify-between px-4 mt-2">
              <h3 class="text-lg text-[#414141]">Ride ID: TR{{ ride.id }}</h3>
              <div
                class="flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-2 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8]">
                <img src="../../../assets/icons/dashboard/distance.svg" class="h-3" alt="date" />
                <span>{{ ride.pickup_date }}</span>
                <img src="../../../assets/icons/dashboard/mini-clock.svg" class="h-4" alt="date" />
                <span>{{ ride.pickup_time }}</span>
              </div>
            </div>
            <!-- ========== ROUTE BLOCK ========== -->
            <div class="flex flex-col sm:flex-row gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2">
              <div class="flex flex-row gap-2">
                <div class="flex items-center gap-2 text-[#17171A]">
                  <img src="../../../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                  <span class="text-xs sm:text-sm">{{
                    ride.pickup_location
                  }}</span>
                </div>
                <!-- Vertical Route Icon -->
                <img src="../../../assets/icons/dashboard/small-fare.svg" class="h-2 mt-1.5" alt="route" />

                <div class="flex items-center gap-2 text-[#17171A]">
                  <img src="../../../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                  <span class="text-xs sm:text-sm">{{
                    ride.drop_location
                  }}</span>
                </div>
              </div>
              <div
                class="ml-auto border border-[#329EE7] whitespace-nowrap px-2 sm:px-6  rounded-full text-[#329EE7] text-[10px] sm:text-[12px]">
                <h1>{{ ride.travel_type === "1" ? "One Way" : ride.travel_type === "2" ? "Two Way" : "N/A" }}</h1>
              </div>
            </div>

            <!-- ========== STATS ROW ========== -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3 items-start">
              <!-- Distance & Time -->
              <div class="flex flex-col items-start sm:w-[50%] gap-2 rounded-lg px-1 text-md text-[#17171A]">
                <div class="items-center gap-1">
                  <span class="text-[#414141]">Distance: {{ ride.total_distance }}</span>
                </div>
                <div class="items-center gap-1">
                  <span class="text-[#414141]">Duration: {{ ride.total_time }}</span>
                </div>
              </div>

              <!-- Fare & Status -->
              <div class="flex flex-col items-end gap-2">
                <div class="flex items-center gap-2">
                  <img src="../../../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                  <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                  <p class="text-sm sm:text-lg font-medium text-[#000]">
                    ${{ ride.payments_total }}
                  </p>
                </div>

                <RouterLink :to="`/view-booking/${ride.id}`"
                  class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                  View
                </RouterLink>
              </div>
            </div>

            <!-- ========== DRIVER DETAILS ========== -->
            <div v-if="ride.driver_bookings && ride.driver_bookings.length"
              class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
              <div class="flex justify-between items-center">
                <h3 class="text-[#414141] text-lg">Driver Details</h3>
              </div>

              <div v-for="(d, dIdx) in ride.driver_bookings" :key="dIdx"
                class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <img src="../../../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full" alt="Driver" />

                <div class="text-sm text-[#414141]">
                  <p class="font-semibold">{{ d.driver_name }}</p>
                  <p class="text-xs sm:text-sm">
                    Car: {{ d.vehicle_name }} Plate # ABC 123
                  </p>
                </div>

                <button
                  class="bg-[#0072EF] text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <img src="../../../assets/icons/dashboard/call.svg" class="h-4" alt="phone" />
                  Call Driver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
