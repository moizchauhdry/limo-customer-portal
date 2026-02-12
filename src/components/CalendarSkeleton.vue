<script setup>
</script>

<template>
  <div class="bg-white p-4 rounded-xl border border-[#DBDBDB] animate-pulse">
    <!-- Header (Month / Nav) -->
    <div class="flex justify-between items-center mb-4">
      <div class="h-5 w-32 bg-gray-200 rounded"></div>
      <div class="flex gap-2">
        <div class="h-6 w-6 bg-gray-200 rounded"></div>
        <div class="h-6 w-6 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Weekdays -->
    <div class="grid grid-cols-7 gap-2 mb-2">
      <div v-for="i in 7" :key="i" class="h-3 bg-gray-200 rounded"></div>
    </div>

    <!-- Calendar Grid (6 rows × 7 cols) -->
    <div class="grid grid-cols-7 gap-2">
      <div
        v-for="i in 42"
        :key="i"
        class="h-10 bg-gray-200 rounded-lg"
      ></div>
    </div>

    <!-- Footer Legend -->
    <div class="flex justify-center items-center gap-6 border-t border-[#E0E0E0] mt-4 pt-3">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-gray-200"></div>
        <div class="h-3 w-28 bg-gray-200 rounded"></div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-gray-200"></div>
        <div class="h-3 w-28 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</template>
