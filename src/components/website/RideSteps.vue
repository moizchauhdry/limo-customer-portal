<script setup>
import { ref } from "vue";

import step1 from "@/assets/icons/wesbsite/hero/step1.svg";
import step2 from "@/assets/icons/wesbsite/hero/step2.svg";
import step3 from "@/assets/icons/wesbsite/hero/step3.svg";

const carousel = ref(null);

const slideLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -carousel.value.clientWidth,
      behavior: "smooth",
    });
  }
};

const slideRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: carousel.value.clientWidth,
      behavior: "smooth",
    });
  }
};

const steps = [
  {
    id: 1,
    img: step1,
    title: "Choose Your Car",
    text: "Browse our premium fleet and select the perfect vehicle for your needs.",
  },
  {
    id: 2,
    img: step2,
    title: "Book Instantly",
    text: "Complete your reservation in under 2 minutes with our streamlined process.",
  },
  {
    id: 3,
    img: step3,
    title: "Enjoy your Ride",
    text: "Chauffeur assigned to your Ride and start your journey.",
  },
];
</script>

<template>
  <section class="px-4 py-6 sm:pt-10 md:px-10 lg:px-20 bg-[#FFFFFF]">
    <div class="max-w-7xl mx-auto flex flex-col">
      <!-- Heading -->
      <div class="text-black space-y-3 text-center sm:mb-8" data-aos="fade-down" data-aos-duration="1200"
        data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
        <h2 class="text-[28px] md:text-[36px] lg:text-[52px] font-bold leading-tight capitalize">
          How it Works
        </h2>
        <p class="text-sm md:text-base text-[#626262] font-medium max-w-3xl mx-auto">
          Book a Ride in 3 simple steps. It’s that easy!
        </p>
      </div>

      <!-- DESKTOP GRID -->
      <div class="hidden sm:grid grid-cols-3 gap-6 sm:px-14" data-aos="fade-up" data-aos-duration="1200"
        data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
        <div v-for="step in steps" :key="step.id" class="flex flex-col items-center text-center">
          <img :src="step.img" :alt="step.title" />
          <div class="text-md md:text-2xl font-bold text-black mb-3">
            {{ step.title }}
          </div>
          <div class="text-xs md:text-sm text-[#626262] font-medium capitalize">
            {{ step.text }}
          </div>
        </div>
      </div>

      <!-- MOBILE CAROUSEL -->
      <div class="relative sm:hidden" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
        data-aos-easing="ease-in-out" data-aos-delay="100">
        <!-- Arrows -->
        <div class="flex justify-between items-center mb-2 px-1">
          <button @click="slideLeft" class="text-black text-2xl">‹</button>

          <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 py-4 no-scrollbar">
            <div v-for="step in steps" :key="step.id" class="min-w-full snap-center space-y-0">
              <div class="flex flex-col items-center text-center p-4">
                <img :src="step.img" :alt="step.title" class="mb-4" />
                <div class="text-2xl font-bold text-black mb-2">
                  {{ step.title }}
                </div>
                <div class="text-lg text-[#626262] font-medium">
                  {{ step.text }}
                </div>
              </div>
            </div>
          </div>

          <button @click="slideRight" class="text-black text-2xl">›</button>
        </div>
      </div>

      <button
        class="flex mx-auto sm:mt-12 whitespace-nowrap bg-[linear-gradient(93.72deg,#3D3D3D_2.95%,#000000_100%)] text-[#FFFFFF] font-semibold px-12 sm:px-24 py-2 rounded-lg hover:opacity-90 transition-opacity">
        Get a Free Quote
      </button>
    </div>
  </section>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  scrollbar-width: none;
}
</style>
