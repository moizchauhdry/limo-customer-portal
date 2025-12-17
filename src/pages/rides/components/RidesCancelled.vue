<script setup>
import { defineProps } from "vue";

//  defining the prope comes from the Rides parent component
defineProps({
  rides: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <!-- =============== MAIN SECTION WRAPPER =============== -->
  <div data-aos="fade-up" data-aos-duration="1000">
    <section class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
      <!-- LEFT COLUMN -->
      <div class="flex-1 space-y-6">
        <div class="px-2 sm:px-0">
          <div v-for="(ride, index) in rides" :key="index"
            class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6">
            <!-- ========== HEADER ========== -->
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b p-3">
              <div class="flex items-center gap-2">
                <img src="../../../assets/icons/rides/cancelled.svg" alt="complete" srcset="" class="h-8" />
                <h3 class="text-md sm:text-lg lg:text-xl font-normal text-[#414141]">
                  Cancelled Ride
                </h3>
              </div>
              <button
                class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                View
              </button>
            </div>
            <!-- header -->
            <div class="flex items-center justify-between px-4 mt-2">
              <h3 class="text-lg text-[#414141]">Ride ID: TR:{{ ride.id }}</h3>
              <div class="flex items-center gap-2">
                <img src="../../../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                <p class="text-sm sm:text-lg font-medium text-[#000]">
                  ${{ ride.payments_total }}
                </p>
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
                {{ ride.travel_type === "1"
                  ? "One Way"
                  : ride.travel_type === "2"
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
                  <img src="../../../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                  <span class="text-xs sm:text-sm">
                    {{ ride.pickup_location }}
                  </span>
                </div>

                <!-- Route Icon -->
                <img src="../../../assets/icons/dashboard/small-fare.svg"
                  class="h-2 sm:mt-1.5 my-1 sm:my-0 mx-auto sm:mx-0" alt="route" />

                <!-- End -->
                <div class="flex items-center gap-2">
                  <img src="../../../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                  <span class="text-xs sm:text-sm">{{ ride.drop_location }}</span>
                </div>
              </div>

              <!-- Right Side Distance/Time Badge -->
              <div
                class="whitespace-nowrap flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-6 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8] justify-center">
                <img src="../../../assets/icons/dashboard/distance.svg" class="h-3" alt="date" />
                <span>{{ ride.total_distance }}</span>

                <img src="../../../assets/icons/dashboard/mini-clock.svg" class="h-4" alt="date" />
                <span>{{ ride.total_time }}</span>
              </div>
            </div>

            <!-- ========== STATS ROW ========== -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3 items-start">
              <!-- Distance -->
              <div class="flex flex-col items-start sm:items-start gap-1 rounded-lg px-1 text-md text-[#17171A]">
                <span class="text-[#414141] text-lg">Distance: {{ ride.total_distance }}</span>
              </div>

              <!-- Duration -->
              <div class="flex flex-col items-start sm:items-end gap-1">
                <span class="text-[#414141] text-lg">Duration: {{ ride.duration_in_hours }}</span>
              </div>
            </div>

            <!-- ========== DRIVER DETAILS ========== -->
            <div class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
              <!-- Header Row -->
              <div class="flex justify-between items-center">
                <h3 class="text-[#414141] text-lg">Reason of cancellation</h3>
              </div>

              <!-- Reason Input -->
              <div>
                <textarea placeholder="Write the reason;" rows="4"
                  class="w-full border border-[#D8D8D8] rounded-lg px-4 py-2 text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF] h-24"></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end">
                <button
                  class="bg-[#329EE7] px-6 sm:px-9 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
