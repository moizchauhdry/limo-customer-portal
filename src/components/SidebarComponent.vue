<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import axios from "@/axios";
import { logout } from "@/utils";

const toast = useToast();
const router = useRouter();

const logoutHandler = async () => {
  try {
    const { data } = await axios.post("/customer/auth/logout");

    if (data.success == true) {
      logout();
      router.push({ name: "login" });
    } else {
      toast.error(data?.message || "Signup Failed!");
    }
  } catch (err) {
    console.error("Logout error:", err);
  }
};

const iconDashboard = new URL(
  "../assets/icons/sidebar/dashboard.svg",
  import.meta.url
).href;
const iconDashboardActive = new URL(
  "../assets/icons/sidebar/active-dashboard.svg",
  import.meta.url
).href;

const iconRides = new URL("../assets/icons/sidebar/rides.svg", import.meta.url)
  .href;
const iconRidesActive = new URL(
  "../assets/icons/sidebar/active-rides.svg",
  import.meta.url
).href;

const iconHistory = new URL(
  "../assets/icons/sidebar/history.svg",
  import.meta.url
).href;
const iconHistoryActive = new URL(
  "../assets/icons/sidebar/active-history.svg",
  import.meta.url
).href;

const iconWallet = new URL(
  "../assets/icons/sidebar/wallet.svg",
  import.meta.url
).href;
const iconWalletActive = new URL(
  "../assets/icons/sidebar/active-wallet.svg",
  import.meta.url
).href;

const iconReports = new URL(
  "../assets/icons/sidebar/reports.svg",
  import.meta.url
).href;
const iconReportsActive = new URL(
  "../assets/icons/sidebar/active-reports.svg",
  import.meta.url
).href;

const iconComplaints = new URL(
  "../assets/icons/sidebar/complaints.svg",
  import.meta.url
).href;
const iconComplaintsActive = new URL(
  "../assets/icons/sidebar/active-complaints.svg",
  import.meta.url
).href;

const iconSettings = new URL(
  "../assets/icons/sidebar/settings.svg",
  import.meta.url
).href;
const iconSettingsActive = new URL(
  "../assets/icons/sidebar/active-setting.svg",
  import.meta.url
).href;
</script>

<template>
  <label for="menu-toggle" class="lg:hidden fixed top-4 left-3 z-[70] cursor-pointer group">
    <div class="w-10 h-10 rounded-xl flex items-center justify-center
           bg-white shadow-md border border-gray-200
           transition-all duration-300 hover:shadow-lg">
      <div class="flex flex-col justify-between w-5 h-4">
        <span class="block h-[2.5px]  w-full bg-gray-800 rounded-full
               transition-all duration-300 group-hover:w-4"></span>
        <span class="block h-[2.5px]  w-full bg-gray-800 rounded-full
               transition-all duration-300"></span>
        <span class="block h-[2.5px]  w-full bg-gray-800 rounded-full
               transition-all duration-300 group-hover:w-4"></span>
      </div>
    </div>
  </label>

  <input type="checkbox" id="menu-toggle" class="hidden peer" />

  <aside
    class="fixed z-[60] lg:z-0 lg:translate-x-0 peer-checked:translate-x-0 transition-transform duration-300 w-64 bg-white shadow-xl top-[84px] bottom-0 p-6 overflow-y-auto -translate-x-full">
    <nav class="space-y-8">
      <RouterLink to="/dashboard" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconDashboardActive : iconDashboard" class="h-6" />
          Dashboard
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/rides" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconRidesActive : iconRides" class="h-6" />
          Rides
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/history" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconHistoryActive : iconHistory" class="h-6" />

          History
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/wallet" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconWalletActive : iconWallet" class="h-5" />
          My Wallet
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/reports" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconReportsActive : iconReports" class="h-6" />
          Manage Reports
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/complaints" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconComplaintsActive : iconComplaints" class="h-6" />
          Complaints
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <RouterLink to="/settings" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" class="flex items-center gap-3 cursor-pointer"
          :class="isActive ? 'text-[#369FFF]' : 'text-[#949494]'">
          <img :src="isActive ? iconSettingsActive : iconSettings" class="h-6" />
          Settings
          <span v-if="isActive" class="w-3 h-3 ml-auto bg-[#369FFF] rounded-full"></span>
        </div>
      </RouterLink>

      <div class="flex items-center gap-3 text-[#949494] hover:text-black cursor-pointer" @click="logoutHandler">
        <img src="../assets/icons/sidebar/logout.svg" class="h-6" />
        Logout
      </div>
    </nav>
  </aside>
</template>
