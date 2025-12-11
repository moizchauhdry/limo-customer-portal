<script setup>
// For prevent to ESLint Error
/* global google */

import { onMounted, reactive, ref } from "vue";
import FloatInput from "./FloatInput.vue";
import FloatSelect from "./FloatSelect.vue";
import axios from "@/axios";
import Form from 'vform'
import DotsLoading from "@/components/DotsLoading.vue";
import { getHoursOptions } from "@/utils";

const storeBookingDataLoading = ref(false);
const storeBookingData = ref({});
const successAlert = ref(false);
const errorAlert = ref(false);
const errorMessage = ref("");

const hoursOptions = getHoursOptions();

const form = reactive(
  new Form({
    service_type: 1,
    hours: "",
    name: "",
    email: "",
    phone: "",
    pickup_date: "",
    pickup_time: "",
    pickup_location: "",
    drop_location: "",
    vehicle_id: "",
    service: "",
    travel_type: "",
    no_of_passengers: "",
    no_of_lugguage: "",
  })
);

const getStoreBookingData = async () => {
  try {
    storeBookingDataLoading.value = true;
    const { data } = await axios.get("/urban/booking/store-data");

    if (data.success == true) {
      storeBookingData.value = data?.data || {};
      loadGoogleMaps();
    }
  } catch (err) {
    console.error("Create Ride Data Fetching Error:", err);
  } finally {
    storeBookingDataLoading.value = false;
  }
};

const loadGoogleMaps = () => {
  return new Promise((resolve) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${storeBookingData.value?.google_map_api_key}&libraries=places`;
    script.async = true;

    script.onload = () => {
      resolve();
      setupAutocomplete();
    };

    document.head.appendChild(script);
  });
};


const setupAutocomplete = () => {
  const originInput = document.getElementById("origin-input");
  const destinationInput = document.getElementById("destination-input");

  const originAuto = new google.maps.places.Autocomplete(originInput, { fields: ["place_id"] });
  const destinationAuto = new google.maps.places.Autocomplete(destinationInput, { fields: ["place_id"] });

  originAuto.addListener("place_changed", () => {
    const place = originAuto.getPlace();
    if (place.place_id) {
      form.pickup_location = originInput.value;
    }
  });

  destinationAuto.addListener("place_changed", () => {
    const place = destinationAuto.getPlace();
    if (place.place_id) {
      form.drop_location = destinationInput.value;
    }
  });
};

const storeBooking = async () => {
  try {
    successAlert.value = false;
    errorAlert.value = false;
    const { data } = await form.post("/urban/booking/store");

    if (data.success == true) {
      form.reset();
      successAlert.value = true;
    } else {
      errorAlert.value = true;
      errorMessage.value = data?.message || "Something went wrong! Please try again later.";
    }
  } catch (err) {
    console.error("Store Booking Error:", err);
    errorAlert.value = true;
    errorMessage.value = "Something went wrong! Please try again later.";
  }
};

onMounted(() => {
  getStoreBookingData();
});
</script>

<template>
  <section class="bg-white shadow-xl p-6 rounded-xl max-w-xl sm:ml-auto sm:mt-[-26rem] z-10 relative sm:mr-[2rem]">
    <div v-if="storeBookingDataLoading" class="flex justify-center pb-6">
      <DotsLoading />
    </div>
    <div v-else class="flex gap-2 bg-white rounded-xl w-full border-2 border-[#111111] mb-6 justify-between">
      <button class="w-full px-6 py-2 font-semibold rounded-lg transition-colors text-lg capitalize"
        v-for="serviceType in storeBookingData?.service_types || []" :key="serviceType?.value"
        :class="form.service_type == serviceType?.value ? 'bg-black text-white' : 'bg-white text-black'"
        @click="form.service_type = serviceType.value">
        {{ serviceType?.label }}
      </button>
    </div>

    <form class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FloatInput v-model="form.name" label="Name" placeholder="Jack" id="name" :error="form.errors.get('name')" />
      <FloatInput v-model="form.email" label="Email" placeholder="example@gmail.com" id="email"
        :error="form.errors.get('email')" />
      <FloatInput v-model="form.pickup_date" label="Date" customType="date" placeholder="Apr 19, 2025" id="pickup_date"
        :error="form.errors.get('pickup_date')" />
      <FloatInput v-model="form.pickup_time" label="Time" customType="time" placeholder="08:00 pm" id="pickup_time"
        :error="form.errors.get('pickup_time')" />
      <FloatInput v-model="form.pickup_location" label="Pick Up" placeholder="From: Airport, Hotel ..."
        id="origin-input" :error="form.errors.get('pickup_location')" />
      <FloatInput v-model="form.drop_location" label="Destination" placeholder="To: Airport, Hotel ..."
        id="destination-input" :error="form.errors.get('drop_location')" />
      <FloatInput v-model="form.phone" label="Number" placeholder="(XXX) XXX-XXXX" id="phone"
        :error="form.errors.get('phone')" />
      <FloatSelect v-if="form.service_type == 2" v-model="form.hours" label="Duration" placeholder="03 Hours"
        :options="hoursOptions" id="hours" :error="form.errors.get('hours')" />
      <FloatSelect v-model="form.vehicle_id" label="Fleet" placeholder="Black Sedan"
        :options="storeBookingData?.vehicles || []" id="vehicle_id" :error="form.errors.get('vehicle_id')" />
      <FloatInput v-model="form.no_of_passengers" label="Passengers" type="number" placeholder="04" id="passenger"
        :error="form.errors.get('no_of_passengers')" />
      <FloatInput v-model="form.no_of_lugguage" label="Lugguage" type="number" placeholder="03" id="lugguage"
        :error="form.errors.get('no_of_lugguage')" />
      <FloatSelect v-model="form.service" label="Service" placeholder="Airport pick-up"
        :options="storeBookingData?.services || []" id="service" :error="form.errors.get('service')" />

      <FloatSelect v-model="form.travel_type" label="Travel" placeholder="One Way"
        :options="storeBookingData?.travel_types || []" id="travel_type" :error="form.errors.get('travel_type')" />
      <div class="md:col-span-2 mx-auto">
        <button type="button"
          class="w-full mx-auto bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-16 text-black font-bold py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          :disabled="form.busy || storeBookingDataLoading" @click="storeBooking">
          <div v-if="form.busy" class="h-6 flex items-center">
            <DotsLoading />
          </div>
          <span v-else>Get a Free Quote</span>
        </button>
      </div>
    </form>

    <div v-if="successAlert"
      class="mt-4 flex items-start justify-between gap-3 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg"
      id="successAlert">

      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
        <span class="font-medium">Success! Thank you for your message. It has been sent.</span>
      </div>

      <button class="text-green-700 hover:text-green-900" @click="document.getElementById('successAlert').remove()">
        ✕
      </button>
    </div>

    <div v-if="errorAlert"
      class="mt-4 flex items-start justify-between gap-3 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg"
      id="errorAlert">

      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
        <span class="font-medium">Error! {{ errorMessage }}</span>
      </div>

      <button class="text-red-700 hover:text-red-900" onclick="document.getElementById('errorAlert').remove()">
        ✕
      </button>
    </div>

  </section>
</template>
