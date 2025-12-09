<script setup>
import WebFooter from "@/components/WebFooter.vue";
import WebNavComponent from "@/components/WebNavComponent.vue";
</script>

<template>
  <WebNavComponent />
  <router-view />
  <WebFooter />
</template>
