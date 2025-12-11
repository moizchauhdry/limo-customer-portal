<script setup>
import { ref } from "vue";

import service1 from "@/assets/icons/wesbsite/hero/service1.svg";
import service2 from "@/assets/icons/wesbsite/hero/service2.svg";
import service3 from "@/assets/icons/wesbsite/hero/service3.svg";
import service4 from "@/assets/icons/wesbsite/hero/service4.svg";
import leftArrow from "@/assets/icons/wesbsite/hero/service5.svg";
import rightArrow from "@/assets/icons/wesbsite/hero/service6.svg";

const carousel = ref(null);

const visibleCards = () => (window.innerWidth >= 1024 ? 4 : 1);

const slideLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -carousel.value.clientWidth / visibleCards(),
      behavior: "smooth",
    });
  }
};

const slideRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: carousel.value.clientWidth / visibleCards(),
      behavior: "smooth",
    });
  }
};

const services = [
  {
    id: 1,
    image: service1,
    title: "Airport Transfers",
    desc: "Stress-free pickups and drop-offs to all major airports",
  },
  {
    id: 2,
    image: service2,
    title: "Hourly Car Service",
    desc: "Hire a Chauffeur at your dedicated time for premium travel",
  },
  {
    id: 3,
    image: service3,
    title: "Wedding Car Service",
    desc: "Luxury service for weddings, transfer, and special occasions.",
  },
  {
    id: 4,
    image: service4,
    title: "City to City Transfers",
    desc: "Comfortable, private transfers from Point one to other",
  },
  {
    id: 3,
    image: service3,
    title: "Wedding Car Service",
    desc: "Luxury service for weddings, transfer, and special occasions.",
  },
  {
    id: 4,
    image: service4,
    title: "City to City Transfers",
    desc: "Comfortable, private transfers from Point one to other",
  },
   {
    id: 1,
    image: service1,
    title: "Airport Transfers",
    desc: "Stress-free pickups and drop-offs to all major airports",
  },
  {
    id: 2,
    image: service2,
    title: "Hourly Car Service",
    desc: "Hire a Chauffeur at your dedicated time for premium travel",
  },
  {
    id: 3,
    image: service3,
    title: "Wedding Car Service",
    desc: "Luxury service for weddings, transfer, and special occasions.",
  },
];
</script>

<template>
  <section class="w-full px-6 md:px-12 lg:px-10 max-w-7xl mx-auto">
    <!-- TEXT HEADING -->
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center sm:mb-4">
      <div>
        <h2
          class="text-4xl md:text-4xl text-center sm:text-start sm:mx-0 font-medium"
          style="color: rgba(1, 1, 1, 1)"
        >
          Our Services
        </h2>

        <p
          class="mt-2 text-lg text-[#46464D] font-medium font-inter text-center sm:text-start"
        >
          From airport rides to city travel, we’ve got every trip covered with
          comfort and style.
        </p>
      </div>

      <!-- ARROW BUTTONS -->
      <div class="flex items-center gap-4">
        <button
          @click="slideLeft"
          class="w-10 h-10 flex items-center justify-center rounded-full border bg-gray-500 border-gray-300 hover:bg-gray-100 transition"
        >
          <img :src="leftArrow" class="w-4 h-4" />
        </button>

        <button
          @click="slideRight"
          class="w-10 h-10 flex items-center justify-center rounded-full border bg-black border-gray-300 hover:bg-gray-100 transition"
        >
          <img :src="rightArrow" class="w-4 h-4 rounded" />
        </button>
      </div>
    </div>

    <!-- SERVICE CARDS GRID -->
    <div class="relative">
      <div
        ref="carousel"
        class="flex overflow-x-auto no-scrollbar scroll-smooth gap- rounded-xl mx-auto w-full"
      >
        <div v-for="item in services" :key="item.id">
          <!-- IMAGE WRAPPER -->
          <div class="h-[190px] w-[340px] rounded-xl mx-auto">
            <img :src="item.image" class="object-cover" />
          </div>

          <!-- TEXT -->
          <div class="ml-5">
            <h3 class="text-xl font-semibold mt-4 text-black text-center sm:text-start">
              {{ item.title }}
            </h3>

            <p class="text-[#46464D] font-normal mt-2 font-poppins text-center sm:text-start w-[80%] sm-w-full mx-auto sm:mx-0 text-sm">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
