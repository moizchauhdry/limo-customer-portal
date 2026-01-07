<script setup>
import { ref } from "vue";

import card1 from "@/assets/icons/wesbsite/hero/card1.svg";
import card2 from "@/assets/icons/wesbsite/hero/card2.svg";
import card3 from "@/assets/icons/wesbsite/hero/card3.svg";


const carousel = ref(null);
const imageIndex = ref({});

const cards = [
    {
        id: 1,
        title: "First Class Sedan",
        text: "Perfect for Weddings, Luxury Travel and Premium Transfers",
        img: [card1, card2, card3],
        popular: true,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
    },
    {
        id: 2,
        title: "Luxury Sedan",
        text: "Our most popular choice for Airport Travel and City Travel",
        img: [card2, card1, card3],
        popular: false,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
    },
    {
        id: 3,
        title: "Full Size SUV",
        text: "Perfect for family trips and larger groups",
        img: [card3, card2, card1],
        popular: true,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
    },
    {
        id: 4,
        title: "First Class Sedan",
        text: "Perfect for Weddings, Luxury Travel and Premium Transfers",
        img: [card1, card2, card3],
        popular: true,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
    },
    {
        id: 5,
        title: "Luxury Sedan",
        text: "Our most popular choice for Airport Travel and City Travel",
        img: [card2, card1, card3],
        popular: false,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
    },
    {
        id: 6,
        title: "First Class Sedan",
        text: "Perfect for Weddings, Luxury Travel and Premium Transfers",
        img: [card1, card2, card3],
        popular: true,
        features: [
            "Leather Seats",
            "Climate Control",
            "Premium Sound",
            "Advanced Safety",
        ],
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

const nextImage = (cardId, total) => {
    imageIndex.value[cardId] = (imageIndex.value[cardId] + 1) % total;
};

const prevImage = (cardId, total) => {
    imageIndex.value[cardId] = (imageIndex.value[cardId] - 1 + total) % total;
};
</script>

<template>
    <section class="px-8 md:px-10 lg:px-15 py-5 bg-white max-w-7xl w-full mx-auto">
        <!-- Heading block -->
        <div class="text-center mb-8 md:mb-2" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="150"
            data-aos-easing="ease-in-out" data-aos-delay="100">
            <h2 class="text-[36px] lg:text-[60px] font-bold leading-tight text-[#010101]">
                Find Your Perfect Vehicle Type
            </h2>
            <p class="mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-5xl mx-auto text-[#626262] font-medium">
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
                <article v-for="card in cards" :key="card.id" class="snap-center flex-shrink-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-[#C5C5C5]
         w-[100%] sm:w-[380px]">

                    <div class="relative overflow-hidden rounded-t-xl">
                        <!-- IMAGE SLIDES -->
                        <div class="flex transition-transform duration-500" :style="{
                            transform: `translateX(-${imageIndex[card.id] * 100}%)`,
                        }">
                            <img v-for="(pic, idx) in card.img" :key="idx" :src="pic"
                                class="object-cover w-full pt-14 px-1  flex-shrink-0" />
                        </div>

                        <!-- LEFT ARROW -->
                        <button @click="prevImage(card.id, card.img.length)"
                            class="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white rounded-full px-2 py-1">
                            ‹
                        </button>

                        <!-- RIGHT ARROW -->
                        <button @click="nextImage(card.id, card.img.length)"
                            class="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white rounded-full px-2 py-1">
                            ›
                        </button>
                    </div>

                    <div class="flex-1 flex flex-col p-3">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl md:text-[20px] font-semibold text-[#010101]">
                                {{ card.title }}
                            </h3>
                            <span v-if="card.popular" class="px-3 text-[8px] font-bold text-white rounded-full"
                                style="background-color: #e85134">POPULAR</span>
                        </div>
                        <p class="text-sm mb-2 font-medium text-[#626262]">
                            {{ card.text }}
                        </p>
                        <h4 class="text-md font-bold mb-2 text-[#091A50]">Key Features:</h4>
                        <ul class="text-sm sm:text-md grid grid-cols-2 gap-1 text-[#626262] font-medium">
                            <li v-for="feature in card.features" :key="feature">
                                • {{ feature }}
                            </li>
                        </ul>
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

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    scrollbar-width: none;
}
</style>
