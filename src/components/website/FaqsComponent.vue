<script setup>
import { ref } from "vue";

const open = ref(null);
function toggle(i) {
  open.value = open.value === i ? null : i;
}

const faqs = ref([
  {
    q: "Is there any extra charges for early morning (AM) pickup?",
    a: "There are no additional charges for early morning pickups. Our rates remain the same 24/7.",
  },
  {
    q: "Is a last-minute change to my reservation allowed?",
    a: "Yes, we allow last-minute changes subject to vehicle availability.",
  },
  {
    q: "What is the maximum deadline to make a reservation?",
    a: "Reservations can be made up to 2 hours before the requested pickup time.",
  },
  {
    q: "Can the driver come into my building to pick up my luggage?",
    a: "Absolutely, drivers are happy to assist you inside your building.",
  },
  {
    q: "What are the passenger and luggage capacities of the various vehicles?",
    a: "Sedans: 3 pax + 3 bags | SUVs: 6 pax + 6 bags | Vans: 14 pax + 14 bags.",
  },
  {
    q: "Where should I meet the driver at the airport?",
    a: "Domestic flights: baggage claim. International flights: outside customs.",
  },
]);
</script>
<template>
  <!-- FAQ SECTION : image-right layout -->
  <section class="px-4 py-6 sm:py-16 md:px-10 lg:px-20 bg-white">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-8"
    >
      <!-- LEFT : FAQ heading + accordion -->
      <div class="flex flex-col col-span-2"
       data-aos="fade-down" data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out"
    data-aos-delay="100">
        <!-- HEADING -->
        <div class="flex items-center gap-3 mb-5">
          <h2 class="text-4xl md:text-5xl sm:font-bold text-black mx-auto sm:mx-0">FAQS</h2>
        </div>

        <!-- ACCORDION -->
        <div class="space-y-4"
        >
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="border border-[#D5D5D5] rounded-xl overflow-hidden"
          >
            <button
              @click="toggle(idx)"
              class="w-full flex items-center justify-between px-3 sm:px-5 py-4 hover:bg-gray-100 transition"
            >
              <span class="text-left text-xs md:text-base font-semibold text-black font-poppins">
                {{ faq.q }}
              </span>
              <span class="text-xl text-black font-bold ml-4 shrink-0">
                {{ open === idx ? '−' : '+' }}
              </span>
            </button>

            <transition
              enter-active-class="duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="open === idx" class="px-2 py-2 text-xs sm:text-sm text-[#000000] font-medium">
                {{ faq.a }}
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- RIGHT : PICTURE -->
     <div class="col-span-1 w-screen sm:w-auto -mx-3 pl-[0.75rem] pr-[1.2rem] sm:px-0 sm:mx-0 h-auto rounded-2xl overflow-hidden lg:mt-10"
     data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150" data-aos-easing="ease-in-out"
    data-aos-delay="100">
        <img
          src="@/assets/icons/wesbsite/hero/faq.svg"
          alt="FAQ car"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
