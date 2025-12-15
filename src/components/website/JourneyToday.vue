<template>
  <!-- START YOUR JOURNEY TODAY -->
  <section class="relative sm:py-10 overflow-hidden w-full">

    <!-- LEFT : CAR 1 (Desktop only) -->
    <div class="hidden sm:flex absolute top-1/2 left-0 transform -translate-y-1/2 z-10" data-aos="fade-right"
      data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <img src="@/assets/icons/wesbsite/hero/journey2.svg" alt="car 1" class="lg:w-[337px] object-contain" />
    </div>

    <!-- RIGHT : CAR 2 (Desktop only) -->
    <div class="hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 z-10" data-aos="fade-left"
      data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <img src="@/assets/icons/wesbsite/hero/journey1.svg" alt="car 2" class="lg:w-[337px] xl:w-[437] object-contain" />
    </div>

    <!-- CENTER : TEXT BOX -->
    <div class="relative z-0  bg-[#E5E5E5] rounded-xl py-6 sm:py-20 md:px-10 lg:px-20 shadow-lg" data-aos="fade-up"
      data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <div class="text-center space-y-3 max-w-7xl mx-auto">
        <h2 class="text-[26px] md:text-[44px] lg:text-[50px] text-[#010101] leading-tight font-medium">
          Start Your Journey Today
        </h2>

        <p class="text-sm md:text-base text-[rgba(32,32,32,1)] max-w-xs sm:max-w-xl mx-auto font-medium">
          Join Thousands Of Satisfied Customers And Experience Premium Car Rental Like Never Before.
        </p>

        <button class="bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] 
                 text-[#010101] font-extrabold font-rethink 
                 px-16 sm:px-28 py-2 rounded-lg hover:opacity-90 transition-opacity">
          BOOK NOW!
        </button>
      </div>

      <!-- MOBILE CARS INSIDE BOX -->
      <div class="flex sm:hidden justify-between mt-10">
        <img src="@/assets/icons/wesbsite/hero/journey2.svg" alt="car mobile left" class="w-[45%] object-contain" />
        <img src="@/assets/icons/wesbsite/hero/journey1.svg" alt="car mobile right" class="w-[45%] object-contain" />
      </div>
    </div>
  </section>
</template>
