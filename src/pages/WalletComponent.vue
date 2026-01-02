<script setup>
import RecentActivitiesTable from "@/components/wallet/RecentActivitiesTable.vue";
import TransactionHistoryTable from "@/components/wallet/TransactionHistoryTable.vue";
import axios from "@/axios";
import { ref, onMounted } from "vue";
import { formatDate } from "@/utils";

const walletData = ref(0);
const activeTab = ref("recent")
const loading = ref(false)

const fetchWalletData = async () => {
  try {
    loading.value = true;
    const { data } = await axios.get('/customer/wallet/data');
    walletData.value = data.data;
  } catch (err) {
    console.log("Failed to load Wallet Data:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWalletData();
});

</script>

<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- =============== wallets row =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-light mt-4 mb-4 font-poppins">
        My Wallet
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- ================= LOADING STATE ================= -->
        <template v-if="loading">
          <!-- Available Balance Skeleton -->
          <div
            class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-4 flex flex-col gap-6 justify-between animate-pulse">
            <div class="h-4 w-32 bg-white/40 rounded"></div>
            <div class="flex justify-between items-center">
              <div class="h-8 w-8 bg-white/40 rounded"></div>
              <div class="h-8 w-24 bg-white/40 rounded"></div>
            </div>
          </div>

          <!-- Recent Activity Skeleton -->
          <div class="bg-white border border-[#CECECE] rounded-xl shadow p-4 animate-pulse">
            <div class="flex justify-between items-center mb-4">
              <div class="h-4 w-40 bg-gray-200 rounded"></div>
              <div class="h-8 w-8 bg-gray-200 rounded"></div>
            </div>

            <div class="space-y-2">
              <div class="h-3 w-full bg-gray-200 rounded"></div>
              <div class="h-3 w-5/6 bg-gray-200 rounded"></div>
              <div class="h-3 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </template>

        <!-- ================= DATA STATE ================= -->
        <template v-else>
          <!-- Available Balance -->
          <div class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-4 flex flex-col gap-6 justify-between">
            <p class="text-[#FFFFFF] text-sm sm:text-lg font-semibold font-poppins">
              Available Balance
            </p>
            <div class="flex justify-between items-center">
              <img src="../assets/icons/wallet/wallet.svg" alt="wallet" class="h-8" />
              <p class="text-lg sm:text-3xl text-[#FFFFFF] font-semibold font-poppins">
                ${{ walletData.total_credit }}
              </p>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col">
            <div class="flex flex-row justify-between items-center mb-2">
              <p class="text-[#515151] text-sm sm:text-lg font-semibold font-poppins">
                Recent Activity
              </p>
              <img src="../assets/icons/wallet/mini-wallet.svg" alt="mini" class="h-8" />
            </div>

            <div class="space-y-1">
              <p v-for="activity in walletData.recent_activities" :key="activity.id"
                class="text-[#828282] font-poppins text-xs sm:text-lg">
                {{ formatDate(activity.created_at) }}
                <span class="font-semibold ">
                  Wallet {{ activity.type === 'credit' ? 'Top-up' : 'Debit' }}
                  {{ activity.type === 'credit' ? '+' : '-' }}${{ activity.amount }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>


      <!-- =============== TABS =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-light font-poppins mt-4 pb-4">
        My payment methods
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div>
          <div class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col">
            <div class="flex flex-row justify-between items-center mb-4 gap-4">
              <img src="../assets/icons/wallet/visa.svg" alt="mini" class="h-5" />
              <img src="../assets/icons/wallet/default.svg" alt="default" srcset="" />
            </div>
            <div class="space-y-1 font-poppins mb-6">
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm">Exp: 08/2027</p>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col">
            <div class="flex flex-row justify-between items-center mb-4">
              <img src="../assets/icons/wallet/master.svg" alt="mini" class="h-5" />
              <img src="../assets/icons/wallet/setaspayment.svg" alt="setaspayment" />
            </div>
            <div class="space-y-1 font-poppins mb-6">
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm">
                Exp: 08/2027
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col">
            <div class="flex flex-row justify-between items-center mb-4">
              <img src="../assets/icons/wallet/discover.svg" alt="mini" class="h-5" />
              <img src="../assets/icons/wallet/setaspayment.svg" alt="setaspayment" />
            </div>
            <div class="space-y-1 font-poppins mb-6">
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm">
                Exp: 08/2027
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <div class="mt-4 border border-[#CECECE] rounded-xl p-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <!-- Recent Activities -->
        <button @click="activeTab = 'recent'" :class="activeTab === 'recent'
          ? 'bg-[#329EE7] text-white'
          : 'border border-[#878787] text-[#878787] bg-white'"
          class="w-full text-sm py-3 rounded-md shadow transition font-light">
          Recent Activities
        </button>

        <!-- Transaction History -->
        <button @click="activeTab = 'transaction'" :class="activeTab === 'transaction'
          ? 'bg-[#329EE7] text-white'
          : 'border border-[#878787] text-[#878787] bg-white'"
          class="w-full text-sm py-3 rounded-md shadow transition">
          Transaction History
        </button>

      </div>

      <!-- TRIP HISTORY TABLE -->

      <RecentActivitiesTable v-if="activeTab === 'recent'" />
      <TransactionHistoryTable v-if="activeTab === 'transaction'" />

    </div>
  </main>
</template>
