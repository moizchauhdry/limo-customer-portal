<script setup>
import { ref } from "vue";

import card1 from "@/assets/icons/services/service1.svg";
import card2 from "@/assets/icons/services/service2.svg";
import card3 from "@/assets/icons/services/service3.svg";
import card4 from "@/assets/icons/services/service4.svg";
import card5 from "@/assets/icons/services/service5.svg";
import card6 from "@/assets/icons/services/service6.svg";
import card7 from "@/assets/icons/services/service7.svg";
import card8 from "@/assets/icons/services/service8.svg";
import card9 from "@/assets/icons/services/service9.svg";


const carousel = ref(null);
const imageIndex = ref({});

const cards = [
    {
        id: 1,
        title: "Airport Transfers",
        text: "Experience seamless airport travel with punctual chauffeurs, flight tracking, and luxury vehicles ensuring comfort, reliability, and stress-free arrivals every time.",
        img: card1,
    },
    {
        id: 2,
        title: "Hourly Car Service",
        text: "Book your chauffeur on Hourly rates with urban elite limo offering safety, comfort, discretion, and timely service for all your travel needs",
        img: card2,
    },
    {
        id: 3,
        title: "Wedding Car Service",
        text: "Celebrate your big moments in elegance with luxurious limos, courteous chauffeurs, and premium service for weddings, anniversaries, and parties.",
        img: card3,
    },
    {
        id: 4,
        title: "Corporate & Business Transfers",
        text: "Arrive professionally with executive chauffeurs ensuring punctual, comfortable, and private travel for business meetings, corporate events, or conferences.",
        img: card4,
    },
    {
        id: 5,
        title: "City to City Transfers",
        text: "Travel smoothly between cities with professional chauffeurs, luxury cars, and personalized routes offering unmatched comfort and convenience throughout.",
        img: card5,
    },
    {
        id: 6,
        title: "Night Out Service",
        text: "Enjoy complete flexibility with night out chauffeur service ensuring safety, comfort, and premium luxury throughout your entire night",
        img: card6,
    },
    {
        id: 7,
        title: "Events & Entertainment Service",
        text: "Premium car service for concerts, events, or shows with chauffeurs delivering luxury, safety, and reliable group travel every time.",
        img: card7,
    },
    {
        id: 8,
        title: "Pier & Cruise Transfers",
        text: "Begin your cruise travel stress-free with timely, comfortable port transfers provided by professional, courteous chauffeurs ensuring smooth travel.",
        img: card8,
    },
    {
        id: 9,
        title: "Prom & Parties Transfers",
        text: "Make prom and parties unforgettable with luxury vehicles, professional chauffeurs, and safe, premium rides ensuring a night full of memories.",
        img: card9,
    },
];


cards.forEach((card) => {
    imageIndex.value[card.id] = 0;
});

const visibleCards = () => (window.innerWidth >= 1024 ? 3 : 1);

const slideLeft = () => {
    if (carousel.value) {
        carousel.value.scrollBy({
            left: -carousel.value.clientWidth / visibleCards(),
            behavior: "smooth",
        });
    }
};

const slideRight = () => {
    if (carousel.value) {
        carousel.value.scrollBy({
            left: carousel.value.clientWidth / visibleCards(),
            behavior: "smooth",
        });
    }
};

</script>

<template>
    <section class="px-8 md:px-10 lg:px-15 py-5 bg-white max-w-7xl w-full mx-auto">
        <!-- Heading block -->
        <div class="text-center mb-4 md:mb-2" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
            data-aos-easing="ease-in-out" data-aos-delay="100">
            <h2 class="text-[26px] lg:text-[60px] font-bold leading-tight text-[#010101]">
                Explore our wide range services
            </h2>
            <p
                class="mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-5xl mx-auto text-[#626262] font-medium capitalize">
                Experience the future of mobility with our cutting edge fleet. premium vehicles & seamless experience
            </p>
        </div>

        <!-- Carousel wrapper -->
        <div class="relative" data-aos="fade-down" data-aos-duration="1200" data-aos-offset="150"
            data-aos-easing="ease-in-out" data-aos-delay="100">
            <!-- Left Arrow -->
            <button @click="slideLeft"
                class="sm:hidden absolute -left-6 top-1/2 -translate-y-1/2 z-20 text-2xl md:text-3xl text-black">
                ‹
            </button>

            <!-- Scrollable Cards -->
            <div ref="carousel"
                class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth sm:grid grid-cols-3 gap-6 no-scrollbar py-4">
                <article v-for="card in cards" :key="card.id" class="snap-center flex-shrink-0 bg-white  flex flex-col overflow-hidden 
                  w-[100%] sm:w-[380px]">

                    <div class="relative overflow-hidden rounded-t-xl">
                        <!-- IMAGE SLIDES -->
                        <img :src="card.img" alt="service" class="w-full object-cover" />
                    </div>
                    <div class="flex-1 flex flex-col mt-2">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl md:text-[20px] font-semibold text-[#010101]">
                                {{ card.title }} </h3>
                        </div>
                        <p class="text-xs mb-4 font-light text-[#362a2a]">
                            {{ card.text }}
                        </p>
                    </div>
                    <button
                        class="mt-auto w-full text-white font-semibold py-1.5 px-4 rounded-md hover:opacity-90 transition-opacity"
                        style="background: linear-gradient(to right, #4c4c4c, #000000)">
                        Get a Quote
                    </button>
                </article>
            </div>

            <!-- Right Arrow -->
            <button @click="slideRight"
                class="sm:hidden absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-2xl md:text-3xl text-black">
                ›
            </button>
        </div>
    </section>
</template>
