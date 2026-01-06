<script setup>
import FleetButton from "@/components/website/FleetButton.vue";
import ReviewsSection from "@/components/website/ReviewsSection.vue";
import SatisfiedCustomers from "@/components/website/SatisfiedCustomers.vue";
import HeroFleetSection from "@/components/website/HeroFleetSection.vue";
import FindFleetVehicle from "@/components/website/FindFleetVehicle.vue";
</script>

<template>
    <div>
        <HeroFleetSection />
        <FleetButton title="vehicle categories" />
        <FindFleetVehicle />
        <SatisfiedCustomers />
        <ReviewsSection class="mb-4" />
    </div>
</template>
