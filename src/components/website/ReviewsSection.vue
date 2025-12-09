<script setup>
import avatar1 from "@/assets/icons/wesbsite/hero/review4.svg";
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
];
</script>

<template>
  <!-- MAIN SECTION -->
  <section class="bg-white py-16 px-6 lg:px-10 max-w-7xl w-full mx-auto">
    <!-- TOP TEXT -->
    <div class="text-center mb-6">
      <h2 class="text-xl md:text-4xl font-medium">Read Reviews</h2>
      <h3 class="text-3xl md:text-4xl font-semibold mt-2">
        Ride With Confidence
      </h3>

      <!-- Rating Row -->
      <div class="flex items-center justify-center gap-5 mt-5 text-gray-700">
        <p class="text-lg font-medium">4.2/5</p>

        <img
          src="@/assets/icons/wesbsite/hero/review2.svg"
          class="w-10 h-10"
          alt="Google Rating"
        />

        <img
          src="@/assets/icons/wesbsite/hero/review3.svg"
          class="w-10 h-10"
          alt="Star Icon"
        />

        <p class="text-lg font-medium">Based on 5210 reviews</p>
      </div>
    </div>

    <!-- MAIN FLEX WRAPPER -->
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <!-- LEFT SIDE QUOTE -->
      <div class="flex flex-col justify-start items-start gap-6">
        <img
          src="@/assets/icons/wesbsite/hero/review1.svg"
          alt="quote"
          class="w-20 h-14"
        />

        <p
          class="text-2xl font-semibold text-[#000001] leading-snug font-inter"
        >
          What Our<br />Customers Are<br />Saying
        </p>
        
        <!-- Arrows + Progress Bar Row -->
        <div class="flex items-center mb-4">
          <!-- Left Arrow -->
          <button class="p-1.5 rounded-full">
            <img
              src="@/assets/icons/wesbsite/hero/left-arrow.svg"
              class="w-4"
            />
          </button>

          <!-- Progress Bar -->
          <div
            class="relative flex-1 w-24 h-1 border bg-gray-300 overflow-hidden"
          >
            <!-- Progress Segment -->
            <div class="absolute left-0 top-0 h-full w-[27%] bg-black"></div>
          </div>

          <!-- Right Arrow -->
          <button class="p-1.5 rounded-full">
            <img
              src="@/assets/icons/wesbsite/hero/right-arrow.svg"
              class="w-4"
            />
          </button>
        </div>
      </div>
      <!-- RIGHT SIDE CARDS -->
      <div
        class="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div v-for="item in reviews" :key="item.id" class="relative">
          <!-- CARD BODY -->
          <div
            class="bg-white border border-gray-200 rounded-xl p-3 pb-10 relative shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            <p class="text-[rgba(32,32,32,1)] h-[160px] text-sm">
              {{ item.text }}
            </p>

            <!-- NOTCH (Speech bubble tail) -->
            <div
              class="absolute left-2 -bottom-1 w-9 h-9 bg-white rotate-45"
            ></div>
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
    </div>
  </section>
</template>
