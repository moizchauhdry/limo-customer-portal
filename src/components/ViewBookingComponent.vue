<template>
  <!-- MAIN CONTENT -->
  <main
    class="lg:ml-64 pt-[100px] mb-5"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-offset="150"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
  >
    <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <!-- =============== STATS ROW =============== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Total Trips -->
        <div
          class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between"
        >
          <p class="text-[#878787] text-md sm:text-md font-semibold">
            Ride Starts in
          </p>
          <h1 class="text-[#FF5B64] text-3xl sm:text-4xl font-semibold">
            1h, 35 mins
          </h1>
          <img
            src="../assets/icons/rides/ride-start.svg"
            class="h-6"
            alt="Ride Starts"
          />
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
                <div class="flex items-center gap-2 text-sm text-[#17171A]">
                  <img
                    src="../assets/icons/dashboard/date.svg"
                    class="h-3"
                    alt="date"
                  />
                  <span>Oct 17, 2025</span>

                  <img
                    src="../assets/icons/dashboard/time.svg"
                    class="h-3"
                    alt="time"
                  />
                  <span>12:00PM</span>
                </div>

                <h3
                  class="text-xl sm:text-2xl lg:text-3xl font-normal text-[#414141]"
                >
                  Upcoming Ride
                </h3>

                <button></button>
              </div>

              <!-- ========== ROUTE BLOCK ========== -->
              <div
                class="flex gap-3 items-start text-sm text-[#414141] px-4 pt-3 pb-2"
              >
                <!-- Vertical Route Icon -->
                <img
                  src="../assets/icons/dashboard/location-line.svg"
                  class="h-10 sm:h-12 pt-1"
                  alt="route"
                />

                <div class="flex flex-col space-y-3">
                  <div class="flex items-center gap-2">
                    <img
                      src="../assets/icons/dashboard/location.svg"
                      class="h-4"
                      alt="start"
                    />
                    <span class="text-xs sm:text-sm"
                      >LaGuardia Airport (LGA), East USA</span
                    >
                  </div>

                  <div class="flex items-center gap-2">
                    <img
                      src="../assets/icons/dashboard/airport.svg"
                      class="h-4"
                      alt="end"
                    />
                    <span class="text-xs sm:text-sm">JFK Airport</span>
                  </div>
                </div>
              </div>

              <!-- ========== STATS ROW ========== -->
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#414141] px-4 pb-3"
              >
                <!-- Distance & Time -->
                <div
                  class="flex items-center sm:w-[50%] gap-3 border border-[#D8D8D8] rounded-lg py-1 px-3 text-xs text-[#17171A]"
                >
                  <div class="flex items-center gap-1">
                    <img
                      src="../assets/icons/dashboard/distance.svg"
                      class="h-3"
                      alt="Distance"
                    />
                    <span>15.96 km / 9.92 mi</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <img
                      src="../assets/icons/dashboard/mini-clock.svg"
                      class="h-3"
                      alt="Time"
                    />
                    <span>0h 17m</span>
                  </div>
                </div>

                <!-- Fare & Status -->
                <div class="flex flex-col items-end gap-2">
                  <div class="flex items-center gap-2">
                    <img
                      src="../assets/icons/rides/total-fare.svg"
                      class="h-4"
                      alt="Fare"
                    />
                    <p class="text-sm text-[#000]">Total Fare:</p>
                    <p class="text-sm font-medium text-[#000]">$120</p>
                  </div>

                  <span
                    class="border border-[#FF3636] text-[#FF3636] rounded-full px-3 py-1 text-xs shadow-sm"
                  >
                    Cancel ride
                  </span>
                </div>
              </div>

              <!-- ========== DRIVER DETAILS ========== -->
              <div
                class="border-t border-dashed border-[#B4B4B4] p-4 space-y-4"
              >
                <div class="flex justify-between items-center">
                  <h3 class="text-[#414141] text-lg">Driver Details</h3>
                  <p class="text-sm font-medium text-[#414141]">03028724983</p>
                </div>

                <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <img
                    src="../assets/icons/navbar/profile.svg"
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
                      src="../assets/icons/dashboard/call.svg"
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
  </main>
</template>
