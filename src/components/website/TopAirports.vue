<script setup>
import { ref } from "vue";

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

const airports = [
  {
    code: "JFK",
    icon: new URL("@/assets/icons/wesbsite/hero/airport1.svg", import.meta.url)
      .href,
  },
  {
    code: "LGA",
    icon: new URL("@/assets/icons/wesbsite/hero/airport2.svg", import.meta.url)
      .href,
  },
  {
    code: "NEWARK",
    icon: new URL("@/assets/icons/wesbsite/hero/airport3.svg", import.meta.url)
      .href,
  },
  {
    code: "BDI",
    icon: new URL("@/assets/icons/wesbsite/hero/airport4.svg", import.meta.url)
      .href,
  },
];
</script>

<template>
  <!-- TOP AIRPORTS : image-right layout -->
  <section class="px-4 py-6 sm:py-16 md:px-10 lg:px-20 bg-black">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10 md:gap-16">
      <!-- LEFT : heading + text -->
      <div class="flex flex-col" data-aos="fade-down" data-aos-duration="1200" data-aos-offset="150"
        data-aos-easing="ease-in-out" data-aos-delay="200">
        <h2 class="text-3xl md:text-5xl font-bold text-[#E9E9E9] text-center sm:text-start">
          Top Airports
        </h2>
        <p class="mt-3 md:mt-6 text-sm md:text-xl text-[#E1E1E1] text-center sm:text-start">
          Whether it's a weekend getaway or a business trip, we have the right
          vehicle. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <!-- RIGHT : airport icons -->
      <div class="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-2 col-span-2" data-aos="fade-up"
        data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="200">
        <div v-for="a in airports" :key="a.code" class="flex flex-col items-center text-center">
          <div class="rounded-full flex items-center justify-center mb-3 h-auto">
            <img :src="a.icon" :alt="a.code" class="object-contain" />
            <span class="absolute mt-56 mr-10 sm:mr-21 text-white text-xl md:text-2xl">{{ a.code }}</span>
          </div>
        </div>
      </div>

      <!-- only mobile responsive -->
      <div class="relative sm:hidden"
      data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out"
    data-aos-delay="100">
        <div class="flex justify-between items-center">
          <button @click="slideLeft" class="text-white text-2xl">‹</button>

          <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar">
            <div v-for="a in airports" :key="a.code" class="min-w-full snap-center flex flex-col items-center">
              <!-- wrapper: image + text stacked -->
              <div class=" w-full flex justify-center">
                <img :src="a.icon" :alt="a.code" class="object-contain pb-4" />                
              </div>
              <!-- centred, then shifted left -->
                <span
                  class="flex items-center justify-center text-white text-2xl z-10 ">
                  {{ a.code }}
                </span>
            </div>
          </div>

          <button @click="slideRight" class="text-white text-2xl">›</button>
        </div>
      </div>
    </div>
  </section>
</template>
