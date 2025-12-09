<script setup></script>

<template>
  <section
    class="bg-white shadow-xl p-6 rounded-xl max-w-xl sm:ml-auto sm:mt-[-26rem] z-10 relative sm:mr-[2rem]"
  >
    <div
      class="flex gap-2 bg-white rounded-xl w-full border-2 border-[#111111] mb-6 justify-between"
    >
      <!-- Selected Tab -->
      <button
        class="w-[50%] bg-black text-white font-semibold rounded-lg transition-colors text-lg"
      >
        Distance
      </button>

      <!-- Unselected Tab -->
      <button
        class="px-6 py-2 bg-white text-black font-semibold rounded-full transition-colors mx-auto text-lg"
      >
        Hourly
      </button>
    </div>

    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Name</label>
        <span class="text-xs mr-3 text-[#404040]">Jack</span>
      </div>

      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Email</label>
        <span class="text-xs mr-3 text-[#404040]">example@gmail.com</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Date</label>
        <span class="text-xs mr-3 text-[#404040]">Apr 19, 2025</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Time</label>
        <span class="text-xs mr-3 text-[#404040]">08:00 pm</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Pick Up</label>
        <span class="text-xs mr-3 text-[#404040]"
          >From: Airport, Hotel ...</span
        >
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Destination</label>
        <span class="text-xs mr-3 text-[#404040]">To: Airport, Hotel ...</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Number</label>
        <span class="text-xs mr-3 text-[#404040]">(XXX) XXX-XXXX</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Fleet</label>
        <div class="flex items-center gap-1">
          <span class="text-xs text-[#404040]">Black Sedan</span>
          <img
            src="@/assets/icons/wesbsite/hero/dropdown-arrow.svg"
            alt="dropdown arrow"
            class="w-2 h-2 object-contain"
          />
        </div>
      </div>

      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Passengers</label>
        <span class="text-xs mr-3 text-[#404040]">04</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Luggage</label>
        <span class="text-xs mr-3 text-[#404040]">03</span>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Service</label>
        <div class="flex items-center gap-1">
          <span class="text-xs text-[#404040]">AirPort Pick-up</span>
          <img
            src="@/assets/icons/wesbsite/hero/dropdown-arrow.svg"
            alt="dropdown arrow"
            class="w-2 h-2 object-contain"
          />
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full max-w-sm px-3 py-3 border border-[#CCCCCC] rounded-2xl shadow bg-white"
      >
        <label class="font-semibold text-[#7C7C7C]">Travel</label>
        <div class="flex items-center gap-1">
          <span class="text-xs text-[#404040]">One Way </span>
          <img
            src="@/assets/icons/wesbsite/hero/dropdown-arrow.svg"
            alt="dropdown arrow"
            class="w-2 h-2 object-contain"
          />
        </div>
      </div>
      <div class="md:col-span-2 mx-auto">
        <button
          type="submit"
          class="w-full mx-auto bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-16 text-black font-bold py-2 rounded-lg hover:opacity-90 transition"
        >
          Get a Free Quote
        </button>
      </div>
    </form>
  </section>
</template>
