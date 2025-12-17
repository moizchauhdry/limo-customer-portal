<script setup>
// For prevent to ESLint Error for google
/* global google */

import axios from "@/axios";
import { onMounted, reactive, ref, nextTick, onBeforeUnmount } from "vue";
import { getHoursOptions } from "@/utils";
import Form from 'vform'
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import DotsLoading from "@/components/DotsLoading.vue";

const router = useRouter();
const vueRoute = useRoute();
const toast = useToast();

const appProjectUrl = (typeof process !== "undefined" && process.env && process.env.VUE_APP_PROJECT_URL) || "https://polliwog-internal-fawn.ngrok-free.app";
const createRideDataLoading = ref(false);
const createRideData = ref({});
const rideId = ref(vueRoute?.params?.id);
const placeholder = new URL('../assets/images/vehicle-placeholder.jpg', import.meta.url).href;
const authCustomer = JSON.parse(localStorage.getItem("customer") || null);

const map = ref(null);
const directionsService = ref(null);
const directionsRenderer = ref(null);
const originPlaceId = ref("");
const destinationPlaceId = ref("");
const distance = ref("");
const duration = ref("");

const waypointInputs = ref([]); // Vue refs to waypoint input DOM
const hoursOptions = getHoursOptions();

const carousel = ref(null);
const scrollAmount = ref(520);

const form = reactive(
  new Form({
    booking_id: null,
    service_type: 1,
    hours: "",

    pickup_date: "",
    pickup_time: "",
    pickup_location: "",
    waypoints: [],
    drop_location: "",

    passenger_name: authCustomer?.name || "",
    passenger_email: authCustomer?.email || "",
    passenger_phone: authCustomer?.phone || "",

    service: "",
    travel_type: 1,
    no_of_luggage: 0,
    no_of_passengers: 0,

    vehicle_id: "",
  })
);

const getCreateRideData = async () => {
  try {
    createRideDataLoading.value = true;
    const { data } = await axios.get("/customer/bookings/create-data");

    if (data.success == true) {
      createRideData.value = data?.data || {};
      initMap();

      if (rideId.value) {
        await fetchBookingDetails();
      }
    }
  } catch (err) {
    console.error("Create Ride Data Fetching Error:", err);
  } finally {
    createRideDataLoading.value = false;
  }
};

const fetchBookingDetails = async () => {
  try {
    const { data } = await axios.get(`/customer/bookings/${rideId.value}/view`);
    const bookingData = data?.data;

    form.booking_id = bookingData?.id || null;
    form.service_type = bookingData?.service_type || 1;
    form.hours = bookingData?.duration_in_hours || "";
    form.pickup_date = bookingData?.pickup_date || "";
    form.pickup_time = bookingData?.pickup_time || "";
    form.pickup_location = bookingData?.pickup_location || "";
    form.waypoints = bookingData?.waypoints || [];
    form.drop_location = bookingData?.drop_location || "";
    form.passenger_name = bookingData?.passenger_name || "";
    form.passenger_email = bookingData?.passenger_email || "";
    form.passenger_phone = bookingData?.passenger_phone || "";
    form.service = bookingData?.service_id || "";
    form.travel_type = bookingData?.travel_type || 1;
    form.no_of_luggage = bookingData?.no_of_luggage || 0;
    form.no_of_passengers = bookingData?.no_of_passengers || 0;
    form.vehicle_id = bookingData?.vehicle_id || "";

    // WAIT FOR INPUTS TO RENDER
    await nextTick();

    originPlaceId.value = await getPlaceIdFromAddress(form.pickup_location);
    destinationPlaceId.value = await getPlaceIdFromAddress(form.drop_location);

    // Waypoints
    for (let i = 0; i < waypointInputs.value.length; i++) {
      const input = waypointInputs.value[i];
      const address = form.waypoints[i];

      const placeId = await getPlaceIdFromAddress(address);
      if (placeId && input) {
        input.dataset.placeId = placeId;
      }
    }

    route();
  } catch (error) {
    console.error("Failed to load booking details:", error);
  }
};

const handleOnImageError = async (event) => {
  event.target.onerror = null;
  event.target.src = placeholder
};

