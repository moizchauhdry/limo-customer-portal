<script setup>
import { defineProps, defineEmits, ref, defineModel } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
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
      :placeholder="' '"
      class="peer w-full px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white text-[#404040] placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#FDD31C]"
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
