<script setup>
import { ref } from "vue";
import avatar1 from "@/assets/icons/wesbsite/hero/review4.svg";

const carousel = ref(null);
const progress = ref(30);
const step = 10;

const reviews = [
  {
    id: 1,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 3,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 1,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 3,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 3,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 1,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 2,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
  {
    id: 3,
    text: "Had a great experience traveling from Amaganstett to Islip Airport. Easy booking, reasonable rates, and the car was very well maintained. Couldn't ask for more!",
    name: "Karan",
    time: "02 days ago",
    avatar: avatar1,
  },
];

const visibleCards = () => (window.innerWidth >= 1024 ? 3 : 1);

const slideLeft = () => {
  progress.value = Math.max(0, progress.value - step);
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -carousel.value.clientWidth / visibleCards(),
      behavior: "smooth",
    });
  }
};

const slideRight = () => {
  progress.value = Math.min(100, progress.value + step)
  if (carousel.value) {
    carousel.value.scrollBy({
      left: carousel.value.clientWidth / visibleCards(),
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <!-- MAIN SECTION -->
  <section class="bg-white py-8 px-6 lg:px-10 max-w-7xl w-full mx-auto">
    <!-- TOP TEXT -->
    <div class="text-center mb-6 mx-auto flex flex-col space-y-0 sm:space-y-2" data-aos="fade-up"
      data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <h2 class="text-[28px] md:text-4xl font-medium">Read Reviews</h2>
      <h3 class="text-[28px] md:text-4xl font-semibold mt-2 whitespace-nowrap">
        Ride With Confidence
      </h3>

      <!-- Rating Row -->
      <div class="flex items-center justify-center gap-4 sm:gap-5 mt-5 text-gray-700 sm:mt-4">
        <p class="text-sm sm:text-lg font-medium">4.2/5</p>

        <img src="@/assets/icons/wesbsite/hero/review2.svg" class="w-7 h-7 sm:w-10 sm:h-10" alt="Google Rating" />

        <img src="@/assets/icons/wesbsite/hero/review3.svg" class="w-7 h-7 sm:w-10 sm:h-10" alt="Star Icon" />

        <p class="text-sm sm:text-lg font-medium">Based on 5210 reviews</p>
      </div>
    </div>

    <!-- MAIN FLEX WRAPPER -->
    <div class="relative">
      <div class="grid grid-cols-1 lg:grid-cols-5">
        <!-- LEFT SIDE QUOTE -->
        <div class="flex flex-col justify-start items-start gap-6 sm:mx-0" data-aos="fade-up" data-aos-duration="1200"
          data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
          <img src="@/assets/icons/wesbsite/hero/review1.svg" alt="quote" class="w-20 h-14 mx-auto sm:mx-0" />

          <p
            class="text-2xl font-semibold text-[#000001] leading-snug font-inter mx-auto sm:mx-0 text-center sm:text-start mb-5 sm:mb-0">
            What Our Customers Are<br />Saying
          </p>

          <!-- Arrows + Progress Bar Row -->
          <div class="hidden sm:flex mx-auto sm:mx-0 items-center mb-4">
            <!-- Left Arrow -->
            <button @click="slideLeft" class="p-1.5 rounded-full">
              <img src="@/assets/icons/wesbsite/hero/left-arrow.svg" class="w-4" />
            </button>

            <!-- Progress Bar -->
            <div class="relative flex-1 w-24 h-1 border bg-gray-300 overflow-hidden">
              <!-- Progress Segment -->
              <div class="absolute left-0 top-0 h-full w-[27%] bg-black" :style="{ width: progress + '%' }"></div>
            </div>

            <!-- Right Arrow -->
            <button @click="slideRight" class="p-1.5 rounded-full">
              <img src="@/assets/icons/wesbsite/hero/right-arrow.svg" class="w-4" />
            </button>
          </div>
        </div>
        <!-- Mobile Left Arrow -->
        <button @click="slideLeft"
          class="sm:hidden absolute -left-6 top-[62%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-2">
          ‹
        </button>
        <!-- RIGHT SIDE CARDS -->
        <div ref="carousel"
          class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-6 col-span-4 px-4 justify-center items-center"
          data-aos="fade-down" data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out"
          data-aos-delay="100">
          <div v-for="item in reviews" :key="item.id" class="relative snap-start ">
            <!-- CARD BODY -->
            <div class="bg-white border border-gray-300 rounded-xl p-3 pb-10 relative shadow-[0_4px_20px_rgba(0,0,0,0.10)] 
             w-[86vw] sm:w-[300px] snap-start">

              <p class="text-[rgba(32,32,32,1)] h-[160px] text-sm">
                {{ item.text }}
              </p>

              <!-- NOTCH (Speech bubble tail) -->
              <div class="absolute left-2 -bottom-1 w-9 h-9 bg-white rotate-45"></div>
            </div>

            <!-- USER INFO OUTSIDE THE CARD -->
            <div class="flex items-center gap-2 mt-3 ml-10">
              <img :src="item.avatar" class="w-10 h-10 rounded-full" />
              <div>
                <p class="font-semibold text-gray-900">{{ item.name }}</p>
                <p class="text-gray-500 text-[9px]">{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Right Arrow -->
        <button @click="slideRight"
          class="sm:hidden absolute -right-6 top-[62%] -translate-y-1/2 z-20 text-2xl md:text-3xl text-black px-2">
          ›
        </button>
      </div>
    </div>
  </section>
</template>
