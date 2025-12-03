<template>
  <!-- MAIN CONTENT -->
  <main
    class="lg:ml-64 pt-[100px] mb-5"
    data-aos="fade-right"
    data-aos-duration="1200"
    data-aos-offset="150"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- =============== Report row =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-bold mt-4 mb-4">
        Reports
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <!-- Total Trips -->
        <div class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5">
          <div class="flex justify-between items-center">
            <img
              src="../assets/icons/navbar/booking2.svg"
              alt="wallet"
              class="h-6"
            />
            <p
              class="text-lg sm:text-2xl flex mx-auto text-[#FFFFFF] font-semibold"
            >
              Trip Summary
            </p>
          </div>
        </div>

        <!-- Total Trips -->
        <div class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5">
          <div class="flex justify-between items-center">
            <img
              src="../assets/icons/reports/dollar.svg"
              alt="dollar"
              class="h-6"
            />
            <p
              class="text-lg sm:text-2xl flex mx-auto text-[#FFFFFF] font-semibold"
            >
              Expense Report
            </p>
          </div>
        </div>

        <!-- Total Trips -->
        <div class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-5">
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
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <!-- Filter Section -->
      <div>
        <!-- Filters Row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Search Field (Spans 2 columns) -->
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
        </div>
      </div>
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-bold mt-8 mb-4">
        Your Downloaded Reports
      </p>

      <!-- Report Rows -->
      <div class="space-y-4">
        <!-- Row 1 -->
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

        <!-- Row 2 -->
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

        <!-- Row 3 -->
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

        <!-- Row 4 -->
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
      </div>
    </div>
  </main>
</template>
