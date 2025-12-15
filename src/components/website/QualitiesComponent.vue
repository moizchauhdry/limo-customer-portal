<script setup>
import { ref } from "vue";

import img1 from "@/assets/icons/wesbsite/hero/quality1.svg";
import img2 from "@/assets/icons/wesbsite/hero/quality2.svg";
import img3 from "@/assets/icons/wesbsite/hero/quality3.svg";
import img4 from "@/assets/icons/wesbsite/hero/quality4.svg";
import img5 from "@/assets/icons/wesbsite/hero/quality5.svg";
import img6 from "@/assets/icons/wesbsite/hero/quality6.svg";

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
const cards = [
  {
    id: 1,
    title: "Latest Fleet Models",
    text: "Well-maintained vehicles from top brands, regularly serviced and cleaned.",
    img: img1, // Direct reference to imported image
  },
  {
    id: 2,
    title: "24/7 Availability",
    text: "Round-the-clock service with flexible pickup and drop-off times.",
    img: img2,
  },
  {
    id: 3,
    title: "On Time Pickups",
    text: "Convenient pickup service on time across major cities and airports.",
    img: img3,
  },
  {
    id: 4,
    title: "Customer Support",
    text: "Dedicated support team ready to assist you throughout your journey.",
    img: img4,
  },
  {
    id: 5,
    title: "Licensed Chauffeurs",
    text: "Fully Licensed and Professional Chauffeurs for Ride Coverage",
    img: img5,
  },
  {
    id: 6,
    title: "Luxury Clean Fleet",
    text: "Well-maintained vehicles from top brands, regularly serviced and cleaned.",
    img: img6,
  },
];
</script>

<template>
  <section class="px-4 md:px-10 lg:px-15 py-4 bg-white max-w-7xl w-full mx-auto mb-10">
    <!-- Heading -->
    <div class="text-center mb-3 md:mb-4" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="150"
      data-aos-easing="ease-in-out" data-aos-delay="100">
      <h2 class="text-[40px] md:text-[36px] lg:text-[60px] font-bold leading-tight capitalize" style="color: #010101">
        What Makes Us Different?
      </h2>
      <p class="mt-3 text-sm md:text-base lg:text-lg max-w-4xl mx-auto capitalize font-medium" style="color: #626262">
        Choosing Urban Elite means choosing reliability, safety, and a seamless
        experience. We handle the details so you can focus on your destination.
      </p>
    </div>

    <!-- DESKTOP GRID -->
    <div class="hidden lg:block overflow-hidden relative gap-3 md:gap-5">
      <div class="flex animate-scroll gap-5">
        <div v-for="item in [...cards, ...cards]" :key="item.id + '-loop'"
          class="bg-white w-[340px] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden border border-[#C5C5C5]">
          <img :src="item.img" :alt="item.title" class="object-cover p-2 h-12" />
          <div class="p-3">
            <h3 class="text-xl md:text-[20px] font-semibold text-[#010101] mb-1">
              {{ item.title }}
            </h3>
            <p class="text-sm font-medium text-[#777777]">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE CAROUSEL -->
    <div class="relative sm:hidden">
      <div class="flex justify-between items-center gap-1">
        <button @click="slideLeft" class="text-black text-2xl">‹</button>
        <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 py-4 no-scrollbar">
          <div v-for="item in cards" :key="item.id" class="min-w-full snap-center px-1">
            <div
              class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden border border-[#C5C5C5]">
              <img :src="item.img" :alt="item.title" class="object-cover p-2 h-12" />
              <div class="p-3">
                <h3 class="text-lg font-semibold text-[#010101] mb-1">
                  {{ item.title }}
                </h3>
                <p class="text-xs font-medium text-[#777777]">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button @click="slideRight" class="text-black text-2xl">›</button>
      </div>
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

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 50s linear infinite;
}
</style>
