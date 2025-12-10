<script setup>
import { defineProps, defineEmits, ref, defineModel } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: "text",
  },
});
const model = defineModel();
const emit = defineEmits(["input"]);
const focused = ref(false);
</script>

<template>
  <div class="relative w-full max-w-sm">
    <!-- Input -->
    <input
      :type="type"
      :id="label"
      :placeholder="placeholder"
      class="peer w-full px-3 py-3 border border-[#CCCCCC] rounded-2xl cursor-pointer shadow bg-white text-[#404040] placeholder:text-[#404040] placeholder:text-right placeholder:text-xs focus:placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#FDD31C]"
      :class="{ 'custom-date-input': type == 'date' }"
      v-model="model"
      @input="emit('input', $event.target.value)"
      @focus="focused = true"
      @blur="focused = false"
    />

    <!-- floating label -->
    <label
      :for="label"
      :class="[
        'absolute left-3 text-[#7C7C7C] font-semibold transition-all duration-200 bg-white px-1',
        model || focused ? '-top-2 text-xs text-[#404040]' : 'top-3 text-md',
      ]"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
/* Show custom placeholder for date input */
.custom-date-input:before {
  content: attr(placeholder);
  color: #9ca3af; /* placeholder gray */
  position: absolute;
  right: 12px;
  pointer-events: none;
}

/* Hide placeholder after selecting a date */
.custom-date-input:not(:placeholder-shown):before {
  content: "";
}

/* Remove calendar icon (Chrome, Edge, Opera) */
.custom-date-input::-webkit-calendar-picker-indicator {
  opacity: 0;
  display: none;
}

/* Remove default icon in Firefox */
.custom-date-input {
  -moz-appearance: textfield;
  background-image: none;
}
</style>
