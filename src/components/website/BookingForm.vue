<script setup>
import { reactive } from "vue";
import FloatInput from "./FloatInput.vue";
import FloatTimePicker from "./FloatTimePicker.vue";
import FloatSelect from "./FloatSelect.vue";

const fleetOptions = [
  { label: "Black Sedan", value: "Black Sedan" },
  { label: "SUV", value: "SUV" },
  { label: "Luxury Van", value: "Luxury Van" },
  { label: "Limousine", value: "Limousine" },
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
</script>

<template>
  <section
    class="bg-white shadow-xl p-6 rounded-xl max-w-xl sm:ml-auto sm:mt-[-26rem] z-10 relative sm:mr-[2rem]"
  >
    <div
      class="flex gap-2 bg-white rounded-xl w-full border-2 border-[#111111] mb-6 justify-between"
    >
      <!-- Selected Tab -->
      <button
        class="w-[50%] bg-black text-white font-semibold rounded-lg transition-colors text-lg"
      >
        Distance
      </button>

      <!-- Unselected Tab -->
      <button
        class="px-6 py-2 bg-white text-black font-semibold rounded-full transition-colors mx-auto text-lg"
      >
        Hourly
      </button>
    </div>

    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FloatInput v-model="form.name" label="Name" />
      <FloatInput v-model="form.email" label="Email" />
      <FloatInput v-model="form.date" type="date" />
      <FloatTimePicker v-model="form.time" label="Time" />
      <FloatInput v-model="form.pick_up" label="Pick Up" />
      <FloatInput v-model="form.destination" label="Destination" />
      <FloatInput v-model="form.number" label="Number" />
      <FloatSelect v-model="form.fleet" label="Fleet" :options="fleetOptions" />

      <FloatInput v-model="form.no_of_passengers" label="Passengers" />
      <FloatInput v-model="form.no_of_lugguage" label="Lugguage" /><FloatSelect v-model="form.service" label="Service" :options="fleetOptions" />
      
      <FloatSelect v-model="form.travel" label="Travel" :options="fleetOptions" />
      <div class="md:col-span-2 mx-auto">
        <button
          type="submit"
          class="w-full mx-auto bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-16 text-black font-bold py-2 rounded-lg hover:opacity-90 transition"
        >
          Get a Free Quote
        </button>
      </div>
    </form>
  </section>
</template>
