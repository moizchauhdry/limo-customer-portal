<script setup>
import { ref, onMounted } from "vue";

import service1 from "@/assets/icons/wesbsite/hero/service1.svg";
import service2 from "@/assets/icons/wesbsite/hero/service2.svg";
import service3 from "@/assets/icons/wesbsite/hero/service3.svg";
import service4 from "@/assets/icons/wesbsite/hero/service4.svg";
import leftArrow from "@/assets/icons/wesbsite/hero/service5.svg";
import rightArrow from "@/assets/icons/wesbsite/hero/service6.svg";

// REFS
const carousel = ref(null);
const cardWidth = ref(0);

// SERVICES
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
    id: 5,
    image: service3,
    title: "Wedding Car Service",
    desc: "Luxury service for weddings, transfer, and special occasions.",
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
    id: 5,
    image: service3,
    title: "Wedding Car Service",
    desc: "Luxury service for weddings, transfer, and special occasions.",
  },
];

// Detect exact card width based on first card
onMounted(() => {
  const firstCard = document.querySelector(".service-card");
  if (firstCard) {
    // gap-4 = 16px so add it for exact scroll
    cardWidth.value = firstCard.clientWidth + 16;
  }
});

// Slide Functions
const slideLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -cardWidth.value,
      behavior: "smooth",
    });
  }
};

const slideRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: cardWidth.value,
      behavior: "smooth",
    });
  }
};
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
          class="mt-2 text-lg text-[#46464D] font-medium font-inter text-center sm:text-start mb-4"
        >
          From airport rides to city travel, we’ve got every trip covered with
          comfort and style.
        </p>
      </div>

      <!-- ARROW BUTTONS (DESKTOP) -->
      <div class="hidden sm:flex items-center gap-2 mr-4">
        <button
          @click="slideLeft"
          class="w-8 h-8 flex items-center justify-center rounded-full border bg-gray-500 border-gray-300 hover:bg-black transition"
        >
          <img :src="leftArrow" class="w-3 h-3" />
        </button>

        <button
          @click="slideRight"
          class="w-8 h-8 flex items-center justify-center rounded-full border bg-black border-gray-300 hover:bg-gray-500 transition"
        >
          <img :src="rightArrow" class="w-3 h-3 rounded" />
        </button>
      </div>
    </div>

    <!-- SERVICE CARDS CAROUSEL -->
    <div class="relative">
      
      <!-- Mobile Left Arrow -->
      <button
        @click="slideLeft"
        class="sm:hidden absolute -left-6 top-[30%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-2"
      >
        ‹
      </button>

      <!-- SCROLLABLE WRAPPER -->
      <div
        ref="carousel"
        class="flex overflow-x-auto no-scrollbar scroll-smooth rounded-xl mx-auto w-full gap-4"
      >
        <div
          v-for="item in services"
          :key="item.id"
          class="service-card"
        >
          <!-- IMAGE WRAPPER -->
          <div class="h-[162px] w-[300px] sm:w-[284px] rounded-xl mx-auto overflow-hidden">
            <img :src="item.image" class="object-cover w-full h-full" />
          </div>

          <!-- TEXT -->
          <div class="mt-4 sm:mt-0">
            <h3 class="text-xl font-semibold mt-4 text-black text-center sm:text-start">
              {{ item.title }}
            </h3>

            <p
              class="text-[#46464D] font-normal mt-1 font-poppins text-center sm:text-start w-[80%] sm:w-full mx-auto sm:mx-0 text-sm"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Right Arrow -->
      <button
        @click="slideRight"
        class="sm:hidden absolute -right-6 top-[30%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-2"
      >
        ›
      </button>
    </div>
  </section>
</template>
