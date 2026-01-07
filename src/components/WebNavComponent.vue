<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <nav class="bg-[#FFFFFF] shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center cursor-pointer">
          <img src="@/assets/icons/wesbsite/navbar/web-logo.svg" alt="Urban Elite Limo" class="h-8 w-auto"
            @click="$router.push('/')" />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10">
          <router-link to="/" exact-active-class="bg-[#E9EDF5] text-black font-semibold"
            class="text-[#565656] hover:text-black hover:bg-[#E9EDF5] cursor-pointer p-2 rounded transition">
            HOME
          </router-link>

          <router-link to="/fleet" active-class="bg-[#E9EDF5] text-black font-semibold"
            class="text-[#565656] hover:text-black hover:bg-[#E9EDF5] cursor-pointer p-2 rounded transition">
            FLEET
          </router-link>

          <router-link to="/services" active-class="bg-[#E9EDF5] text-black font-semibold"
            class="text-[#565656] hover:text-black hover:bg-[#E9EDF5] cursor-pointer p-2 rounded transition">
            SERVICES
          </router-link>

          <router-link to="/about-us" active-class="bg-[#E9EDF5] text-black font-semibold"
            class="text-[#565656] hover:text-black hover:bg-[#E9EDF5] cursor-pointer p-2 rounded transition">
            ABOUT US
          </router-link>

          <router-link to="/contact-us" active-class="bg-[#E9EDF5] text-black font-semibold"
            class="text-[#565656] hover:text-black hover:bg-[#E9EDF5] cursor-pointer p-2 rounded transition">
            CONTACT US
          </router-link>
        </div>


        <!-- Book Now Button -->
        <div class="hidden md:block">
          <a href="/book"
            class="bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] text-[#010101] font-bold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition">
            BOOK NOW!
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <!-- Mobile Menu -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="-translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100" leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0 opacity-100" leave-to-class="-translate-x-full opacity-0">
      <div v-if="isOpen" class="md:hidden fixed top-16 left-0 w-full bg-white shadow px-4 pt-4 pb-6 space-y-3 z-40">
        <router-link to="/" class="block text-yellow-600 font-semibold">HOME</router-link>
        <router-link to="/fleet" class="block text-gray-700 hover:text-yellow-600">FLEET</router-link>
        <router-link to="/about-us" class="block text-gray-700 hover:text-yellow-600">ABOUT US</router-link>
        <router-link to="/services" class="block text-gray-700 hover:text-yellow-600">SERVICES</router-link>
        <router-link to="/contact-us" class="block text-gray-700 hover:text-yellow-600">CONTACT US</router-link>

        <router-link to="/book"
          class="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center">
          BOOK NOW!
        </router-link>
      </div>
    </transition>

  </nav>
</template>
