<script setup>
import axios from "@/axios";
import { onMounted, reactive, ref } from "vue";

const appProjectUrl = (typeof process !== "undefined" && process.env && process.env.VUE_APP_PROJECT_URL) || "https://polliwog-internal-fawn.ngrok-free.app";
const createRideDataLoading = ref(false);
const createRideData = ref({});
const placeholder = new URL('../assets/images/vehicle-placeholder.jpg', import.meta.url).href;

const form = reactive({
  service_type: 1,
  hours: "",

  pickup_date: "",
  pickup_time: "",
  pickup_location: "",
  waypoints: [],
  drop_location: "",

  passenger_name: "",
  passenger_email: "",
  passenger_phone: "",

  service: "",
  travel_type: 1,
  no_of_luggage: 0,
  no_of_passengers: 0,

  vehicle_id: "",

  flight_no: "",
  comments: "",
});

const getCreateRideData = async () => {
  try {
    createRideDataLoading.value = true;
    const { data } = await axios.get("/customer/bookings/create-data");

    if (data.success == true) {
      createRideData.value = data?.data || {};
      console.log('createRideData.value :', createRideData.value);
    }
  } catch (err) {
    console.error("Create Ride Data Fetching Error:", err);
  } finally {
    createRideDataLoading.value = false;
  }
};

const carousel = ref(null);
const scrollAmount = 280; // width of card + gap

const slideNext = () => {
  carousel.value.scrollLeft += scrollAmount;
};

const slidePrev = () => {
  carousel.value.scrollLeft -= scrollAmount;
};

