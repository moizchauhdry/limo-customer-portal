<template>
  <section
    class="px-4 md:px-10 lg:px-15 py-8 bg-white max-w-7xl w-full mx-auto"
  >
    <!-- Heading block -->
    <div class="text-center mb-12 md:mb-2">
      <h2
        class="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-tight"
        style="color: #010101"
      >
        Find Your Perfect <br />
        Vehicle Type
      </h2>
      <p
        class="mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-5xl mx-auto text-[#626262] font-medium"
      >
        Reliability And Comfort Are Guaranteed. We Have The Latest Model Fleet
        To Ensure A Safe, Sophisticated And Luxury Travel Experience On Every
        Trip.
      </p>
    </div>

    <!-- Vehicle cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
      <!-- Card 1 : Full Size SUV -->
      <article
        class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#C5C5C5]"
      >
        <div class="relative h-56">
          <img
            src="@/assets/icons/wesbsite/hero/card3.svg"
            alt="Full Size SUV"
            class="object-cover p-2 mt-12"
          />
        </div>

        <div class="flex-1 flex flex-col">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <h3
                class="text-xl md:text-[20px] font-semibold"
                style="color: #010101"
              >
                First Class Sedan
              </h3>
              <span
                class="px-3 mr-[3rem] text-[8px] font-bold text-white rounded-full"
                style="background-color: #e85134"
              >
                POPULAR
              </span>
            </div>
            <p class="text-sm mb-2 font-medium text-[#626262]">
              Perfect for Weddings, Luxury Travel and Premium Transfers
            </p>

            <h4 class="text-md font-bold mb-2 text-[#091A50]">
              Key Features:
            </h4>
            <ul
              class="text-md grid grid-cols-2 justify-center align-center text-[#626262] font-medium"
            >
              <li>• Leather Seats</li>
              <li>• Climate Control</li>
              <li>• Premium Sound</li>
              <li>• Advanced Safety</li>
            </ul>
          </div>
          <button
            class="mt-auto w-full text-white font-semibold py-1.5 px-4 rounded-md hover:opacity-90 transition-opacity"
            style="background: linear-gradient(to right, #4c4c4c, #000000)"
          >
            Get a Quote
          </button>
        </div>
      </article>

      <!-- Card 2 : Luxury Sedan -->
      <article
        class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#C5C5C5]"
      >
        <div class="relative h-56">
          <img
            src="@/assets/icons/wesbsite/hero/card2.svg"
            alt="Full Size SUV"
            class="object-cover p-2 mt-12"
          />
        </div>

        <div class="flex-1 flex flex-col">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <h3
                class="text-xl md:text-[20px] font-semibold"
                style="color: #010101"
              >
                Luxury Sedan
              </h3>
              <!-- <span
                class="px-2 py-0.5 text-[10px] font-bold text-white rounded-full"
                style="background-color: #e85134"
              >
                POPULAR
              </span> -->
            </div>
            <p class="text-sm mb-2 text-[#626262] font-medium">
              Our most popular choice for Airport Travel and City Travel
            </p>

            <h4 class="text-md font-bold mb-2 text-[#091A50]">
              Key Features:
            </h4>
            <ul
              class="text-md grid grid-cols-2 justify-center align-center"
              style="color: #626262"
            >
              <li>• Leather Seats</li>
              <li>• Climate Control</li>
              <li>• Premium Sound</li>
              <li>• Advanced Safety</li>
            </ul>
          </div>
          <button
            class="mt-auto w-full text-white font-semibold py-1.5 px-4 rounded-md hover:opacity-90 transition-opacity"
            style="background: linear-gradient(to right, #4c4c4c, #000000)"
          >
            Get a Quote
          </button>
        </div>
      </article>

      <!-- Card 3 : First Class Sedan -->
      <article
        class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#C5C5C5]"
      >
        <div class="relative h-56">
          <img
            src="@/assets/icons/wesbsite/hero/card3.svg"
            alt="Full Size SUV"
            class="object-cover p-2 mt-12"
          />
        </div>

        <div class="flex-1 flex flex-col">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <h3
                class="text-xl md:text-[20px] font-semibold"
                style="color: #010101"
              >
                First Class Sedan
              </h3>
               <span
                class="px-3 mr-[3rem] text-[8px] font-bold text-white rounded-full"
                style="background-color: #e85134"
              >
                POPULAR
              </span>
            </div>
            <p class="text-sm mb-2 font-medium text-[#626262]">
              Perfect for Weddings, Luxury Travel and Premium Transfers
            </p>

            <h4 class="text-md font-bold mb-2 text-[#091A50]">
              Key Features:
            </h4>
            <ul
              class="text-md grid grid-cols-2 justify-center align-center"
              style="color: #626262"
            >
              <li>• Leather Seats</li>
              <li>• Climate Control</li>
              <li>• Premium Sound</li>
              <li>• Advanced Safety</li>
            </ul>
          </div>
          <button
            class="mt-auto w-full text-white font-semibold py-1.5 px-4 rounded-md hover:opacity-90 transition-opacity"
            style="background: linear-gradient(to right, #4c4c4c, #000000)"
          >
            Get a Quote
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
/* props or data can be added here if you need dynamic content later */
</script>
