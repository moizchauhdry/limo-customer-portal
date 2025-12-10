<script setup>
import { defineProps, defineEmits, ref, defineModel } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: () => "",
  },
  id: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: "text",
  },
  customType: {
    type: String,
    default: () => "",
  },
});

const model = defineModel();
const emit = defineEmits(["input"]);
const focused = ref(false);
const storeType = ref(props.type);

const handleFocus = () => {
  focused.value = true;

  if (props.customType) {
    if (props.customType == 'date' || props.customType == 'time') {
      storeType.value = props.customType;
    }
  }
}

const handleBlur = () => {
  focused.value = false;

  if (props.customType && !model.value) {
    storeType.value = 'text';
  }
}
</script>

<template>
  <div class="relative w-full max-w-sm">
    <!-- Input -->
    <input :type="storeType" :id="id" :placeholder="placeholder"
      class="peer w-full px-3 py-3 border border-[#CCCCCC] rounded-2xl cursor-pointer shadow bg-white text-[#404040] placeholder:text-[#404040] placeholder:text-right placeholder:text-xs focus:placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#FDD31C]"
      :class="{ 'has-value': model }" v-model="model" @input="emit('input', $event.target.value)" @focus="handleFocus"
      @blur="handleBlur" />

    <!-- floating label -->
    <label :for="id" :class="[
      'absolute left-3 text-[#7C7C7C] font-semibold transition-all duration-200 bg-white px-1',
      model || focused ? '-top-2 text-xs text-[#404040]' : 'top-3 text-md',
    ]">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
input[type="date"]:in-range::-webkit-datetime-edit-year-field,
input[type="date"]:in-range::-webkit-datetime-edit-month-field,
input[type="date"]:in-range::-webkit-datetime-edit-day-field,
input[type="date"]:in-range::-webkit-datetime-edit-text {
  color: transparent;
}

/* input[type="time"]::-webkit-datetime-edit-text,
input[type="time"]::-webkit-datetime-edit-hour-field,
input[type="time"]::-webkit-datetime-edit-minute-field,
input[type="time"]::-webkit-datetime-edit-ampm-field {
  color: transparent;
} */
</style>