onMounted(() => {
  getCreateRideData();
});
</script>
<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="max-w-7xl mx-auto container">
      <!-- WRAPPER: Two vertical columns -->
      <section class="flex flex-col xl:flex-row gap-6 items-start">
        <!-- MAIN WRAPPER -->
        <div class="w-full max-w-2xl mx-auto p-4 space-y-6">
          <!-- ===================== TOP TABS ===================== -->
          <div class="grid grid-cols-2 gap-3">
            <!-- Distance -->
            <label :for="`service-type-${serviceType?.id}`"
              class="border border-[#CECECE] p-3 rounded-xl flex justify-between items-center cursor-pointer"
              :class="form.service_type == serviceType?.id ? 'bg-[#369FFF]' : 'bg-white'"
              v-for="serviceType in createRideData?.service_types || []" :key="serviceType?.id">
              <h2 class="text-md font-semibold first-letter:uppercase"
                :class="form.service_type == serviceType?.id ? 'text-[#FFFFFF]' : 'text-[#838383]'">{{ serviceType?.name
                }}</h2>
              <input :id="`service-type-${serviceType?.id}`" type="radio"
                class="w-5 h-5 text-blue-500 border border-[#369FFF] rounded-full cursor-pointer"
                v-model="form.service_type" :value="serviceType?.id" />
            </label>
          </div>

          <!-- ===================== PICK UP & DROP OFF ===================== -->
          <div class="border-[#D8D8D8] space-y-5">
            <h3 class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Pick up & Drop off
            </h3>

            <!-- Date & Time Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Date -->
              <div class="flex items-center gap-3 border-b border-[#D8D8D8] pb-2">
                <!-- <img src="../assets/icons/distance/date.svg" class="h-5" /> -->
                <input type="date" class="w-full outline-none text-[#5A5A5A]" v-model="form.pickup_date" />
              </div>

              <!-- Time -->
              <div class="flex items-center gap-3 border-b border-[#D8D8D8] pb-2">
                <!-- <img src="../assets/icons/distance/time.svg" class="h-5" /> -->
                <input type="time" class="w-full outline-none text-[#5A5A5A]" v-model="form.pickup_time" />
              </div>
            </div>

            <!-- Add Stops -->
            <button class="flex ml-auto items-center gap-2 text-xs">
              <p class="bg-[#369FFF] px-3 rounded-md text-white">+</p>
              Add Stops
            </button>
            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <label> Pick up </label>
              <input type="text" placeholder="Enter Pick up location"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
                v-model="form.pickup_location" />
            </div>

            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <label> Drop off </label>
              <input type="text" placeholder="Enter Drop off location"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
                v-model="form.drop_location" />
            </div>
          </div>

          <!-- ===================== PASSENGER INFO ===================== -->
          <div class="space-y-5">
            <h3 class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Passenger Info
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex flex-col gap-1">
                <label> Name </label>
                <input type="text" placeholder="Enter passenger name"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_name" />
              </div>
              <div class="flex flex-col gap-1">
                <label> Email </label>
                <input type="Email" placeholder="Enter passenger email"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_email" />
              </div>
              <div class="flex flex-col gap-1">
                <label> Phone </label>
                <input type="number" placeholder="Enter passenger phone"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_phone" />
              </div>
            </div>
          </div>

          <!-- ===================== RIDE INFO ===================== -->
          <div class="space-y-5">
            <!-- Title -->
            <h3 class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Ride Info
            </h3>

            <!-- Service + Service Type -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Service Dropdown -->
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[#414141]">Service</label>
                <select
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm w-full text-[#5A5A5A] appearance-none"
                  v-model="form.service">
                  <option value="">Select Service</option>
                  <option v-for="service in createRideData?.services || []" :key="service?.id" :value="service?.id">{{
                    service?.name }}</option>
                </select>
              </div>

              <!-- Service Type Toggle -->
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[#414141]">Travel Type</label>
                <div class="flex items-center gap-2">
                  <!-- One Way Selected -->
                  <button
                    class="flex items-center justify-between gap-2 w-full px-4 py-2 rounded-md border border-[#369FFF] text-sm capitalize"
                    :class="form.travel_type == travelType?.id ? 'bg-[#369FFF] text-white' : 'text-[#369FFF]'"
                    v-for="travelType in createRideData?.travel_types || []" :key="travelType?.id"
                    :value="travelType?.id" @click="form.travel_type = travelType?.id">
                    {{ travelType?.name }}
                    <span class="border-2 border-white rounded-full w-3 h-3"
                      :class="form.travel_type == travelType?.id ? 'bg-white' : 'bg-[#369FFF]'"></span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Luggage + Passenger -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Luggage -->
              <div>
                <p class="text-[#414141] text-sm mb-2">No. of Luggage</p>
                <div class="flex items-center justify-between px-1 rounded-md border border-[#878787] gap-2">
                  <button class="px-2 bg-[#D9D9D9] rounded-md"
                    @click="form.no_of_luggage > 0 ? form.no_of_luggage-- : form.no_of_luggage = 0">-</button>
                  <div class="py-1 text-[#3B3B3B] font-bold rounded-md text-sm">
                    {{ form.no_of_luggage }}
                  </div>
                  <button class="px-2 bg-[#D9D9D9] rounded-md" @click="form.no_of_luggage++">+</button>
                </div>
              </div>

              <!-- Passenger -->
              <div>
                <p class="text-[#414141] text-sm mb-2">No. of Passenger</p>
                <div class="flex items-center justify-between px-1 rounded-md border border-[#878787] gap-2">
                  <button class="px-2 bg-[#D9D9D9] rounded-md"
                    @click="form.no_of_passengers > 0 ? form.no_of_passengers-- : form.no_of_passengers = 0">-</button>
                  <div class="py-1 text-[#3B3B3B] font-bold rounded-md text-sm">
                    {{ form.no_of_passengers }}
                  </div>
                  <button class="px-2 bg-[#D9D9D9] rounded-md" @click="form.no_of_passengers++">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- ===================== SELECT FLEET ===================== -->
          <div class="space-y-5">
            <h3 class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Select Fleet
            </h3>

            <!-- wrapper keeps arrows vertically centred -->
            <div class="relative flex items-center gap-3 px-6">
              <!-- left arrow -->
              <button
                class="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D9] border border-[#E0E0E0] rounded-full p-2 shadow hover:shadow-md"
                @click="slidePrev">
                <img src="../assets/icons/distance/scroller-left.svg" class="h-2 w-2" alt="prev" />
              </button>

              <!-- cards container -->
              <div class="flex gap-4 overflow-x-hidden scroll-smooth" ref="carousel">
                <!-- CAR 1 -->
                <div class="bg-white border border-[#E0E0E0] rounded-xl p-2 shadow flex flex-col min-w-[250px]"
                  v-for="vehicle in createRideData?.vehicles || []" :key="vehicle?.id">
                  <p class="text-md font-semibold">{{ vehicle?.name }}</p>
                  <p class="text-xs text-[#7A7A7A] mb-2">
                    Cadillac Escalade, Mercedes S-Class, or similar.
                  </p>
                  <img :src="vehicle?.image ? `${appProjectUrl}/${vehicle?.image}` : placeholder"
                    class="w-full h-24 object-contain" />
                  <div class="flex items-center gap-4 mt-auto text-xs text-[#4D4D4D]">
                    <span class="flex items-center gap-1">
                      <img src="../assets/icons/distance/people.svg" class="h-4" />
                      2–6
                    </span>
                    <span class="flex items-center gap-1">
                      <img src="../assets/icons/distance/baggage.svg" class="h-4" />
                      2–5
                    </span>
                  </div>
                </div>
              </div>

              <!-- right arrow -->
              <button
                class="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D9] border border-[#E0E0E0] rounded-full p-2 shadow hover:shadow-md"
                @click="slideNext">
                <img src="../assets/icons/distance/scroller-right.svg" class="h-2 w-2" alt="next" />
              </button>
            </div>
          </div>

          <!-- ===================== CONTINUE BUTTON ===================== -->
          <button class="w-full bg-[#369FFF] text-white py-3 rounded-lg text-lg font-medium">
            Continue
          </button>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="w-full sm:w-full xl:w-[325px] space-y-6">
          <div class="border h-[850px] relative">
            <img src="../assets/images/map.svg" alt="map" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
