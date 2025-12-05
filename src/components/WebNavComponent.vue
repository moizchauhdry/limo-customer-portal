<template>
  <nav class="bg-[#FFFFFF] shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img
            src="@/assets/icons/wesbsite/navbar/web-logo.svg"
            alt="Urban Elite Limo"
            class="h-8 w-auto"
          />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-14">
          <a
            class="text-[#565656] hover:text-[#000000] hover:text-bold hover:bg-[#E9EDF5] cursor-pointer p-2 rounded"
            >HOME</a
          >
          <a
            class="text-[#565656] hover:text-[#000000] hover:text-bold hover:bg-[#E9EDF5] cursor-pointer p-2 rounded"
            >FLEET</a
          >
          <a
            class="text-[#565656] hover:text-[#000000] hover:text-bold hover:bg-[#E9EDF5] cursor-pointer p-2 rounded"
            >ABOUT US</a
          >
          <a
            class="text-[#565656] hover:text-[#000000] hover:text-bold hover:bg-[#E9EDF5] cursor-pointer p-2 rounded"
            >CONTACT US</a
          >
        </div>

        <!-- Book Now Button -->
        <!-- Book Now Button -->
        <div class="hidden md:block">
          <a
            href="/book"
            class="bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] text-[#010101] font-bold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition"
          >
            BOOK NOW!
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow"
    >
      <a href="/" class="block text-yellow-600 font-semibold">HOME</a>
      <a href="/fleet" class="block text-gray-700 hover:text-yellow-600"
        >FLEET</a
      >
      <a href="/about" class="block text-gray-700 hover:text-yellow-600"
        >ABOUT US</a
      >
      <a href="/contact" class="block text-gray-700 hover:text-yellow-600"
        >CONTACT US</a
      >
      <a
        href="/book"
        class="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center"
      >
        BOOK NOW!
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
