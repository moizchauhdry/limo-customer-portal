<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { defineProps, defineEmits, defineModel } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const model = defineModel();
const emit = defineEmits(["change"]);

const focused = ref(false);
const showOptions = ref(false);

const wrapperRef = ref(null);

const selectOption = (option) => {
  model.value = option.value; 
  emit("change", option.value);
  showOptions.value = false;
  focused.value = true;
};

// Close dropdown on outside click
const handleClickOutside = (event) => {
  if (wrapperRef.value && !wrapperRef.value.contains(event.target)) {
    showOptions.value = false;

    // If no value and user clicked away, remove focus → label goes down
    if (!model.value) {
      focused.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div ref="wrapperRef" class="relative w-full max-w-sm">
    <!-- Wrapper / Display Field -->
    <div
      class="flex items-center justify-between w-full px-3 py-4 border border-[#CCCCCC] rounded-2xl shadow bg-white cursor-pointer"
      @click="
        showOptions = !showOptions;
        focused = true;
      "
    >
      <!-- Floating Label -->
      <label
        :class="[
          'absolute left-3 transition-all duration-200 bg-white px-1 font-semibold text-[#7C7C7C]',
          model || focused ? '-top-2 text-xs text-yellow-600' : 'top-3 text-md',
        ]"
      >
        {{ label }}
      </label>

      <!-- Selected Value -->
      <span class="text-xs text-[#404040]">
        {{ model || "" }}
      </span>

      <!-- Dropdown Arrow -->
      <img
        src="@/assets/icons/wesbsite/hero/dropdown-arrow.svg"
        alt="dropdown arrow"
        class="w-2 h-2 object-contain ml-auto"
      />
    </div>

    <!-- Dropdown Options -->
    <div
      v-if="showOptions"
      class="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10"
    >
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="px-3 text-sm cursor-pointer hover:bg-gray-100"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
