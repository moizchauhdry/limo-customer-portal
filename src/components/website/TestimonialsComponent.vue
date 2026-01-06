<script setup>
// stars helper
const stars = '★★★★★';
import avatar1 from "@/assets/icons/wesbsite/hero/review4.svg";
const testimonials = [
  {
    id: 1,
    text: 'I rented the McLaren 765LT for a weekend, and it was absolutely amazing. The car was in perfect condition, and the booking process was super easy.',
    name: 'EVAN B.',
    avatar:avatar1,
  },
  {
    id: 2,
    text: 'I rented a sedan for a week and it was perfect for my family trip. The vehicle was comfortable, clean, and easy to drive.',
    name: 'SARAH T.',
    avatar:avatar1,
  },
  {
    id: 3,
    text: 'Rented a Mercedes-Benz S-Class for a business trip. The staff made the entire process so easy and efficient, and I felt like I was treated like a VIP.',
    name: 'DAVID K.',
    avatar:avatar1,
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <!-- heading -->
    <div
      class="text-center mb-12"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <h2 class="text-[40px] lg:text-[60px] font-medium text-[#010101]">
        Testimonials
      </h2>
    </div>

    <!-- testimonials -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <article
        v-for="t in testimonials"
        :key="t.id"
        class="flex flex-col items-start text-start"
      >
        <!-- stars -->
        <div class="text-[#fabf24] text-lg mb-4">
          {{ stars }}
        </div>

        <!-- text -->
        <p
          class="text-sm text-[#202020] leading-relaxed mb-6"
        >
          {{ t.text }}
        </p>

        <!-- avatar -->
         <div class="flex flex-row items-center gap-4">
        <img
          :src="t.avatar"
          alt="customer"
          class="w-10 h-10 rounded-full  object-cover"
        />

        <!-- name -->
        <p class="text-xs font-semibold tracking-widest text-[#010101]">
          {{ t.name }}
        </p>
        </div>
      </article>
    </div>
  </section>
</template>
