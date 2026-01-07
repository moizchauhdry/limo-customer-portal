<script setup>
import FleetButton from "@/components/website/FleetButton.vue";
import ReviewsSection from "@/components/website/ReviewsSection.vue";
import HeroServicesSection from "@/components/website/HeroServicesSection.vue";
import FindServiceVehicle from "@/components/website/FindServiceVehicle.vue";
</script>

<template>
    <div>
        <HeroServicesSection/>
        <FleetButton title="vehicle categories" />
        <FindServiceVehicle />
        <ReviewsSection class="mb-4" />
    </div>
</template>
