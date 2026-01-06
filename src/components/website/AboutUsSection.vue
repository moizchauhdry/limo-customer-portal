<script setup>
import card1 from "@/assets/icons/about/about-us-1.svg";
import card2 from "@/assets/icons/about/about-us-2.svg";
import card3 from "@/assets/icons/about/about-us-3.svg";
import card4 from "@/assets/icons/about/about-us-4.svg";

const cards = [
    {
        id: 1,
        title: "Car Rental With Driver",
        text: "Enhance your rental experience with additional options.",
        img: card1,
    },
    {
        id: 2,
        title: "Business Car Rental",
        text: "Enhance your rental experience with additional options.",
        img: card2,
    },
    {
        id: 3,
        title: "Airport Transfer",
        text: "Enhance your rental experience with additional options.",
        img: card3,
    },
    {
        id: 4,
        title: "Chauffeur Services",
        text: "Enhance your rental experience with additional options.",
        img: card4,
    },
];
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-white">
        <!-- Heading -->
        <div class="text-center mb-4 sm:mb-14" data-aos="fade-up" data-aos-duration="1200">
            <h2 class="text-[40px] lg:text-[60px] font-bold text-[#010101]">
                About Us
            </h2>
            <p class="sm:mt-4 max-w-5xl mx-auto text-[#626262] text-base lg:text-lg">
                Experience the ultimate private chauffeur service. Encounter every
                destination in our top of the line vehicles, where high end luxury
                meets safe, private and reliable journeys; just what the upscale
                modern day passenger needs
            </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article v-for="card in cards" :key="card.id" class=" border border-[#E0E0E0] rounded-3xl p-6 flex flex-col"
                data-aos="fade-up">
                <!-- Icon -->
                <div class="w-14 h-14 flex items-center justify-center rounded-full  mb-6">
                    <img :src="card.img" alt="icon" class=" object-contain" />
                </div>

                <!-- Content -->
                <h3 class="text-lg font-semibold text-[#010101] mb-2">
                    {{ card.title }}
                </h3>
                <p class="text-sm text-[#626262] mb-8">
                    {{ card.text }}
                </p>

                <!-- Arrow Button -->
                <a href="#quote" class="mt-auto w-10 h-10 flex items-center justify-center">
                    <img src="@/assets/icons/about/about-arrow.svg" alt="arrow" class="w-10 h-10" />
                </a>
            </article>
        </div>
    </section>
</template>
