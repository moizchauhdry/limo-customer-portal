<template>
  <!-- TRUSTED BY THOUSANDS -->
  <section class="px-4 py-12 md:px-10 lg:px-20 bg-[#FFFFFF] ">
    <div class="max-w-7xl mx-auto flex flex-col">
      <div class="text-black space-y-4 text-center mb-8">
        <h2
          class="text-[28px] md:text-[36px] lg:text-[52px] font-bold leading-tight capitalize"
        >
          how it works
        </h2>
        <p class="text-sm md:text-base text-[#626262] font-medium max-w-3xl mx-auto">
          Book a Ride in 3 simple steps. It’s that easy!
        </p>
      </div>

      <!-- RIGHT: 4 STAT CARDS -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-1 sm:px-14">
        <!-- 4.5 Star -->
        <div class="flex flex-col items-center text-center text-white">
          <img src="@/assets/icons/wesbsite/hero/step1.svg" alt="star" />
          <div class="text-md md:text-2xl font-bold text-black mb-3">
            Choose Your Car
          </div>
          <div class="text-xs md:text-sm text-[#626262] font-medium capitalize">
            Browse our premium fleet and <br />
            select the perfect vehicle for your <br> needs.
          </div>
        </div>

        <!-- 10,000+ Happy Customers -->
        <div class="flex flex-col items-center text-center text-white">
          <img src="@/assets/icons/wesbsite/hero/step2.svg" alt="users" />
          <div class="text-md md:text-2xl font-bold text-black mb-3">
            Book Instantly
          </div>
          <div class="text-xs md:text-sm text-[#626262] font-medium capitalize">
            Complete your reservation in under <br />
            2 minutes with our streamlined <br> process.
          </div>
        </div>

        <!-- 30+ Available Cars -->
        <div class="flex flex-col items-center text-center text-white col-span-2 sm:col-span-1">
          <img src="@/assets/icons/wesbsite/hero/step3.svg" alt="car" />
          <div class="text-md md:text-2xl font-bold text-black mb-3">
            Enjoy your Ride
          </div>
          <div class="text-xs md:text-sm text-[#626262] font-medium">
            Chauffeur assigned to your Ride <br />
            and start your journey.
          </div>
        </div>
      </div>
      <button
        class="flex mx-auto mt-12 whitespace-nowrap bg-[linear-gradient(93.72deg,#3D3D3D_2.95%,#000000_100%)] text-[#FFFFFF] font-semibold px-12 sm:px-24 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Get a Free Quote
      </button>
    </div>
  </section>
</template>
