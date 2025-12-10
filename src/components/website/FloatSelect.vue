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
  id: {
    type: String,
    default: () => "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  error: {
    type: String,
    default: () => "",
  },
});

const model = defineModel();
const emit = defineEmits(["change"]);
const focused = ref(false);

const handleFocus = () => {
  focused.value = true;
}

const handleBlur = () => {
  focused.value = false;
}
</script>

<template>
  <div class="relative w-full max-w-sm">
    <!-- Select -->
    <select :id="id" :placeholder="placeholder"
      class="peer w-full px-3 py-3 border border-[#CCCCCC] rounded-2xl cursor-pointer shadow bg-white text-[#404040] placeholder:text-[#404040] placeholder:text-right placeholder:text-xs focus:placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#FDD31C]"
      v-model="model" @change="emit('change', $event.target.value)" @focus="handleFocus" @blur="handleBlur">

      <option v-if="!focused" disabled value="" class="text-right text-xs text-gray-400">
        {{ placeholder }}
      </option>
      <option class="rounded-xl" v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <!-- floating label -->
    <label :for="id" :class="[
      'absolute left-3 text-[#7C7C7C] font-semibold transition-all duration-200 bg-white px-1',
      model || focused ? '-top-2 text-xs text-[#404040]' : 'top-3 text-md',
    ]">
      {{ label }}
    </label>

    <!-- error -->
    <p v-if="error" class="text-red-500 text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>
