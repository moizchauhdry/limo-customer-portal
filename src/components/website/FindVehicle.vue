<script setup>
import { ref } from "vue";

import card1 from "@/assets/icons/wesbsite/hero/card1.svg";
import card2 from "@/assets/icons/wesbsite/hero/card2.svg";
import card3 from "@/assets/icons/wesbsite/hero/card3.svg";

const carousel = ref(null);

const cards = [
  {
    id: 1,
    title: "First Class Sedan",
    text: "Perfect for Weddings, Luxury Travel and Premium Transfers",
    img: card1,
    popular: true,
    features: [
      "Leather Seats",
      "Climate Control",
      "Premium Sound",
      "Advanced Safety",
    ],
  },
  {
    id: 2,
    title: "Luxury Sedan",
    text: "Our most popular choice for Airport Travel and City Travel",
    img: card2,
    popular: false,
    features: [
      "Leather Seats",
      "Climate Control",
      "Premium Sound",
      "Advanced Safety",
    ],
  },
  {
    id: 3,
    title: "Full Size SUV",
    text: "Perfect for family trips and larger groups",
    img: card3,
    popular: true,
    features: [
      "Leather Seats",
      "Climate Control",
      "Premium Sound",
      "Advanced Safety",
    ],
  },
  {
    id: 1,
    title: "First Class Sedan",
    text: "Perfect for Weddings, Luxury Travel and Premium Transfers",
    img: card1,
    popular: true,
    features: [
      "Leather Seats",
      "Climate Control",
      "Premium Sound",
      "Advanced Safety",
    ],
  },
  {
    id: 2,
    title: "Luxury Sedan",
    text: "Our most popular choice for Airport Travel and City Travel",
    img: card2,
    popular: false,
    features: [
      "Leather Seats",
      "Climate Control",
      "Premium Sound",
      "Advanced Safety",
    ],
  },
];

const visibleCards = () => (window.innerWidth >= 1024 ? 3 : 1);

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
</script>

<template>
  <section
    class="px-8 md:px-10 lg:px-15 py-5 bg-white max-w-7xl w-full mx-auto"
  >
    <!-- Heading block -->
    <div class="text-center mb-8 md:mb-2">
      <h2
        class="text-[36px] lg:text-[60px] font-bold leading-tight text-[#010101]"
      >
        Find Your Perfect <br />Vehicle Type
      </h2>
      <p
        class="mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-5xl mx-auto text-[#626262] font-medium"
      >
        Reliability And Comfort Are Guaranteed. We Have The Latest Model Fleet
        To Ensure A Safe, Sophisticated And Luxury Travel Experience On Every
        Trip.
      </p>
    </div>

    <!-- Carousel wrapper -->
    <div class="relative">
      <!-- Left Arrow -->
      <button
        @click="slideLeft"
        class="absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-2xl md:text-3xl text-black"
      >
        ‹
      </button>

      <!-- Scrollable Cards -->
      <div
        ref="carousel"
        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 no-scrollbar py-4"
      >
        <article
          v-for="card in cards"
          :key="card.id"
          class="snap-center flex-shrink-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#C5C5C5]"
          style="width: 100%; max-width: 350px"
        >
          <div class="relative h-56">
            <img
              :src="card.img"
              :alt="card.title"
              class="object-cover p-2 mt-12 w-full"
            />
          </div>
          <div class="flex-1 flex flex-col p-3">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl md:text-[20px] font-semibold text-[#010101]">
                {{ card.title }}
              </h3>
              <span
                v-if="card.popular"
                class="px-3 text-[8px] font-bold text-white rounded-full"
                style="background-color: #e85134"
                >POPULAR</span
              >
            </div>
            <p class="text-sm mb-2 font-medium text-[#626262]">
              {{ card.text }}
            </p>
            <h4 class="text-md font-bold mb-2 text-[#091A50]">Key Features:</h4>
            <ul
              class="text-sm sm:text-md grid grid-cols-2 gap-1 text-[#626262] font-medium"
            >
              <li v-for="feature in card.features" :key="feature">
                • {{ feature }}
              </li>
            </ul>
          </div>
          <button
            class="mt-auto w-full text-white font-semibold py-1.5 px-4 rounded-md hover:opacity-90 transition-opacity"
            style="background: linear-gradient(to right, #4c4c4c, #000000)"
          >
            Get a Quote
          </button>
        </article>
      </div>

      <!-- Right Arrow -->
      <button
        @click="slideRight"
        class="absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-2xl md:text-3xl text-black"
      >
        ›
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
