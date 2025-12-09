<script setup>
import HeroSection from "@/components/website/HeroSection.vue";
import BookingForm from "@/components/website/BookingForm.vue";
import FindVehicle from "@/components/website/FindVehicle.vue";
import FleetButton from "@/components/website/FleetButton.vue";
import ChooseButton from "@/components/website/ChooseButton.vue";
import QualitiesComponent from "@/components/website/QualitiesComponent.vue";
import PlanningComponent from "@/components/website/PlanningComponent.vue";
import ReviewsSection from "@/components/website/ReviewsSection.vue";
import ServicesComponent from "@/components/website/ServicesComponent.vue";
import TrustedPartner from "@/components/website/TrustedPartner.vue";
import FaqsComponent from "@/components/website/FaqsComponent.vue";
import TopAirports from "@/components/website/TopAirports.vue";
import SatisfiedCustomers from "@/components/website/SatisfiedCustomers.vue";
import RideSteps from "@/components/website/RideSteps.vue";
import TopDestination from "@/components/website/TopDestination.vue";
import JourneyToday from "@/components/website/JourneyToday.vue";

</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto">
    <HeroSection />
    <BookingForm />
    </div>
    <FleetButton />
    <FindVehicle />
    <ChooseButton />
    <QualitiesComponent />
    <PlanningComponent/>
    <ReviewsSection/>
    <ServicesComponent/>
    <TrustedPartner/>
    <SatisfiedCustomers/>
    <RideSteps/>
    <JourneyToday/>
    <TopDestination/>
    <TopAirports/>
    <FaqsComponent/>
  </div>
</template>
