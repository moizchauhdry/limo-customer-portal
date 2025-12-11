<script setup>
const date = new Date();
</script>
<template>
  <header class="w-full bg-white shadow flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50">
    <div class="flex items-center justify-between sm:w-[30%] ml-auto sm:ml-6 gap-3">
      <img src="../assets/images/logo.svg" class="h-10 cursor-pointer" alt="Logo" @click="$router.push('/')" />
      <div class="text-xl">
        <h1 class="text-[#595959]">Hi! Hamza,</h1>
        <span class="text-[#000000] font-semibold">Good Morning</span>
      </div>
    </div>

    <div class="hidden sm:flex items-center gap-5">
      <div class="flex gap-2 items-center border-r pr-4">
        <div class="h-12 w-12 rounded-full flex items-center justify-center border-2 border-[#A7A7A7] text-2xl">
          {{ date.getDate() }}
        </div>
        <div class="flex flex-col text-xs">
          <span class="text-[#565656] font-bold">{{ date.toLocaleString('en-us', { weekday: 'short' }) }}, {{
            date.toLocaleString('en-us', { month: 'long' }) }}</span>
          <span class="text-[#565656]">{{ date.getFullYear() }}</span>
        </div>
      </div>
      <img src="../assets/icons/navbar/nav1.svg" class="h-9" />

      <RouterLink to="/settings">
        <img src="../assets/icons/navbar/setting.svg" class="h-9" />
      </RouterLink>

      <RouterLink to="/settings">
        <img src="../assets/icons/navbar/profile.svg" class="h-9 rounded-full" />
      </RouterLink>

      <RouterLink to="/rides/create"
        class="bg-[#369FFF]  hover:bg-[#095193] text-white px-3 py-3 rounded-lg flex items-center gap-2 hover:shadow-xl transition-shadow duration-300 ">
        <img src="../assets/icons/navbar/booking1.svg" class="h-4" />
        New Booking
        <img src="../assets/icons/navbar/booking2.svg" class="h-4" />
      </RouterLink>
    </div>
  </header>
</template>
