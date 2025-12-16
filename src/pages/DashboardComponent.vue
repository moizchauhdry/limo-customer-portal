<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "@/axios";
import { useToast } from "vue-toastification";
import RideDistanceBar from "@/components/RideDistanceBar.vue";
import Form from 'vform'
import DotsLoading from "@/components/DotsLoading.vue";

const scheduledDates = ref(["2025-12-14", "2025-12-17", "2025-12-31"]);
const completedDates = ref(["2025-12-21", "2025-12-25"]);

const toast = useToast();
const dashboardStats = ref({
  total_bookings_count: 0,
  total_fare: 0,
  cancelled_bookings_count: 0,
});
const dashboardRideData = ref({});

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
]);
const loading = ref(true);
const statsLoading = ref(true);
const dateFilter = ref("");
const ratingForm = reactive(
  new Form({
    rating_label: "",
  })
);

/*  map label → icon path  */
const iconMap = {
  Excellent: new URL("../assets/icons/dashboard/excellent.svg", import.meta.url)
    .href,
  Good: new URL("../assets/icons/dashboard/good.svg", import.meta.url).href,
  Average: new URL("../assets/icons/dashboard/average.svg", import.meta.url)
    .href,
  Bad: new URL("../assets/icons/dashboard/bad.svg", import.meta.url).href,
};
const getIcon = (label) => iconMap[label];

/*  submit rating  */
async function submitRating(label) {
  try {
    ratingForm.rating_label = label.toLowerCase();
    const { data } = await ratingForm.post("/customer/bookings/reviews/create");

    if (data?.success == true) {
      toast.success("Thank you for your feedback!");
      fetchDashboardRideData();
    } else {
      toast.error(data?.message || "Failed to submit rating. Please try again.");
    }
  } catch (e) {
    console.error("Rating submission error:", e);
    toast.error("Failed to submit rating. Please try again.");
  }
}

const fetchDashboardRideData = async () => {
  loading.value = true;
  try {
    const { data } = await axios.get("/customer/dashboard-ride-data");
    if (data?.success) {
      dashboardRideData.value = data.data;
    } else {
      toast.error(data?.message || "Failed to load dashboard data.");
    }
  } catch (err) {
    console.error("Dashboard fetch error:", err);
    toast.error("Failed to load dashboard data.");
  } finally {
    loading.value = false;
  }
};

const fetchDashboardStats = async () => {
  statsLoading.value = true;
  try {
    const { data } = await axios.get("/customer/dashboard-stats", {
      params: {
        search_date_key: dateFilter.value,
      },
    });

    if (data?.success) {
      dashboardStats.value = data.data;
    } else {
      toast.error(data?.message || "Failed to load dashboard stats.");
    }
  } catch (err) {
    console.error("Dashboard fetch error:", err);
    toast.error("Failed to load dashboard stats.");
  } finally {
    statsLoading.value = false;
  }
};
onMounted(() => {
  fetchDashboardStats();
  fetchDashboardRideData();
});
// Convert status ID → text
const getStatus = (statusId) => {
  switch (statusId) {
    case 1:
      return "Pending";
    case 2:
      return "Confirmed";
  }
};

// Calendar attributes
const attributes = ref([
  {
    key: "scheduled",
    dates: scheduledDates.value,
    dot: {
      color: "#F4B400", // yellow
    },
    highlight: {
      backgroundColor: "#F4B400",
      borderRadius: "50%",
      padding: "6px",
    },
  },
  {
    key: "completed",
    dates: completedDates.value,
    dot: {
      color: "#0FB14B", // green
    },
    highlight: {
      backgroundColor: "#0FB14B",
      borderRadius: "50%",
      padding: "6px",
    },
  },
]);
</script>

