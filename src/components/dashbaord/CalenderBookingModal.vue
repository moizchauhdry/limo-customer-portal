<script setup>
import { defineModel, defineProps, onMounted, ref, watch, computed } from "vue"
import ModalComponent from "@/components/ModalComponent.vue"
import axios from "@/axios"
import { useToast } from "vue-toastification"

// ✅ DEFINE PROP
const props = defineProps({
  selectedDate: {
    type: String,
    required: true,
  },
})
const toast = useToast()
const model = defineModel()



// ✅ FORMAT DATE
const formattedDate = computed(() => {
  if (!props.selectedDate) return ""

  const date = new Date(props.selectedDate)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
})

watch(
  () => props.selectedDate,
  (newDate) => {
    if (newDate) {
      fetchBookingByDate()
    }
  },
  { immediate: true }
)


const bookingRideData = ref([])
const loading = ref(true)

/* ===========================
   FETCH BOOKINGS BY DATE
=========================== */
const fetchBookingByDate = async () => {
  try {
    loading.value = true
   const { data } = await axios.get(
      `/customer/dashboard-bookings-by-date`,
      {
        params: {
          date: props.selectedDate
        }
      }
    )
    console.log(data)

    if (data?.success) {
      bookingRideData.value = data.data || []
    } else {
      toast.error(data?.message || "Failed to load dashboard data.")
    }
  } catch (err) {
    console.error("Fetch Booking by date failed:", err)
    toast.error("Failed to load booking by date.")
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBookingByDate();
});
</script>

<template>
  <ModalComponent v-model="model" size="3xl" @close="model = false">
    <!-- ================= HEADER ================= -->
    <template #header>
      <h2 class="text-xl font-semibold">
         Bookings for {{ formattedDate }}
      </h2>
    </template>

    <!-- ================= CONTENT ================= -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <section class="flex flex-col xl:flex-row items-start">
        <div class="flex-1 space-y-6 px-2 sm:px-0">

          <!-- ================= SKELETON LOADER ================= -->
          <template v-if="loading">
            <div
              v-for="i in 2"
              :key="i"
              class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6 p-4 animate-pulse"
            >
              <div class="flex justify-between mb-4">
                <div class="h-4 w-40 bg-gray-200 rounded"></div>
                <div class="h-4 w-24 bg-gray-200 rounded"></div>
              </div>

              <div class="space-y-3">
                <div class="h-3 w-3/4 bg-gray-200 rounded"></div>
                <div class="h-3 w-2/3 bg-gray-200 rounded"></div>
              </div>

              <div class="flex justify-between mt-4">
                <div class="h-4 w-28 bg-gray-200 rounded"></div>
                <div class="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </template>

          <!-- ================= BOOKINGS LIST ================= -->
          <template v-else>
            <div
              v-for="ride in bookingRideData"
              :key="ride.id"
              class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6"
            >
              <!-- HEADER -->
              <div
                class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b p-3"
              >
                <div class="flex items-center gap-2 text-sm text-[#17171A]">
                  <img src="../../assets/icons/dashboard/date.svg" class="h-3" />
                  <span>{{ ride.pickup_date }}</span>

                  <img src="../../assets/icons/dashboard/time.svg" class="h-3" />
                  <span>{{ ride.pickup_time }}</span>

                  <span class="text-xs text-[#909090] ml-2">
                    ID: #{{ ride.id }}
                  </span>
                </div>

                <span
                  class="px-4 py-1 rounded-full text-xs text-white"
                  :style="{ backgroundColor: ride.booking_status_color }"
                >
                  {{ ride.booking_status_name }}
                </span>
              </div>

              <!-- ROUTE -->
              <div class="flex gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2">
                <img
                  src="../../assets/icons/dashboard/location-line.svg"
                  class="h-10 sm:h-12 pt-1"
                />

                <div class="flex flex-col space-y-3">
                  <div class="flex items-center gap-2">
                    <img src="../../assets/icons/dashboard/location.svg" class="h-4" />
                    <span class="text-xs sm:text-sm">
                      {{ ride.pickup_location }}
                    </span>
                  </div>

                  <div class="flex items-center gap-2">
                    <img src="../../assets/icons/dashboard/airport.svg" class="h-4" />
                    <span class="text-xs sm:text-sm">
                      {{ ride.drop_location }}
                    </span>
                  </div>
                </div>

                <div
                  class="ml-auto border border-[#329EE7] whitespace-nowrap px-2 sm:px-6 rounded-full text-[#329EE7] text-[10px] sm:text-[12px]"
                >
                  {{ ride.travel_type === "1" ? "One Way" : "Two Way" }}
                </div>
              </div>

              <!-- STATS -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3">
                <div
                  class="flex items-center sm:w-[65%] gap-3 border border-[#D8D8D8] rounded-lg py-1 px-3 text-xs text-[#17171A]"
                >
                  <div class="flex items-center gap-1">
                    <img src="../../assets/icons/dashboard/distance.svg" class="h-3" />
                    <span>{{ ride.total_distance }}</span>
                  </div>

                  <div class="flex items-center gap-1">
                    <img src="../../assets/icons/dashboard/mini-clock.svg" class="h-3" />
                    <span>{{ ride.total_time }}</span>
                  </div>
                </div>

                <div class="flex flex-col items-end gap-2">
                  <div class="flex items-center gap-2">
                    <img src="../../assets/icons/rides/total-fare.svg" class="h-4" />
                    <p class="text-sm text-[#000]">Total Fare:</p>
                    <p class="text-sm font-medium text-[#000]">
                      ${{ ride.payments_total }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- EMPTY STATE -->
            <div
              v-if="!bookingRideData.length"
              class="text-center text-sm text-[#909090] py-10"
            >
              No rides available for the selected date.
            </div>
          </template>

        </div>
      </section>
    </div>
  </ModalComponent>
</template>