// Load Google Maps
const loadGoogleMaps = () => {
  return new Promise(resolve => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${createRideData.value?.google_map_api_key}&libraries=places`;
    script.async = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

// Initialize Map
const initMap = async () => {
  await loadGoogleMaps();

  map.value = new google.maps.Map(document.getElementById("vue-map"), {
    mapTypeControl: false,
    center: { lat: 40.7128, lng: -73.935242 },
    zoom: 10,
  });

  directionsService.value = new google.maps.DirectionsService();
  directionsRenderer.value = new google.maps.DirectionsRenderer();
  directionsRenderer.value.setMap(map.value);

  setupAutocomplete();
};

const setupAutocomplete = () => {
  const originInput = document.getElementById("origin-input");
  const destinationInput = document.getElementById("destination-input");

  const originAuto = new google.maps.places.Autocomplete(originInput, { fields: ["place_id", "formatted_address", "name"] });
  const destAuto = new google.maps.places.Autocomplete(destinationInput, { fields: ["place_id", "formatted_address", "name"] });

  originAuto.addListener("place_changed", () => {

    const place = originAuto.getPlace();
    if (place.place_id) {
      originPlaceId.value = place.place_id;
      route();

      form.pickup_location = originInput.value;
    }
  });

  destAuto.addListener("place_changed", () => {
    const place = destAuto.getPlace();
    if (place.place_id) {
      destinationPlaceId.value = place.place_id;
      route();

      form.drop_location = destinationInput.value;
    }
  });
};

// Setup Autocomplete for each waypoint input added by Vue
const setupWaypointAutocomplete = async () => {
  await nextTick();

  waypointInputs.value.forEach((input) => {
    if (!input) return;

    const auto = new google.maps.places.Autocomplete(input, { fields: ["place_id"] });

    auto.addListener("place_changed", () => {
      const place = auto.getPlace();
      if (!place.place_id) return;

      input.dataset.placeId = place.place_id;

      const index = Array.from(waypointInputs.value).indexOf(input);
      if (index !== -1) {
        form.waypoints[index] = input.value;
      }

      route();
    });
  });
};

// Computes Route
const route = () => {
  if (!originPlaceId.value || !destinationPlaceId.value) return;

  // Format waypoints
  const waypoints = waypointInputs.value
    .map(input => input?.dataset.placeId)
    .filter(Boolean)
    .map(pid => ({ location: { placeId: pid }, stopover: true }));

  directionsService.value.route(
    {
      origin: { placeId: originPlaceId.value },
      destination: { placeId: destinationPlaceId.value },
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.value.setDirections(response);

        let totalDistanceMeters = 0;
        let totalDuration = 0;

        response.routes[0].legs.forEach(leg => {
          totalDistanceMeters += leg.distance.value; // in meters
          totalDuration += leg.duration.value; // in seconds
        });

        // Convert meters to miles
        const totalDistanceMiles = (totalDistanceMeters * 0.000621371).toFixed(2);
        distance.value = `${totalDistanceMiles} mi`;

        // Duration in h:m format
        const hours = Math.floor(totalDuration / 3600);
        const minutes = Math.floor((totalDuration % 3600) / 60);
        duration.value = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
      }
    }
  );
};

const getPlaceIdFromAddress = (address) => {
  return new Promise((resolve) => {
    if (!address) return resolve(null);

    const service = new google.maps.places.PlacesService(map.value);

    service.findPlaceFromQuery(
      {
        query: address,
        fields: ["place_id"],
      },
      (results, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          results.length
        ) {
          resolve(results[0].place_id);
        } else {
          resolve(null);
        }
      }
    );
  });
};


const addWaypoint = async () => {
  form.waypoints.push("");
  setupWaypointAutocomplete();
};

const removeWaypoint = async (index) => {
  form.waypoints.splice(index, 1);
  await nextTick();
  setupWaypointAutocomplete();
  route();
};

const updateScrollAmount = () => {
  const width = window.innerWidth;

  // Mobile
  if (width <= 768) {
    scrollAmount.value = 260; // half of 520
  }
  // Desktop
  else {
    scrollAmount.value = 520;
  }
};

const slideNext = () => {
  carousel.value.scrollLeft += scrollAmount.value;
};

const slidePrev = () => {
  carousel.value.scrollLeft -= scrollAmount.value;
};

const createRide = async () => {
  try {
    const { data } = await form.post("/customer/bookings/create");

    if (data.success == true) {
      form.reset();
      toast.success(data?.message || "Ride Created Successfully!");
      router.push({ name: "rides" });
    } else {
      toast.error(data?.message || "Something went wrong! Please try again later.");
    }
  } catch (err) {
    console.error("Store Booking Error:", err);
    toast.error("Something went wrong! Please try again later.");
  }
};

onMounted(() => {
  getCreateRideData();

  updateScrollAmount();
  window.addEventListener("resize", updateScrollAmount);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScrollAmount);
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
        <div class="w-full max-w-2xl mx-auto p-4 space-y-2">

          <!-- TRAVEL TYPE -->
          <div class="grid grid-cols-12 gap-3">
            <button v-for="(travelType, index) in createRideData?.travel_types || []" :key="travelType?.id"
              class="flex items-center justify-center gap-2 w-full px-4 p-3 rounded-xl border border-[#369FFF] text-sm capitalize"
              :class="[
                form.travel_type == travelType?.id
                  ? 'bg-[#369FFF] text-white'
                  : 'text-[#369FFF]',
                index === 0 ? 'col-span-12 sm:col-span-7' : 'col-span-12 sm:col-span-5'
              ]" @click="form.travel_type = travelType?.id">
              {{ travelType?.name }}
            </button>
          </div>

          <!-- SERVICE TYPE -->
          <div class="grid grid-cols-12 gap-3">
            <label :for="`service-type-${serviceType?.id}`"
              class="border border-[#CECECE] p-3 rounded-xl flex justify-between items-center cursor-pointer" :class="[
                form.service_type == serviceType?.id
                  ? 'text-[#369FFF]'
                  : 'text-[#369FFF]',
                index === 0 ? 'col-span-12 sm:col-span-5' : 'col-span-12 sm:col-span-7'
              ]" v-for="(serviceType, index) in createRideData?.service_types || []" :key="serviceType?.id">
              <h2 class="text-md font-semibold first-letter:uppercase"
                :class="form.service_type == serviceType?.id ? 'text-[#369FFF]' : 'text-[#838383]'">{{ serviceType?.name
                }}</h2>
              <input :id="`service-type-${serviceType?.id}`" type="radio"
                class="w-5 h-5 text-blue-500 border border-[#369FFF] rounded-full cursor-pointer"
                v-model="form.service_type" :value="serviceType?.id" />
            </label>
          </div>

          <!-- ===================== PICK UP & DROP OFF ===================== -->
          <div class="border-[#D8D8D8] space-y-5 pt-3">
            <h3 class="text-lg border-b-[3px] border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Pick up & Drop off
            </h3>

            <!-- Date & Time Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Date -->
              <div>
                <div class="flex items-center gap-3 pb-2 relative">
                  <input type="date"
                    class="w-full border-0 border-b-2 border-[#D8D8D8] text-[#5A5A5A] text-center focus:ring-0"
                    v-model="form.pickup_date" />
                </div>
                <p v-if="form.errors.has('pickup_date')" class="text-red-500 text-xs">{{
                  form.errors.get('pickup_date') }}</p>
              </div>

              <!-- Time -->
              <div>
                <div class="flex items-center gap-3 pb-2">
                  <!-- <img src="../assets/icons/distance/time.svg" class="h-5" /> -->
                  <input type="time"
                    class="w-full border-0 border-b-2 border-[#D8D8D8] text-[#5A5A5A] text-center focus:ring-0"
                    v-model="form.pickup_time" />
                </div>
                <p v-if="form.errors.has('pickup_time')" class="text-red-500 text-xs">{{
                  form.errors.get('pickup_time') }}</p>
              </div>
            </div>

            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <div class="flex items-center justify-between">
                <label> Pick up </label>
                <button class="flex ml-auto items-center gap-2 text-xs" @click="addWaypoint">
                  <p class="bg-[#369FFF] px-3 rounded-md text-white">+</p>
                  Add Stops
                </button>
              </div>
              <input id="origin-input" type="text" placeholder="Enter Pick up location"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
                v-model="form.pickup_location" />
              <p v-if="form.errors.has('pickup_location')" class="text-red-500 text-xs">{{
                form.errors.get('pickup_location') }}</p>
            </div>

            <!-- Waypoints Inputs -->
            <div class="flex gap-1 w-full" v-for="(waypoint, index) in form.waypoints" :key="index">
              <input ref="waypointInputs" type="text" placeholder="Enter stop"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
                v-model="form.waypoints[index]" />

              <button class="flex ml-auto items-center gap-2 text-xs" @click="removeWaypoint(index)">
                <p class="bg-red-500 px-3 py-1 rounded-md text-white">-</p>
              </button>
            </div>

            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <label> Drop off </label>
              <input id="destination-input" type="text" placeholder="Enter Drop off location"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
                v-model="form.drop_location" />
              <p v-if="form.errors.has('drop_location')" class="text-red-500 text-xs">{{
                form.errors.get('drop_location') }}</p>
            </div>
          </div>

          <!-- ===================== PASSENGER INFO ===================== -->
          <div class="space-y-5 pt-4">
            <h3 class="text-lg border-b-[3px] border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Passenger Info
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex flex-col gap-1">
                <label> Name </label>
                <input type="text" placeholder="Enter passenger name"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_name" />
                <p v-if="form.errors.has('passenger_name')" class="text-red-500 text-xs">{{
                  form.errors.get('passenger_name') }}</p>
              </div>
              <div class="flex flex-col gap-1">
                <label> Email </label>
                <input type="Email" placeholder="Enter passenger email"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_email" />
                <p v-if="form.errors.has('passenger_email')" class="text-red-500 text-xs">{{
                  form.errors.get('passenger_email') }}</p>
              </div>
              <div class="flex flex-col gap-1">
                <label> Phone </label>
                <input type="text" placeholder="Enter passenger phone"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                  v-model="form.passenger_phone" />
                <p v-if="form.errors.has('passenger_phone')" class="text-red-500 text-xs">{{
                  form.errors.get('passenger_phone') }}</p>
              </div>
            </div>
          </div>

          <!-- ===================== RIDE INFO ===================== -->
          <div class="space-y-5 pt-4">
            <!-- Title -->
            <h3 class="text-lg border-b-[3px] border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
              Ride Info
            </h3>

            <!-- Service + Service Type -->
            <div class="flex flex-col sm:flex-row gap-1">

              <div class="flex flex-col gap-1 w-full">
                <label class="text-sm text-[#414141]">Service</label>
                <select
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm w-full text-[#5A5A5A] appearance-none"
                  v-model="form.service">
                  <option value="">Select Service</option>
                  <option v-for="service in createRideData?.services || []" :key="service?.id" :value="service?.id">{{
                    service?.name }}</option>
                </select>
                <p v-if="form.errors.has('service')" class="text-red-500 text-xs">{{ form.errors.get('service') }}</p>
              </div>

              <div class="w-full">
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

              <div class="w-full">
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

              <div v-if="form.service_type == 2" class="flex flex-col gap-1 w-full">
                <label class="text-sm text-[#414141]">Duration</label>
                <select
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm w-full text-[#5A5A5A] appearance-none"
                  v-model="form.hours">
                  <option value="">Select Duration</option>
                  <option v-for="duration in hoursOptions" :key="duration?.value" :value="duration?.value">{{
                    duration?.label }}</option>
                </select>
                <p v-if="form.errors.has('hours')" class="text-red-500 text-xs">{{ form.errors.get('hours') }}</p>
              </div>

            </div>
          </div>

          <!-- ===================== SELECT FLEET ===================== -->
          <div class="space-y-5 pt-4">
            <h3 class="text-lg border-b-[3px] border-b-[#369FFF] pb-2 text-[#414141] font-semibold">
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
                <div class="border rounded-xl p-2 shadow flex flex-col min-w-[250px] cursor-pointer"
                  :class="form.vehicle_id == vehicle?.id ? 'bg-[#d3ebff] border-[#369FFF]' : 'bg-white border-[#E0E0E0]'"
                  v-for="vehicle in createRideData?.vehicles || []" :key="vehicle?.id"
                  @click="form.vehicle_id = vehicle?.id">
                  <p class="text-md font-semibold">{{ vehicle?.name }}</p>
                  <p class="text-xs text-[#7A7A7A] mb-2">
                    Cadillac Escalade, Mercedes S-Class, or similar.
                  </p>
                  <img :src="vehicle?.image ? `${appProjectUrl}/${vehicle?.image}` : placeholder"
                    class="w-full h-24 object-contain" :onerror="handleOnImageError" />
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
            <p v-if="form.errors.has('vehicle_id')" class="text-red-500 text-xs">{{ form.errors.get('vehicle_id') }}
            </p>
          </div>

          <!-- ===================== CONTINUE BUTTON ===================== -->
          <button
            class="w-full bg-[#369FFF] text-white py-3 rounded-lg text-lg font-medium flex justify-center disabled:opacity-50"
            :disabled="form.busy || createRideDataLoading" @click="createRide">
            <div v-if="form.busy" class="h-6 flex items-center">
              <DotsLoading />
            </div>
            <span v-else>Continue</span>
          </button>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="w-full sm:w-full xl:w-[325px] space-y-6">
          <div id="vue-map" class="w-full h-[400px] mt-4 border rounded"></div>

          <!-- DISTANCE & TIME -->
          <div class="grid grid-cols-2 gap-4 mt-4">
            <input class="border p-2 rounded outline-none" readonly :value="distance" placeholder="Total Distance" />
            <input class="border p-2 rounded outline-none" readonly :value="duration" placeholder="Total Time" />
          </div>

          <!-- <div class="border h-[850px] relative">
            <img src="../assets/images/map.svg" alt="map" class="absolute inset-0 w-full h-full object-cover" />
          </div> -->
        </div>
      </section>
    </div>
  </main>
</template>
