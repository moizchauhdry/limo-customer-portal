<!-- TopDestination.vue -->
<script setup>
import { ref } from 'vue'
import leftArrow from '@/assets/icons/wesbsite/hero/service5.svg'
import rightArrow from '@/assets/icons/wesbsite/hero/service6.svg'

import destination1 from '@/assets/icons/wesbsite/hero/destination1.svg'
import destination2 from '@/assets/icons/wesbsite/hero/destination2.svg'
import destination3 from '@/assets/icons/wesbsite/hero/destination3.svg'

const images = [
  destination1, destination2, destination3,
  destination1, destination2, destination3, destination1
]

const carousel = ref(null)

/* scroll exactly one card width based on live viewport */
function scrollOneCard(direction) {
  if (!carousel.value) return
  const cardsVisible = window.innerWidth < 768 ? 1 : 4
  const cardWidth = carousel.value.clientWidth / cardsVisible
  carousel.value.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
}

const slideNext = () => scrollOneCard(1)
const slidePrev = () => scrollOneCard(-1);
</script>

<template>
  <section class="px-4 md:px-10 lg:px-10 bg-white mb-10 mt-5 sm:pb-10">
    <div class="max-w-7xl mx-auto relative">
      <!-- heading + arrows -->
      <div class="text-black space-y-4 text-center" data-aos="fade-down" data-aos-duration="1200" data-aos-offset="150"
        data-aos-easing="ease-in-out" data-aos-delay="100">
        <h2 class="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-tight capitalize">
          top destination
        </h2>
        <div class="flex items-center flex-col sm:flex-row gap-4 sm:gap-0">
          <p class="text-sm md:text-lg text-[#626262] font-medium max-w-3xl mx-auto">
            From coast to coast — premium rides, no matter the city.
          </p>
          <div class="hidden sm:flex items-center gap-2 sm:mr-4">
            <button @click="slidePrev"
              class="w-8 h-8 grid place-content-center rounded-full border bg-gray-500 border-gray-300 hover:bg-black transition">
              <img :src="leftArrow" class="w-3 h-3" />
            </button>
            <button @click="slideNext"
              class="w-8 h-8 grid place-content-center rounded-full border bg-black border-gray-300 hover:bg-gray-500 transition">
              <img :src="rightArrow" class="w-3 h-3 rounded" />
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Left Arrow -->
      <button @click="slideNext"
        class="sm:hidden absolute -left-6 top-[62%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-3">
        ‹
      </button>
      <!-- carousel -->
      <div ref="carousel" class="flex overflow-x-auto scroll-smooth no-scrollbar gap-0 mt-4" data-aos="fade-up"
        data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
        <div v-for="(img, i) in images" :key="i" class="w-full md:w-1/4 flex-shrink-0 px-1">
          <img :src="img" class="w-full h-auto rounded-lg border-4 border-[#f3f1f1]" />
        </div>
      </div>
      <!-- Mobile Right Arrow -->
      <button @click="slidePrev"
        class="sm:hidden absolute -right-6 top-[62%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-3">
        ›
      </button>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>