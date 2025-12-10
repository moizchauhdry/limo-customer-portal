<script setup>
import { ref } from "vue";

import leftArrow from "@/assets/icons/wesbsite/hero/service5.svg";
import rightArrow from "@/assets/icons/wesbsite/hero/service6.svg";

import destination1 from "@/assets/icons/wesbsite/hero/destination1.svg";
import destination2 from "@/assets/icons/wesbsite/hero/destination2.svg";
import destination3 from "@/assets/icons/wesbsite/hero/destination3.svg";

// images list
const images = [
  destination1,
  destination2,
  destination3,
  destination1,
  destination2,
  destination3,
  destination1,
];

const carousel = ref(null);
const scrollAmount = 300;

const slideNext = () => {
  carousel.value.scrollLeft += scrollAmount;
};

const slidePrev = () => {
  carousel.value.scrollLeft -= scrollAmount;
};
</script>

<template>
  <section class="px-4 md:px-10 lg:px-10 bg-[#FFFFFF] mb-10 mt-5">
    <div class="max-w-7xl mx-auto flex flex-col">
      <div class="text-black space-y-4 text-center sm:mb-0">
        <h2
          class="text-[34px] text-[#010101] md:text-[36px] lg:text-[52px] font-bold leading-tight capitalize"
        >
          top destination
        </h2>
        <div class="flex items-center flex-col sm:flex-row gap-4 sm:gap-0">
          <p
            class="text-sm md:text-lg text-[#626262] font-medium max-w-3xl mx-auto"
          >
            From coast to coast — premium rides, no matter the city.
          </p>
          <div class="flex items-center gap-4 sm:mr-8">
            <button
              @click="slidePrev"
              class="w-10 h-10 flex items-center justify-center rounded-full border bg-gray-500 border-gray-300 hover:bg-gray-900 transition"
            >
              <img :src="leftArrow" class="w-4 h-4" />
            </button>

            <button
              @click="slideNext"
              class="w-10 h-10 flex items-center justify-center rounded-full border bg-black border-gray-300 hover:bg-gray-300 transition"
            >
              <img :src="rightArrow" class="w-4 h-4 rounded" />
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT: 4 STAT CARDS -->
      <div
        ref="carousel"
        class="flex overflow-x-auto scroll-smooth no-scrollbar gap-2 mt-4"
      >
        <div
          v-for="(img, index) in images"
          :key="index"
          class="min-w-[320px]"
        >
          <img :src="img" class="w-full h-full rounded-lg border-4 border-[#f3f1f1]" />
        </div>
      </div>
    </div>
  </section>
</template>
