<script setup>
import { reactive } from "vue";
import FloatInput from "./FloatInput.vue";
import FloatSelect from "./FloatSelect.vue";

const fleetOptions = [
  { label: "Black Sedan", value: "1" },
  { label: "SUV", value: "2" },
  { label: "Luxury Van", value: "3" },
  { label: "Limousine", value: "4" },
];

const form = reactive({
  name: "",
  email: "",
  pick_up: "",
  destination: "",
  number: "",
  no_of_passengers: "",
  no_of_lugguage: "",
  time: "",
  date: "",
  fleet: "",
  service: "",
  travel: "",
});

// const loadGoogleMaps = () => {
//   return new Promise(resolve => {
//     if (window.google && window.google.maps) {
//       resolve();
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${createRideData.value?.google_map_api_key}&libraries=places`;
//     script.async = true;
//     script.onload = resolve;
//     document.head.appendChild(script);
//   });
// };

// const setupAutocomplete = () => {
//   const originInput = document.getElementById("origin-input");
//   const destinationInput = document.getElementById("destination-input");

//   const originAuto = new google.maps.places.Autocomplete(originInput, { fields: ["place_id", "formatted_address", "name"] });
//   const destAuto = new google.maps.places.Autocomplete(destinationInput, { fields: ["place_id", "formatted_address", "name"] });

//   originAuto.addListener("place_changed", () => {

//     const place = originAuto.getPlace();
//     if (place.place_id) {
//       originPlaceId.value = place.place_id;
//       route();

//       form.pickup_location = originInput.value;
//     }
//   });

//   destAuto.addListener("place_changed", () => {
//     const place = destAuto.getPlace();
//     if (place.place_id) {
//       destinationPlaceId.value = place.place_id;
//       route();

//       form.drop_location = destinationInput.value;
//     }
//   });
// };
</script>

<template>
  <section class="bg-white shadow-xl p-6 rounded-xl max-w-xl sm:ml-auto sm:mt-[-26rem] z-10 relative sm:mr-[2rem]">
    <div class="flex gap-2 bg-white rounded-xl w-full border-2 border-[#111111] mb-6 justify-between">
      <!-- Selected Tab -->
      <button class="w-[50%] bg-black text-white font-semibold rounded-lg transition-colors text-lg">
        Distance
      </button>

      <!-- Unselected Tab -->
      <button class="px-6 py-2 bg-white text-black font-semibold rounded-full transition-colors mx-auto text-lg">
        Hourly
      </button>
    </div>

    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FloatInput v-model="form.name" label="Name" placeholder="Jack" id="name"/>
      <FloatInput v-model="form.email" label="Email" placeholder="example@gmail.com" id="email" />
      <FloatInput v-model="form.date" label="Date" customType="date" placeholder="Apr 19, 2025" id="date" />
      <FloatInput v-model="form.time" label="Time" customType="time" placeholder="08:00 pm" id="time" />
      <FloatInput v-model="form.pick_up" label="Pick Up" placeholder="From: Airport, Hotel ..." id="origin-input" />
      <FloatInput v-model="form.destination" label="Destination" placeholder="From: Airport, Hotel ..."
        id="destination-input" />
      <FloatInput v-model="form.number" label="Number" placeholder="(XXX) XXX-XXXX" id="number" />
      <FloatSelect v-model="form.fleet" label="Fleet" placeholder="Black Sedan" :options="fleetOptions" id="fleet" />
      <FloatInput v-model="form.no_of_passengers" label="Passengers" placeholder="04" id="passenger"/>
      <FloatInput v-model="form.no_of_lugguage" label="Lugguage" placeholder="03" id="lugguage" />
      <FloatSelect v-model="form.service" label="Service" placeholder="Airport pick-up" :options="fleetOptions" id="service" />

      <FloatSelect v-model="form.travel" label="Travel" placeholder="One way" :options="fleetOptions" id="travel"/>
      <div class="md:col-span-2 mx-auto">
        <button type="submit"
          class="w-full mx-auto bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-16 text-black font-bold py-2 rounded-lg hover:opacity-90 transition">
          Get a Free Quote
        </button>
      </div>
    </form>
  </section>
</template>
