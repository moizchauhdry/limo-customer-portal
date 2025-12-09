<!-- HeroSection.vue -->
<script setup>
import heroBg from "@/assets/icons/wesbsite/hero/hero-bg.svg";
</script>

<template>
  <section
    class="relative bg-cover bg-center w-full max-w-7xl mx-auto text-white pt-28 pb-12 px-6"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <div class="max-w-xl mt-4">
      <span class="text-sm bg-[#99979959] backdrop-blur-[22.74235725402832px] px-5 py-3 rounded-full font-inter"
        >Rated #1 Car And Limo Service</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-4 mb-2">
        Premium Car Service <span class="text-[#FDD31C]">Made Simple</span>
      </h1>
      <p class="mb-4">
        We Provide Luxury And Comfort To Travel Like You Never Experienced
        Before. Our Professional Chauffeurs And Modern Black Fleet Offer A
        Smooth, Stress-Free Journey Every Time.
      </p>

      <div class="flex flex-col md:flex-row md:items-center md:gap-6 mb-8">
        <a
          href="tel:+18888959619"
          class="flex items-center gap-2 bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-6 py-3 rounded-lg font-semibold text-black"
        >
          <img src="@/assets/icons/wesbsite/hero/phone.svg" class="h-5 w-5" />
          +1 (888) 8959619
        </a>
      </div>

      <ul class="grid grid-cols-2 gap-3 text-md mt-4">
        <li
          class="flex items-center gap-2 backdrop-blur-[22.74235725402832px] border border-1-[#FEFEFE] bg-[#99979959] px-3 py-4 rounded-lg"
        >
          <img src="@/assets/icons/wesbsite/hero/insured.svg" class="h-6 w-6" />
          Fully Licensed & Insured
        </li>
        <li
          class="flex items-center gap-2 backdrop-blur-[22.74235725402832px] border border-1-[#FEFEFE] bg-[#99979959] px-3 py-4 rounded-lg"
        >
          <img src="@/assets/icons/wesbsite/hero/model.svg" class="h-6 w-6" />
          Latest Model Fleet
        </li>
        <li
          class="flex items-center gap-2 backdrop-blur-[22.74235725402832px] border border-1-[#FEFEFE] bg-[#99979959] px-3 py-4 rounded-lg"
        >
          <img src="@/assets/icons/wesbsite/hero/license.svg" class="h-6 w-6" />
          Licensed Chauffeurs
        </li>
        <li
          class="flex items-center gap-2 backdrop-blur-[22.74235725402832px] border border-1-[#FEFEFE] bg-[#99979959] px-3 py-4 rounded-lg"
        >
          <img src="@/assets/icons/wesbsite/hero/plane.svg" class="h-6 w-6" />
          Flight Monitoring
        </li>
      </ul>
    </div>
  </section>
</template>