<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="max-w-7xl mx-auto container">
      <!-- WRAPPER: Two vertical columns -->
      <section class="flex flex-col xl:flex-row gap-6 items-start">
        <!-- LEFT COLUMN -->
        <div class="space-y-6 flex-1 w-ful sm:ml-4">
          <!-- STAT CARDS -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 sm:px-0">
            <!-- Total Trips -->
            <div class="bg-[#369FFF] p-4 rounded-xl shadow-lg text-white">
              <div class="flex justify-between items-center">
                <h2 class="text-md font-semibold">Total trip</h2>
                <img src="../assets/icons/dashboard/trips.svg" class="h-5" />
              </div>
              <DotsLoading v-if="statsLoading" class="mt-4" />
              <p v-else class="text-3xl font-bold mt-1">
                {{ dashboardStats?.total_bookings_count }}
              </p>
              <!-- <p class="mt-2">+5% from last month</p> -->
            </div>

            <!-- Total Fare -->
            <div class="bg-[#8AC53E] p-4 rounded-xl shadow-lg text-white">
              <div class="flex justify-between items-center">
                <h2 class="text-md font-semibold">Total Fare</h2>
                <img src="../assets/icons/dashboard/fare.svg" class="h-5" />
              </div>
              <DotsLoading v-if="statsLoading" class="mt-4 mb-3" />
              <p v-else class="text-3xl font-bold mt-1">
                ${{ dashboardStats?.total_fare }}
              </p>
              <select
                class="bg-[#8AC53E] text-white border border-white rounded-md mt-2 py-0 w-36 appearance-none outline-none focus:border-white focus:outline-none focus:ring-0"
                v-model="dateFilter" @change="fetchDashboardStats">
                <option v-for="dateFilter in dateFilterOptions" :key="dateFilter?.value" :value="dateFilter?.value">{{
                  dateFilter?.label }}</option>
              </select>
            </div>

            <!-- Cancel Trips -->
            <div class="bg-[#FF933A] p-4 rounded-xl shadow-lg text-white">
              <div class="flex justify-between items-center">
                <h2 class="text-md font-semibold">Cancel Trips</h2>
                <img src="../assets/icons/dashboard/cancel.svg" class="h-6" />
              </div>
              <DotsLoading v-if="statsLoading" class="mt-4" />
              <p v-else class="text-3xl font-bold mt-1">
                {{ dashboardStats.cancelled_bookings_count }}
              </p>
              <!-- <p class="mt-2">From last month</p> -->
            </div>
          </div>

          <!-- NEXT RIDE PANEL -->
          <p class="text-[#414141] font-poppins text-2xl px-5 sm:px-0">
            Your next ride
          </p>

          <!-- RIDE-DETAILS CARD -->
          <div class="px-5 sm:px-0">
            <div class="bg-white p-6 rounded-xl border border-[#DBDBDB] shadow space-y-4">
              <!-- header -->
              <div class="flex items-center justify-between">
                <h3 class="text-lg text-[#626262]">Ride Details</h3>
                <div
                  class="flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-2 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8]">
                  <img src="../assets/icons/dashboard/date.svg" class="h-3" alt="date" />
                  <!-- <span> Oct 17, 2025</span> -->
                  <span>{{ dashboardRideData.next_booking?.pickup_date }}</span>

                  <img src="../assets/icons/dashboard/time.svg" class="h-3" alt="date" />
                  <!-- <span> Oct 17, 2025</span> -->
                  <span>{{ dashboardRideData.next_booking?.pickup_time }}</span>
                </div>
              </div>

              <!-- top row (route + date) -->
              <div class="flex gap-4 items-start text-sm text-[#414141]">
                <!-- Vertical Route Icon -->
                <div class="pt-1">
                  <img src="../assets/icons/dashboard/location-line.svg" class="h-14" alt="Route Icon" />
                </div>

                <!-- Your Original Route Text -->
                <div class="flex flex-col space-y-6 justify-between">
                  <div class="flex items-center gap-2">
                    <img src="../assets/icons/dashboard/location.svg" class="h-4" alt="Start" />
                    <!-- <span>LaGuardia Airport (LGA), East USA</span> -->
                    <span>{{
                      dashboardRideData.next_booking?.pickup_location
                    }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <img src="../assets/icons/dashboard/airport.svg" class="h-4" alt="End" />
                    <!-- <span>JFK Airport</span> -->
                    <span>{{ dashboardRideData.next_booking?.drop_location }}</span>
                  </div>
                </div>
              </div>

              <!-- Stats Row -->
              <div class="grid grid-cols-3 gap-4 items-center text-sm text-[#414141]">
                <!-- Date & Time -->
                <div
                  class="flex items-center mx-auto gap-1 border border-[#D8D8D8] rounded-lg py-1 px-2 text-xs text-[#17171A]">
                  <img src="../assets/icons/dashboard/distance.svg" class="h-3" alt="Date" />
                  <!-- <span>Oct 17, 2025</span> -->
                  <span>{{ dashboardRideData.next_booking?.total_distance }}</span>

                  <img src="../assets/icons/dashboard/mini-clock.svg" class="h-3" alt="Time" />
                  <!-- <span>0h 17m</span> -->
                  <span>{{ dashboardRideData.next_booking?.total_time }}</span>
                </div>

                <!-- Total Fare -->
                <div class="text-center ml-auto flex flex-row gap-2 justify-center items-center">
                  <p class="font-medium text-md text-[#000000]">Total Fare</p>

                  <!-- Icon in the middle -->
                  <img src="../assets/icons/dashboard/small-fare.svg" class="h-8 w-8" alt="Arrow" />
                  <p class="text-md font-bold text-[#000000]">
                    ${{ dashboardRideData.next_booking?.payments_total }}
                  </p>
                </div>

                <!-- Status Badge -->
                <div
                  class="border w-[65%] ml-auto border-[#D8D8D8] rounded-lg py-1.5 text-xs font-semibold text-[#151515] text-center shadow-sm">
                  <!-- <p>Confirmed</p> -->
                  <p>{{ dashboardRideData.next_booking?.booking_status?.name }}</p>
                </div>
              </div>

              <!-- driver block -->
              <div class="border-t border-dashed border-[#B4B4B4] pt-4 grid grid-cols-1 gap-4">
                <div v-for="driverBooking in dashboardRideData?.next_booking
                  ?.driver_bookings || []" :key="driverBooking?.id"
                  class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <!-- Driver Image -->
                  <img src="../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full object-cover"
                    alt="driver" />

                  <!-- Driver Info -->
                  <div class="text-sm text-[#414141]">
                    <p class="font-semibold">
                      {{ driverBooking?.driver?.name || "No Driver Assigned" }}
                    </p>
                    <p>
                      Car:
                      {{ dashboardRideData?.next_booking?.vehicle?.name }} Plate #
                      00123
                    </p>
                  </div>

                  <!-- Call Button -->
                  <button
                    class="bg-[#0072EF] text-sm text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                    <img src="../assets/icons/dashboard/call.svg" class="h-4" alt="phone" />
                    Call Driver
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- TRIP HISTORY TABLE -->

          <div class="bg-white rounded-xl shadow-lg border border-[#DBDBDB]">
            <h3 class="text-lg ml-2 pt-2 font-regular text-[#626262] mb-2">
              Trip History
            </h3>
            <div class="overflow-x-auto w-full">
              <table class="w-full text-sm text-left text-[#414141]">
                <thead class="text-[#3B3B3B] border-b border-t border-[#E0E0E0]">
                  <tr>
                    <th class="px-4 py-3 font-normal">Trip ID</th>
                    <th class="px-4 py-3 font-normal">Date</th>
                    <th class="px-4 py-3 font-normal">Destination</th>
                    <th class="px-4 py-3 font-normal">Fare</th>
                    <th class="px-4 py-3 font-normal">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="trip in dashboardRideData?.booking_history" :key="trip?.id">
                    <!-- Trip ID -->
                    <td class="px-4 py-3">TR:{{ trip?.id }}</td>

                    <!-- Date -->
                    <td class="px-4 py-3">
                      {{ trip?.pickup_date }}
                    </td>

                    <!-- Destination -->
                    <td class="px-4 py-3">
                      {{ trip?.drop_location || "N/A" }}
                    </td>

                    <!-- Fare -->
                    <td class="px-4 py-3">${{ trip?.payments_total }}</td>

                    <!-- Status -->
                    <td class="px-4 py-3">
                      <span class="inline-block px-3 py-1 rounded-lg text-white text-xs" :class="{
                        'bg-[#0FB14B]': trip.booking_status_id === 2, // Complete
                        'bg-[#FF4A54] px-5': trip.booking_status_id === 1, //Pending
                      }">
                        {{ getStatus(trip.booking_status_id) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="w-[132%] sm:w-full ml-2 sm:ml-0 xl:w-[325px] space-y-6">
          <!-- CALENDAR -->
          <div class="bg-white p-4 rounded-xl border border-[#DBDBDB]">
            <!-- Calendar Header -->
            <div class="flex justify-between items-center text-sm text-[#414141] pb-3 border-b border-[#E0E0E0]">
              <div class="flex gap-2">
                <button class="px-2 py-1 bg-[#F5F5F5] text-[#000000] text-sm rounded-md hover:bg-[#EAEAEA]">
                  Today
                </button>
                <button class="px-2 py-1 bg-[#F5F5F5] text-[#000000] text-sm rounded-md hover:bg-[#EAEAEA]">
                  Last 8 Days
                </button>
                <button
                  class="px-3 py-1 bg-[#F5F5F5] text-[#000000] text-sm rounded-md hover:bg-[#EAEAEA] whitespace-nowrap">
                  Last Month
                </button>
              </div>
              <!-- Dropdown Arrow -->

              <img src="../assets/icons/dashboard/calender-arrow.svg" class="h-2" alt="Dropdown Arrow" />
            </div>

            <!-- Calendar Grid -->
            <VCalendar :attributes="attributes" margin="auto" borderless color="yellow" />

            <!-- Calendar Footer Legend -->
            <div
              class="flex justify-center items-center gap-6 border-t border-[#E0E0E0] mt-4 pt-3 text-sm text-[#414141]">
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span class="whitespace-nowrap">Rides Scheduled</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <span class="whitespace-nowrap">Rides Completed</span>
              </div>
            </div>
          </div>

          <!-- DISTANCE GRAPH -->
          <div class="rounded-xl border">
            <!-- Graph Image -->
            <div class="rounded-lg overflow-hidden flex items-center justify-center">
              <RideDistanceBar class="w-full h-48" />
            </div>
          </div>

          <!-- RIDE RATING -->
          <div v-if="dashboardRideData.is_last_booking_reviewed == false"
            class="bg-[#F8F8F8] p-6 rounded-xl border border-[#DBDBDB]">
            <p class="font-semibold text-lg text-[#626262]">
              How was your last ride?
            </p>
            <p class="text-sm text-[#000000] mb-4">Review Rating:</p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button v-for="item in ['Excellent', 'Good', 'Average', 'Bad']" :key="item" :disabled="ratingForm.busy"
                class="group flex flex-col items-center py-4 rounded-lg outline-none transition-all duration-300 ease-out"
                @click="submitRating(item)">
                <img :src="getIcon(item)"
                  class="h-10 mb-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  :alt="item" />
                <DotsLoading v-if="ratingForm.busy" />
                <span v-else class="text-black font-medium text-sm">{{ item }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<style>
.vc-highlight {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color: white !important;
  font-size: 12px !important;
}

.vc-day-content {
  margin: 4px !important;
  /* space between numbers */
  padding: 8px !important;
  /* better touch area */

}

/* Center the calendar body */
.vc-pane-container,
.vc-weeks,
.vc-weeks>div {

  margin-left: 5px !important;
}
</style>
