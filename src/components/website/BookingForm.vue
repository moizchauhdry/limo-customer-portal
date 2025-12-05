<script setup></script>

<template>
  <section
    class="bg-white shadow-xl p-6 rounded-xl max-w-xl sm:ml-auto sm:mt-[-26rem] z-10 relative sm:mr-[2rem]"
  >
    <div class="flex gap-4 mb-4">
      <button class="px-4 py-2 font-semibold border-b-2 border-yellow-500">
        Distance
      </button>
      <button class="px-4 py-2 text-gray-500">Hourly</button>
    </div>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="email"
        placeholder="Email"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="date"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="time"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="text"
        placeholder="Pickup"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="text"
        placeholder="Destination"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="tel"
        placeholder="Number"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <select class="input rounded-xl border shadow border-[#CCCCCC]">
        <option>Black Sedan</option>
      </select>
      <input
        type="number"
        placeholder="Passengers"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <input
        type="number"
        placeholder="Luggage"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <select class="input rounded-xl border shadow border-[#CCCCCC]">
        <option>Service</option>
      </select>
      <input
        type="number"
        placeholder="Travel"
        class="input rounded-xl border shadow border-[#CCCCCC]"
      />
      <div class="md:col-span-2 mx-auto">
        <button
          type="submit"
          class="w-full mx-auto bg-[linear-gradient(93.72deg,#FAB707_2.95%,#FCDA19_100%)] px-12 text-black font-bold py-3 rounded-lg hover:opacity-90 transition"
        >
          Get a Free Quote
        </button>
      </div>
    </form>
  </section>
</template>
