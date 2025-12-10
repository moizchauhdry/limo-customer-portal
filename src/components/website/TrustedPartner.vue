<template>
  <!-- Block-1: image RIGHT -->
  <section class="px-4 py-10 md:px-10 lg:px-20 bg-[#FFFFFF]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-16">
      <!-- TEXT -->
      <div class="order-1 lg:order-none">
        <h2 class="text-[32px] md:text-[36px] lg:text-[42px] font-medium leading-tight text-center sm:text-start" style="color:#010101">
          Your Trusted Car <br class="hidden md:block">Rental Partner
        </h2>
        <p class="mt-2 text-sm md:text-base lg:text-lg text-[#626262] font-medium text-center sm:text-start">
          Since 2008, RentRide Has Been Providing Exceptional Car Rental Services To Customers Worldwide. We Pride Ourselves On Offering A Premium Fleet Of Vehicles, Outstanding Customer Service, And Competitive Pricing.
        </p>
        <button class="flex mx-auto sm:mx-0 mt-6 w-max font-semibold px-12 py-2 rounded-lg hover:opacity-90 transition-opacity bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] text-[#010101]" >
          Browse Luxury Sedans
        </button>
      </div>

      <!-- IMAGE -->
      <div class="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden order-2 lg:order-none">
        <img src="@/assets/icons/wesbsite/hero/trust1.svg" alt="Luxury Sedan" class="w-full h-full object-cover">
      </div>
    </div>
  </section>

  <!-- Block-2: image LEFT -->
  <section class="px-4 py-0 sm:py-16 md:px-10 lg:px-20 bg-[#FFFFFF]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-10">
      <!-- IMAGE -->
      <div class="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
        <img src="@/assets/icons/wesbsite/hero/trust2.svg" alt="Premium Fleet" class="w-full h-full object-cover">
      </div>

      <!-- TEXT -->
      <div>
        <h2 class="text-[32px] md:text-[36px] lg:text-[42px] font-medium leading-tight text-center sm:text-start" style="color:#010101">
         Your Trusted Car <br class="hidden md:block">Rental Partner
        </h2>
        <p class="mt-2 text-sm md:text-base lg:text-lg text-[#626262] font-medium text-center sm:text-start" >
          Since 2008, RentRide Has Been Providing Exceptional Car Rental Services To Customers Worldwide. We Pride Ourselves On Offering A Premium Fleet Of Vehicles, Outstanding Customer Service, And Competitive Pricing.
        </p>
        <button class="flex mx-auto sm:mx-0 mt-6 w-max bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] text-[#010101] font-semibold px-12 py-3 rounded-lg hover:opacity-90 transition-opacity mb-10 sm:mb-0">
          Browse luxury sedans
        </button>
      </div>
    </div>
  </section>
</template>