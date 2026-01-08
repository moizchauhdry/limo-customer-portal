<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "@/axios";

import SkeletonLoading from "./SkeletonLoading.vue";

const route = useRoute();
const bookingId = route.params.id;

const bookingData = ref(null);
const loading = ref(false)

const loadBookingDetails = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/customer/bookings/${bookingId}/view`);
    bookingData.value = response.data.data;
    console.log(response)
  } catch (error) {
    console.error("Failed to load booking details:", error);
  } finally {
    loading.value = false;
  }
};

// Run on mount
onMounted(() => {
  loadBookingDetails();
});
</script>

<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <!-- =============== STATS ROW =============== -->
      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
       
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between">
          <p class="text-[#878787] text-md sm:text-md font-semibold">
            Ride Starts in
          </p>
          <h1 class="text-[#FF5B64] text-3xl sm:text-4xl font-semibold">
            1h, 35 mins
          </h1>
          <img src="../assets/icons/rides/ride-start.svg" class="h-6" alt="Ride Starts" />
        </div>
      </div> -->
      <!-- =============== MAIN SECTION WRAPPER =============== -->
      <section class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
        <!-- LEFT COLUMN -->
        <div class="flex-1 space-y-6">
          <div class="px-2 sm:px-0">
            <div>
              <div v-if="loading" class="space-y-6 mt-6">
                <SkeletonLoading :count="1" />
              </div>
              <div v-else>
                <div v-if="bookingData" class="bg-white border border-[#DBDBDB] rounded-xl shadow">
                  <div class="flex justify-between border-b p-3">
                    <div class="flex items-center gap-2">

                      <img v-if="['reservation confirmed', 'confirmed', 'completed'].includes(
                        bookingData.booking_status_name?.toLowerCase()
                      )" src="../assets/icons/rides/ride-complete.svg" alt="confirmed" class="h-8" />

                      <img v-else-if="bookingData.booking_status_name?.toLowerCase() === 'cancelled'"
                        src="../assets/icons/rides/cancelled.svg" alt="pending" class="h-8" />

                      <img v-else src="../assets/icons/rides/ride-info.png" alt="info" class="h-8" />


                      <h3 class="text-md sm:text-lg lg:text-xl font-normal text-[#414141]">
                        {{ bookingData.booking_status_name }}
                      </h3>
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
                        {{ bookingData.travel_type === "1"
                          ? "One Way"
                          : bookingData.travel_type === "2"
                            ? "Two Way"
                            : "N/A"
                        }}
                      </div>
                    </div>
                  </div>
                  <!-- ========== ROUTE BLOCK ========== -->
                  <div class="flex flex-col sm:flex-row pb-4 sm:pb-0 justify-between">
                    <div class="flex gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2">
                      <!-- Vertical Route Icon -->
                      <img src="../assets/icons/dashboard/location-line.svg" class="h-10 sm:h-12 pt-1" alt="route" />

                      <div class="flex flex-col space-y-3">
                        <div class="flex items-center gap-2">
                          <img src="../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                          <span class="text-xs sm:text-sm">{{
                            bookingData.pickup_location
                            }}</span>
                        </div>

                        <div class="flex items-center gap-2">
                          <img src="../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                          <span class="text-xs sm:text-sm">{{
                            bookingData.drop_location
                            }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-[#17171A] px-4 ml-auto sm:ml-0">
                      <img src="../assets/icons/dashboard/date.svg" class="h-3" alt="date" />
                      <span>{{ bookingData.pickup_date }}</span>

                      <img src="../assets/icons/dashboard/time.svg" class="h-3" alt="time" />
                      <span>{{ bookingData.pickup_time }}</span>
                    </div>
                  </div>

                  <!-- ========== STATS ROW ========== -->
                  <div class="flex flex-col gap-3 text-sm text-[#414141] px-4 pb-3">
                    <!-- Distance & Time -->
                    <div
                      class="flex items-center w-fit mt-2 gap-3 border border-[#D8D8D8] rounded-lg py-1 px-4 text-xs text-[#17171A]">
                      <div class="flex items-center gap-1">
                        <img src="../assets/icons/dashboard/distance.svg" class="h-3" alt="Distance" />
                        <span>{{ bookingData.total_distance }}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <img src="../assets/icons/dashboard/mini-clock.svg" class="h-3" alt="Time" />
                        <span>{{ bookingData.total_time }}</span>
                      </div>
                    </div>

                    <!-- Fare & Status -->
                    <div class="flex flex-col items-end gap-2">
                      <div class="flex items-center gap-2">
                        <img src="../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                        <p class="text-sm text-[#000]">Total Fare:</p>
                        <p class="text-sm font-medium text-[#000]">
                          ${{ bookingData.payments_total }}
                        </p>
                      </div>

                      <span class="border border-[#FF3636] text-[#FF3636] rounded-full px-3 py-1 text-xs shadow-sm">
                        Cancel ride
                      </span>
                    </div>
                  </div>

                  <!-- ========== DRIVER DETAILS ========== -->
                  <div v-if="bookingData.driver_bookings && bookingData.driver_bookings.length"
                    class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
                    <h3 class="text-[#414141] text-lg">Driver Details</h3>

                    <div v-for="d in bookingData.driver_bookings" :key="d.id" class="space-y-2">
                      <div class="flex justify-end">
                        <p class="text-sm font-medium text-[#414141]">
                          {{ d.driver_phone }}
                        </p>
                      </div>

                      <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                        <img src="../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full" alt="Driver" />

                        <div class="text-sm text-[#414141]">
                          <p class="font-semibold">{{ d.driver_name }}</p>
                          <p class="text-xs sm:text-sm">
                            Car: {{ d.vehicle_name }} Plate # ABC 123
                          </p>
                        </div>

                        <button
                          class="bg-[#0072EF] text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                          <img src="../assets/icons/dashboard/call.svg" class="h-4" alt="phone" />
                          Call Driver
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
