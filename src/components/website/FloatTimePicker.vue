<script setup>
import { ref, watch  ,onMounted, onBeforeUnmount,defineModel,defineProps, defineEmits } from "vue";

defineProps({
  label: {
    type: String,
    default: "Time",
  },
  placeholder: {
    type: String,
    default: () => "",
  },
});

const model = defineModel();

const handleClickOutside = (event) => {
  if (pickerRef.value && !pickerRef.value.contains(event.target)) {
    showPicker.value = false;
    focused.value = false;
  }
};

const emit = defineEmits(["change"]);
const focused = ref(false);
const pickerRef = ref(null);

const showPicker = ref(false);
const selectedHour = ref("11");
const selectedMinute = ref("36");
const selectedPeriod = ref("PM");

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);
const periods = ["AM", "PM"];

// Watch selections and emit formatted time
watch([selectedHour, selectedMinute, selectedPeriod], () => {
  const formatted = `${selectedHour.value}:${selectedMinute.value} ${selectedPeriod.value}`;
  emit("change", formatted);

});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div ref="pickerRef" class="relative w-full max-w-sm">
    <!-- Trigger Input -->
    <input
      readonly
      :placeholder="placeholder"
      class="peer w-full px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white text-[#404040] placeholder:text-[#404040] placeholder:text-right placeholder:text-xs focus:placeholder-transparent  focus:outline-none focus:ring-1 focus:ring-[#FDD31C] cursor-pointer"
      v-model="model"
       @focus="focused = true; showPicker = true"
    />

    <!-- Floating Label -->
    <label
      :for="label"
      :class="[
        'absolute left-3 text-[#7C7C7C] font-semibold transition-all duration-200 bg-white px-1',
        model || focused ? '-top-2 text-xs text-[#404040]' : 'top-3 text-md',
      ]"
    >
      {{ label }}
    </label>

    <!-- Time Picker Dropdown -->
    <div
      v-if="showPicker"
      class="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10 p-4 flex justify-between"
    >
      <!-- Hours --> 
      <div class="flex flex-col gap-1 overflow-y-auto max-h-40 no-scrollbar">
        <div
          v-for="hour in hours"
          :key="hour"
          @click="selectedHour = hour"
          class="px-2 py-1 text-sm text-center cursor-pointer hover:bg-gray-100"
          :class="{ 'bg-blue-100 font-semibold': selectedHour === hour }"
        >
          {{ hour }}
        </div>
      </div>

      <!-- Minutes -->
      <div class="flex flex-col gap-1 overflow-y-auto max-h-40 no-scrollbar">
        <div
          v-for="minute in minutes"
          :key="minute"
          @click="selectedMinute = minute"
          class="px-2 py-1 text-sm text-center cursor-pointer hover:bg-gray-100"
          :class="{ 'bg-blue-100 font-semibold': selectedMinute === minute }"
        >
          {{ minute }}
        </div>
      </div>

      <!-- AM/PM -->
      <div class="flex flex-col gap-1">
        <div
          v-for="period in periods"
          :key="period"
          @click="selectedPeriod = period"
          class="px-2 py-1 text-sm text-center cursor-pointer hover:bg-gray-100"
          :class="{ 'bg-blue-100 font-semibold': selectedPeriod === period }"
        >
          {{ period }}
        </div>
      </div>
    </div>
  </div>
</template>
