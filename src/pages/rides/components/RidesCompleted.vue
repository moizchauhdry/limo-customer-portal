<template>
  <!-- MAIN CONTENT -->
  <div data-aos="fade-up" data-aos-duration="1000">
    <!-- Heading -->
    <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
      Select by date
    </p>
    <!-- Select by Date Section -->
    <div class="bg-white rounded-xl space-y-4">
      <!-- Filters Row -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <!-- Search by Trips (Wider: spans 2 columns) -->
        <div class="relative col-span-1 sm:col-span-2">
          <input
            type="text"
            placeholder="Search by trips"
            class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
          />
          <img
            src="../../../assets/icons/rides/search-icon.svg"
            class="absolute left-3 top-2.5 h-4"
            alt="Search Icon"
          />
        </div>

        <!-- Status Dropdown -->
        <div class="relative col-span-1">
          <select
            class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
          >
            <option>Status</option>
            <option>Confirmed</option>
            <option>Completed</option>
            <option>Canceled</option>
          </select>
          <img
            src="../../../assets/icons/dashboard/calender-arrow.svg"
            class="absolute right-3 top-4"
            alt="Dropdown Arrow"
          />
        </div>

        <!-- Date Range Dropdown -->
        <div class="relative col-span-1">
          <select
            class="w-full appearance-none pr-10 pl-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
          >
            <option>Date Range</option>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last Month</option>
          </select>
          <img
            src="../../../assets/icons/dashboard/calender-arrow.svg"
            class="absolute right-3 top-4"
            alt="Dropdown Arrow"
          />
        </div>
      </div>
    </div>

    <!-- =============== MAIN SECTION WRAPPER =============== -->
    <section class="mt-6 flex flex-col xl:flex-row gap-6 items-start">
      <!-- LEFT COLUMN -->
      <div class="flex-1 space-y-6">
        <div class="px-2 sm:px-0">
          <div class="bg-white border border-[#DBDBDB] rounded-xl shadow">
            <!-- ========== HEADER ========== -->
            <div
              class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b p-3"
            >
              <h3
                class="text-xl sm:text-2xl lg:text-3xl font-normal text-[#414141]"
              >
                Completed Rides
              </h3>
              <img
                src="../../../assets/icons/rides/ride-complete.svg"
                alt="ride"
              />

              <!-- <button
                    class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition"
                  >
                    View
                  </button> -->
            </div>
            <!-- header -->
            <div class="flex items-center justify-between px-4 mt-2">
              <h3 class="text-lg text-[#414141]">Ride ID: TR:7643R</h3>
              <div
                class="flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-2 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8]"
              >
                <img
                  src="../../../assets/icons/dashboard/distance.svg"
                  class="h-3"
                  alt="date"
                />
                <span> 15.96 km / 9.92 mi</span>
                <img
                  src="../../../assets/icons/dashboard/mini-clock.svg"
                  class="h-4"
                  alt="date"
                />
                <span> 0h 17m</span>
              </div>
            </div>
            <!-- ========== ROUTE BLOCK ========== -->
            <div
              class="flex gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2"
            >
              <div class="flex flex-row gap-2">
                <div class="flex items-center gap-2">
                  <img
                    src="../../../assets/icons/dashboard/location.svg"
                    class="h-4"
                    alt="start"
                  />
                  <span class="text-xs sm:text-sm"
                    >LaGuardia Airport (LGA), East USA</span
                  >
                </div>
                <!-- Vertical Route Icon -->
                <img
                  src="../../../assets/icons/dashboard/small-fare.svg"
                  class="h-2 mt-1.5"
                  alt="route"
                />

                <div class="flex items-center gap-2">
                  <img
                    src="../../../assets/icons/dashboard/airport.svg"
                    class="h-4"
                    alt="end"
                  />
                  <span class="text-xs sm:text-sm">JFK Airport</span>
                </div>
              </div>
            </div>

            <!-- ========== STATS ROW ========== -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3 items-start"
            >
              <!-- Distance & Time -->
              <div
                class="flex flex-col items-start sm:w-[50%] gap-2 rounded-lg px-1 text-md text-[#17171A]"
              >
                <div class="items-center gap-1">
                  <span class="text-[#414141]">Distance: 15.98 km</span>
                </div>
                <div class="items-center gap-1">
                  <span class="text-[#414141]">Duration: 1h, 29 min</span>
                </div>
              </div>

              <!-- Fare & Status -->
              <div class="flex flex-col items-end gap-2">
                <div class="flex items-center gap-2">
                  <img
                    src="../../../assets/icons/rides/total-fare.svg"
                    class="h-4"
                    alt="Fare"
                  />
                  <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                  <p class="text-sm sm:text-lg font-medium text-[#000]">$120</p>
                </div>

                <button
                  class="bg-[#329EE7] px-6 sm:px-12 py-1 rounded-full text-white text-sm hover:bg-blue-700 transition"
                >
                  View
                </button>
              </div>
            </div>

            <!-- ========== DRIVER DETAILS ========== -->
            <div class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4">
              <div class="flex justify-between items-center">
                <h3 class="text-[#414141] text-lg">Driver Details</h3>
                <p class="text-sm font-medium text-[#414141]">03028724983</p>
              </div>

              <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <img
                  src="../../../assets/icons/navbar/profile.svg"
                  class="h-12 w-12 rounded-full"
                  alt="Driver"
                />

                <div class="text-sm text-[#414141]">
                  <p class="font-semibold">John P.</p>
                  <p class="text-xs sm:text-sm">
                    Car: Black Mercedes S-Class Plate # ABC 123
                  </p>
                </div>

                <button
                  class="bg-[#0072EF] text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <img
                    src="../../../assets/icons/dashboard/call.svg"
                    class="h-4"
                    alt="phone"
                  />
                  Call Driver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
