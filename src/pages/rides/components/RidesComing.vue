<script setup>
import { defineProps, defineEmits, ref } from "vue";
import PaymentModal from "@/components/rides/PaymentModal.vue";

defineProps({
  rides: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['refresh']);

const showPaymentModal = ref(false);
const selectedRide = ref(null);

const close = () => {
  showPaymentModal.value = false;
  selectedRide.value = null;
  emit('refresh');
};
</script>

<template>

  <PaymentModal v-if="showPaymentModal" :ride="selectedRide" @close="close" />

  <!-- MAIN CONTENT -->
  <div data-aos="fade-up" data-aos-duration="1000">
    <section class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
      <!-- LEFT COLUMN -->
      <div class="flex-1 space-y-6">
        <div class="px-2 sm:px-0">
          <!--  SINGLE v-for  -->
          <div v-for="(ride, idx) in rides" :key="ride.id ?? idx"
            class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6">
            <!-- ========== HEADER ========== -->
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b p-3">
              <div class="flex items-center gap-2 text-sm text-[#17171A]">
                <img src="../../../assets/icons/dashboard/date.svg" class="h-3" alt="date" />
                <span>{{ ride.pickup_date }}</span>

                <img src="../../../assets/icons/dashboard/time.svg" class="h-3" alt="time" />
                <span>{{ ride.pickup_time }}</span>
              </div>

              <div class="flex items-center gap-2">
                <button v-if="ride.payment_status == 0"
                  class="bg-[#046e24] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition"
                  @click="showPaymentModal = true; selectedRide = ride">
                  Pay Now
                </button>

                <RouterLink v-if="ride.booking_status_id != 2 && ride.payment_status == 0"
                  :to="`/rides/edit/${ride.id}`"
                  class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                  Edit
                </RouterLink>

                <RouterLink :to="`/view-booking/${ride.id}`"
                  class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition">
                  View
                </RouterLink>
              </div>
            </div>

            <!-- ========== ROUTE BLOCK ========== -->
            <div class="flex gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2">
              <img src="../../../assets/icons/dashboard/location-line.svg" class="h-16 sm:h-12 pt-1Com" alt="route" />

              <div class="flex flex-col space-y-3 text-[#17171A]">
                <div class="flex items-center gap-2">
                  <img src="../../../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                  <span class="text-xs sm:text-sm">{{
                    ride.pickup_location
                  }}</span>
                </div>

                <div class="flex items-center gap-2">
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
            <div class="flex flex-row sm:flex-row gap-3 justify-between text-sm text-[#414141] px-4 pb-3">
              
              <div
                class="flex items-center h-[26px] mt-4 gap-3 border border-[#D8D8D8] rounded-lg py-1 px-3 text-xs whitespace-nowrap text-[#17171A]">
                <div class="flex items-center gap-1">
                  <img src="../../../assets/icons/dashboard/distance.svg" class="h-3" alt="Distance" />
                  <span>{{ ride.total_distance }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <img src="../../../assets/icons/dashboard/mini-clock.svg" class="h-3" alt="Time" />
                  <span>{{ ride.total_time }}</span>
                </div>
              </div>

              <div class="flex flex-col items-end gap-2">
                <div class="flex items-center gap-2">
                  <img src="../../../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                  <p class="text-xs whitespace-nowrap sm:text-sm text-[#000]">Total Fare:</p>
                  <p class="text-sm font-medium text-[#000]">
                    ${{ ride.payments_total }}
                  </p>
                </div>

                <span class="border border-[#FF3636] text-[#FF3636] rounded-full px-3 py-1 text-xs shadow-sm">
                  Cancel ride
                </span>
              </div>
            </div>

            <!-- ========== DRIVER DETAILS ========== -->
            <div v-if="ride.driver_bookings && ride.driver_bookings.length"
              class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
              <h3 class="text-[#414141] text-lg">Driver Details</h3>

              <div v-for="(d, dIdx) in ride.driver_bookings" :key="dIdx" class="space-y-2">
                <div class="flex justify-end">
                  <p class="text-sm font-medium text-[#414141]">
                    {{ d.driver_phone }}
                  </p>
                </div>

                <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
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
      </div>
    </section>
  </div>
</template>
