<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "@/axios";
import { formatDate } from "@/utils";
import CreateComplaintComponent from "@/components/complaints/CreateComplaintComponent.vue";

const now = new Date();
const start = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const end = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
const range = ref({ start, end });

const showModal = ref(false);
const complaints = ref([]);
const filters = ref({
  search: "",
  date_type: "",
  sort: "desc",
  status: "",
});
const dateFilterOptions = ref([
  { value: "", label: "All" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "this_week", label: "This Week" },
  { value: "last_week", label: "Last Week" },
  { value: "this_month", label: "This Month" },
  { value: "last_month", label: "Last Month" },
  { value: "this_year", label: "This Year" },
  { value: "last_year", label: "Last Year" },
  { value: "date_range", label: "Date Range" },
]);

let timer = null;

watch(
  () => filters.value.search,
  () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fetchComplaints()
    }, 500)
  }
)

const fetchComplaints = async () => {
  try {

    if (filters.value.date_type === "date_range") {
      filters.value.start_date = range.value.start;
      filters.value.end_date = range.value.end;
    } else {
      filters.value.start_date = "";
      filters.value.end_date = "";
    }

    const { data } = await axios.get('/customer/complaints', {
      params: filters.value,
    });

    complaints.value = data.data;
  } catch (err) {
    console.error("Error fetching bookings:", err);
  }
};

onMounted(() => {
  fetchComplaints();
});
</script>
<template>

  <CreateComplaintComponent v-model="showModal" @refresh="fetchComplaints()" />

  <main class="lg:ml-64 pt-[100px] mb-5" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="150"
    data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Heading -->
      <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
        <p class="text-xl sm:text-3xl text-[#414141] font-bold mt-4 mb-4">
          Your submitted complaints
        </p>
        <button
          class="bg-[#369FFF] text-white w-full sm:w-[50%] py-3 font-semibold rounded-lg hover:bg-blue-600 transition"
          @click="showModal = true">
          <span>Submit a new complaint</span>
        </button>
      </div>

      <div class="bg-white rounded-xl space-y-4 pt-4 pb-0 sm:pb-3">
        <div class="flex flex-wrap gap-2">
          <div class="w-full sm:flex-[2] relative">
            <input type="text" placeholder="Search by booking ID"
              class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              v-model="filters.search" />
            <img src="../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4" alt="Search Icon" />
          </div>

          <div class="w-full sm:flex-1">
            <select v-model="filters.status"
              class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              @change="fetchComplaints()">
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div class="w-full sm:flex-1">
            <select v-model="filters.sort"
              class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              @change="fetchComplaints()">
              <option value="desc">Sort by newest first</option>
              <option value="asc">Sort by oldest first</option>
            </select>
          </div>

          <div class="w-full sm:flex-1">
            <select v-model="filters.date_type"
              class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
              @change="fetchComplaints()">
              <option v-for="option in dateFilterOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div v-if="filters.date_type === 'date_range'" class="w-full sm:flex-[2]">
            <VDatePicker v-model.range="range" @update:modelValue="fetchComplaints()">
              <template #default="{ inputValue, inputEvents }">
                <div class="flex items-center gap-2">
                  <input class="w-full border border-[#D8D8D8] rounded-lg py-1 px-2" :value="inputValue.start"
                    v-on="inputEvents.start" />
                  <input class="w-full border border-[#D8D8D8] rounded-lg py-1 px-2" :value="inputValue.end"
                    v-on="inputEvents.end" />
                </div>
              </template>
            </VDatePicker>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg border border-[#B7B7B7] mt-3">
        <div class="hidden sm:block">
          <table class="w-full text-sm text-left text-[#414141]">
            <thead class="text-[#3B3B3B] border-b border-[#B7B7B7]">
              <tr>
                <th class="px-4 py-3 font-semibold text-lg">Booking ID</th>
                <th class="px-4 py-3 font-semibold text-lg">Date</th>
                <th class="px-4 py-3 font-semibold text-lg">Pick up</th>
                <th class="px-4 py-3 font-semibold text-lg">Drop off</th>
                <th class="px-4 py-3 font-semibold text-lg">Fare</th>
                <th class="px-4 py-3 font-semibold text-lg">Status</th>
              </tr>
            </thead>
            <transition-group tag="tbody" name="fade">
              <tr class="border-b border-[#B7B7B7] transition" v-for="complaint in complaints" :key="complaint.id">
                <td class="px-4 py-3">#{{ complaint?.bookings[0]?.id }}</td>
                <td class="px-4 py-3">{{ formatDate(complaint.created_at) }}</td>
                <td class="px-4 py-3">{{ complaint?.bookings[0]?.pickup_location }}</td>
                <td class="px-4 py-3">{{ complaint?.bookings[0]?.drop_location }}</td>
                <td class="px-4 py-3">${{ complaint?.bookings[0]?.payments_total }}</td>
                <td class="px-4 py-3">
                  <span class="inline-block px-3 py-1 rounded-lg text-white text-xs capitalize" :class="{
                    'bg-[#B1480F]': complaint.status == 'pending',
                    'bg-[#0FB14B]': complaint.status == 'resolved',
                    'bg-gray-500': complaint.status == 'closed',
                  }">
                    {{ complaint.status }}
                  </span>
                </td>
              </tr>
            </transition-group>
          </table>
        </div>

        <!-- Mobile Cards -->
        <div class="sm:hidden space-y-4 p-4 text-sm text-[#414141]">
          <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2" v-for="complaint in complaints"
            :key="complaint.id">
            <div class="flex justify-between">
              <span class="font-semibold">Booking ID:</span><span>#{{ complaint?.bookings[0]?.id }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Date:</span><span>{{ formatDate(complaint.created_at) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Pick up:</span><span>{{ complaint?.bookings[0]?.pickup_location }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Drop off:</span><span>{{ complaint?.bookings[0]?.drop_location }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Fare:</span><span>${{ complaint?.bookings[0]?.payments_total }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Status:</span>
              <span class="inline-block px-3 py-1 rounded-lg text-white text-xs capitalize" :class="{
                'bg-[#B1480F]': complaint.status == 'pending',
                'bg-[#0FB14B]': complaint.status == 'resolved',
                'bg-gray-500': complaint.status == 'closed',
              }">
                {{ complaint.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 -translate-y-2;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100 translate-y-0;
}
</style>