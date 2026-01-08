<script setup>
import { ref, computed } from "vue";
import axios from "@/axios";
import DotsLoading from "@/components/DotsLoading.vue";

/* Holds selected date range */
const tripRange = ref({ start: null, end: null });
const expenseRange = ref({ start: null, end: null });


/* Which report user clicked */
const reportType = ref(null);
const calendarRef = ref(false)
const loading = ref(false);

const tripCalendarRef = ref(null);
const expenseCalendarRef = ref(null);



/* Enable download only when both dates exist */
const isRangeSelected = computed(() => {
  if (reportType.value === "trip_summary") {
    return !!(tripRange.value.start && tripRange.value.end);
  }
  if (reportType.value === "expense") {
    return !!(expenseRange.value.start && expenseRange.value.end);
  }
  return false;
});


/* Reset dates */
const cancelDate = () => {
  if (reportType.value === "trip_summary") {
    tripRange.value = { start: null, end: null };
    tripCalendarRef.value?.hidePopover();
  } else if (reportType.value === "expense") {
    expenseRange.value = { start: null, end: null };
    expenseCalendarRef.value?.hidePopover();
  }
};


/* API call + file download */
const downloadReport = async () => {
  const selectedRange =
    reportType.value === "trip_summary"
      ? tripRange.value
      : expenseRange.value;
  if (!selectedRange.start || !selectedRange.end) return;

  try {
    loading.value = true;
    const response = await axios.post(
      "/customer/user-reports/generate",
      {
        type: reportType.value,
        start_date: selectedRange.start,
        end_date: selectedRange.end,
      },
      {
        responseType: "blob",
      }
    );

    /* Create downloadable file */
    const blob = new Blob([response.data], {
      type: "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);
    const fileName =
      reportType.value === "trip_summary"
        ? "Trip_Summary_Report.pdf"
        : "Expense_Report.pdf";

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Failed to download report");
  } finally {
    loading.value = false;
  }
  calendarRef.value?.hidePopover();
};
</script>



<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-5">

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- =============== Report row =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-bold sm:mt-4 mb-4">
        Reports
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <!-- Total Trips -->
        <!-- Trip Summary Date Picker -->
        <div class="w-full sm:flex-[2] relative">
          <VDatePicker ref="tripCalendarRef" v-model.range="tripRange" :popover="{
            placement: 'bottom-start',
            teleport: true,
            zIndex: 9999,
            keepVisibleOnInput: true,
            visibility: 'click',
          }" :keep-visible-on-input="true">
            <!-- Trigger -->
            <template #default="{ togglePopover }">
              <div @click="
                reportType = 'trip_summary';
              togglePopover();
              " class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5 cursor-pointer">
                <div class="flex items-center">
                  <img src="../assets/icons/navbar/booking2.svg" alt="wallet" class="h-6" />
                  <p class="text-lg sm:text-2xl mx-auto text-white font-semibold">
                    Trip Summary
                  </p>
                </div>
              </div>
            </template>

            <!-- Footer -->
            <template #footer>
              <div class="flex justify-end gap-3 px-3 py-2 border-t">
                <button class="px-4 py-1.5 text-sm rounded-lg border border-[#369FFF] text-[#369FFF]"
                  @click="cancelDate">
                  Cancel
                </button>

                <div>
                  <button :disabled="!isRangeSelected" @click="downloadReport"
                    class="px-4 py-1.5 text-sm rounded-lg text-white transition-all" :class="isRangeSelected
                      ? 'bg-[#369FFF] hover:opacity-90 cursor-pointer'
                      : 'bg-[#9EC9FF] cursor-not-allowed'">
                    <div v-if="loading" class="px-7 py-1">
                      <DotsLoading />
                    </div>
                    <span v-else>Download Report</span>
                  </button>
                </div>
              </div>
            </template>
          </VDatePicker>
        </div>



        <!-- Expense Report (SAME BEHAVIOR) -->
        <div class="w-full sm:flex-[2] relative">
          <VDatePicker ref="expenseCalendarRef" v-model.range="expenseRange" :popover="{
            placement: 'bottom-start',
            teleport: true,
            zIndex: 9999,
            autoHide: false,
            visibility: 'click',
          }" :keep-visible-on-input="true">
            <!-- Trigger -->
            <template #default="{ togglePopover }">
              <div @click="
                reportType = 'expense';
              togglePopover();
              " class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5 cursor-pointer">
                <div class="flex justify-between items-center">
                  <img src="../assets/icons/reports/dollar.svg" alt="dollar" class="h-6" />
                  <p class="text-lg sm:text-2xl mx-auto text-[#FFFFFF] font-semibold">
                    Expense Report
                  </p>
                </div>
              </div>
            </template>

            <!-- Footer -->
            <template #footer>
              <div class="flex justify-end gap-3 px-3 py-2 border-t">
                <button class="px-4 py-1.5 text-sm rounded-lg border border-[#369FFF] text-[#369FFF]"
                  @click="cancelDate">
                  Cancel
                </button>

                <button :disabled="!isRangeSelected" @click="downloadReport"
                  class="px-4 py-1.5 text-sm rounded-lg text-white transition-all" :class="isRangeSelected
                    ? 'bg-[#369FFF] hover:opacity-90 cursor-pointer'
                    : 'bg-[#9EC9FF] cursor-not-allowed'">
                  <div v-if="loading" class="px-7 py-1">
                    <DotsLoading />
                  </div>
                  <span v-else>Download Report</span>
                </button>
              </div>
            </template>
          </VDatePicker>
        </div>

        <!-- Total Trips -->
        <!-- <div class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5">
          <div class="flex items-center">
            <img
              src="../assets/icons/reports/usage-overview.svg"
              alt="overview"
              class="h-8"
            />
            <p
              class="text-lg sm:text-2xl flex mx-auto text-[#FFFFFF] font-semibold"
            >
              Usage overview
            </p>
          </div>
        </div> -->
      </div>

      <!-- =============== TABS =============== -->
      <!-- Filter Section -->
      <div>
        <!-- Filters Row -->
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">      
          <div class="relative col-span-1 sm:col-span-1">
            <input
              type="text"
              placeholder="Search"
              class="w-full pl-10 pr-4 py-2 border border-[#BDBDBD] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
            />
            <img
              src="../assets/icons/rides/search-icon.svg"
              class="absolute left-3 top-2.5 h-4"
              alt="Search Icon"
            />
          </div>
        </div> -->
      </div>
      <!-- Heading -->
      <!-- <p class="text-2xl sm:text-3xl text-[#414141] font-bold mt-8 mb-4">
        Your Downloaded Reports
      </p>   
      <div class="space-y-4">  
        <div
          class="flex items-center justify-between border border-[#E0E0E0] rounded-lg px-4 py-3"
        >
          <div class="flex items-center gap-3">
            <p class="text-md text-[#484848]">
              Monthly expense report – Nov 2025
            </p>
          </div>
          <div class="flex flex-row gap-2">
            <img src="../assets/icons/reports/pdf.svg" class="h-6" alt="PDF" />
            <button>
              <img
                src="../assets/icons/reports/download.svg"
                class="h-5"
                alt="Download"
              />
            </button>
          </div>
        </div>

      
        <div
          class="flex items-center justify-between border border-[#E0E0E0] rounded-lg px-4 py-3"
        >
          <div class="flex items-center gap-3">
            <p class="text-md text-[#484848]">
              Monthly expense report – Nov 2025
            </p>
          </div>
          <div class="flex flex-row gap-2">
            <img src="../assets/icons/reports/pdf.svg" class="h-6" alt="PDF" />
            <button>
              <img
                src="../assets/icons/reports/download.svg"
                class="h-5"
                alt="Download"
              />
            </button>
          </div>
        </div>

     
        <div
          class="flex items-center justify-between border border-[#E0E0E0] rounded-lg px-4 py-3"
        >
          <div class="flex items-center gap-3">
            <p class="text-md text-[#484848]">
              Monthly expense report – Nov 2025
            </p>
          </div>
          <div class="flex flex-row gap-2">
            <img src="../assets/icons/reports/pdf.svg" class="h-6" alt="PDF" />
            <button>
              <img
                src="../assets/icons/reports/download.svg"
                class="h-5"
                alt="Download"
              />
            </button>
          </div>
        </div>

      
        <div
          class="flex items-center justify-between border border-[#E0E0E0] rounded-lg px-4 py-3"
        >
          <div class="flex items-center gap-3">
            <p class="text-md text-[#484848]">
              Monthly expense report – Nov 2025
            </p>
          </div>
          <div class="flex flex-row gap-2">
            <img src="../assets/icons/reports/pdf.svg" class="h-6" alt="PDF" />
            <button>
              <img
                src="../assets/icons/reports/download.svg"
                class="h-5"
                alt="Download"
              />
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </main>
</template>
