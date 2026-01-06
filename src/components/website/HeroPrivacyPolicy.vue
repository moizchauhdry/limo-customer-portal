<script setup>
import heroBg from '@/assets/icons/privacy/hero-privacy.svg';
</script>

<template>
  <section
    class="
      relative w-full mx-auto
      text-white
      pt-20 sm:pt-28 pb-12 sm:px-6
      bg-cover bg-center bg-no-repeat
      flex items-center justify-center mt-16
    "
    data-aos="fade-down"
    data-aos-duration="1200"
    data-aos-offset="150"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
    :style="{ backgroundImage: `url(${heroBg})`, minHeight: '550px' }"
  >
    <!-- optional content -->
  </section>
</template>