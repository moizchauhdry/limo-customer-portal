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
    <div class="max-w-7xl mx-auto container">
      <!-- WRAPPER: Two vertical columns -->
      <section class="flex flex-col xl:flex-row gap-6 items-start">
        <!-- MAIN WRAPPER -->
        <div class="w-full max-w-2xl mx-auto p-4 space-y-6">
          <!-- ===================== TOP TABS ===================== -->
          <div class="grid grid-cols-2 gap-3">
            <!-- Distance -->
            <div
              class="bg-[#369FFF] p-3 rounded-xl shadow text-white flex justify-between items-center"
            >
              <h2 class="text-md font-semibold">Distance</h2>
              <img src="../assets/icons/distance/ok.svg" class="h-5" />
            </div>

            <!-- Hourly -->
            <div
              class="border border-[#CECECE] p-3 rounded-xl bg-white flex justify-between items-center"
            >
              <h2 class="text-md text-[#838383] font-semibold">Hourly</h2>
              <input
                type="radio"
                class="w-5 h-5 text-blue-500 border border-[#369FFF] rounded-full"
              />
            </div>
          </div>

          <!-- ===================== PICK UP & DROP OFF ===================== -->
          <div class="border-[#D8D8D8] space-y-5">
            <h3
              class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold"
            >
              Pick up & Drop off
            </h3>

            <!-- Date & Time Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Date -->
              <div
                class="flex items-center gap-3 border-b border-[#D8D8D8] pb-2"
              >
                <img src="../assets/icons/distance/date.svg" class="h-5" />
                <input
                  type="text"
                  value="02-12-2025"
                  class="w-full outline-none text-[#5A5A5A]"
                />
              </div>

              <!-- Time -->
              <div
                class="flex items-center gap-3 border-b border-[#D8D8D8] pb-2"
              >
                <img src="../assets/icons/distance/time.svg" class="h-5" />
                <input
                  type="text"
                  value="08:30 pm"
                  class="w-full outline-none text-[#5A5A5A]"
                />
              </div>
            </div>

            <!-- Add Stops -->
            <button class="flex ml-auto items-center gap-2 text-xs">
              <p class="bg-[#369FFF] px-3 rounded-md text-white">+</p>
              Add Stops
            </button>
            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <label> Pick up </label>
              <input
                type="text"
                placeholder="LaGuardia Airport · 9400 Ditmars Blvd · East Elmhurst, NY 11369 ·"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
              />
            </div>

            <!-- Pickup Input -->
            <div class="flex flex-col gap-1 w-full">
              <label> Drop off </label>
              <input
                type="text"
                placeholder="LaGuardia Airport · 9400 Ditmars Blvd · East Elmhurst, NY 11369 ·"
                class="w-full border border-[#DBDBDB] shadow-sm bg-white rounded-md px-4 py-2 text-[#5A5A5A] text-sm"
              />
            </div>
          </div>

          <!-- ===================== PASSENGER INFO ===================== -->
          <div class="space-y-5">
            <h3
              class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold"
            >
              Passenger Info
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex flex-col gap-1">
                <label> Name </label>
                <input
                  type="text"
                  placeholder="jhon Doe"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label> Email </label>
                <input
                  type="Email"
                  placeholder="alex@gmail.com"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label> Phone </label>
                <input
                  type="number"
                  placeholder="9900112234"
                  class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm text-[#5A5A5A]"
                />
              </div>
            </div>
          </div>

          <!-- ===================== RIDE INFO ===================== -->
          <div class="space-y-5">
            <!-- Title -->
            <h3
              class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold"
            >
              Ride Info
            </h3>

            <!-- Service + Service Type -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Service Dropdown -->
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[#414141]">Service</label>
                <div class="relative">
                  <select
                    class="border border-[#DBDBDB] shadow-sm rounded-md px-4 py-2 text-sm w-full text-[#5A5A5A] appearance-none"
                  >
                    <option>Select Service</option>
                  </select>
                  <img
                    src="../assets/icons/dashboard/black-arrow.svg"
                    class="h-2 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </div>

              <!-- Service Type Toggle -->
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[#414141]">Service type</label>
                <div class="flex items-center gap-2">
                  <!-- One Way Selected -->
                  <button
                    class="flex items-center justify-between gap-2 w-full bg-[#369FFF] text-white px-4 py-2 rounded-md border border-[#369FFF] text-sm"
                  >
                    One way
                    <span
                      class="border-2 border-white rounded-full w-3 h-3 bg-white"
                    ></span>
                  </button>

                  <!-- Round Way Unselected -->
                  <button
                    class="flex items-center justify-between gap-2 w-full bg-white text-[#5A5A5A] px-4 py-2 rounded-md border border-[#DCDCDC] text-sm"
                  >
                    Round way
                    <span
                      class="border-2 border-[#369FFF] rounded-full w-3 h-3"
                    ></span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Luggage + Passenger -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Luggage -->
              <div>
                <p class="text-[#414141] text-sm mb-2">No. of Luggage</p>
                <div
                  class="flex items-center justify-between px-1 rounded-md border border-[#878787] gap-2"
                >
                  <button class="px-2 bg-[#D9D9D9] rounded-md">-</button>
                  <div class="py-1 text-[#3B3B3B] font-bold rounded-md text-sm">
                    1
                  </div>
                  <button class="px-2 bg-[#D9D9D9] rounded-md">+</button>
                </div>
              </div>

              <!-- Passenger -->
              <div>
                <p class="text-[#414141] text-sm mb-2">No. of Passenger</p>
                <div
                  class="flex items-center justify-between px-1 rounded-md border border-[#878787] gap-2"
                >
                  <button class="px-2 bg-[#D9D9D9] rounded-md">-</button>
                  <div class="py-1 text-[#3B3B3B] font-bold rounded-md text-sm">
                    1
                  </div>
                  <button class="px-2 bg-[#D9D9D9] rounded-md">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- ===================== SELECT FLEET ===================== -->
          <div class="space-y-5">
            <h3
              class="text-lg border-b-2 border-b-[#369FFF] pb-2 text-[#414141] font-semibold"
            >
              Select Fleet
            </h3>

            <!-- wrapper keeps arrows vertically centred -->
            <div class="relative flex items-center gap-3 px-6">
              <!-- left arrow -->
              <button
                class="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D9] border border-[#E0E0E0] rounded-full p-2 shadow hover:shadow-md"
              >
                <img
                  src="../assets/icons/distance/scroller-left.svg"
                  class="h-2 w-2"
                  alt="prev"
                />
              </button>

              <!-- cards container -->
              <div class="grid sm:grid-cols-3 gap-3 w-full">
                <!-- CAR 1 -->
                <div
                  class="bg-white border border-[#E0E0E0] rounded-xl p-2 shadow flex flex-col"
                >
                  <p class="text-md font-semibold">First class</p>
                  <p class="text-xs text-[#7A7A7A] mb-2">
                    Cadillac Escalade, Mercedes S-Class, or similar.
                  </p>
                  <img
                    src="../assets/icons/distance/car1.svg"
                    class="w-full h-24 object-contain"
                  />
                  <div
                    class="flex items-center gap-4 mt-auto text-xs text-[#4D4D4D]"
                  >
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/people.svg"
                        class="h-4"
                      />
                      2–6
                    </span>
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/baggage.svg"
                        class="h-4"
                      />
                      2–5
                    </span>
                  </div>
                </div>

                <!-- CAR 2 -->
                <div
                  class="bg-white border border-[#E0E0E0] rounded-xl p-2 shadow flex flex-col"
                >
                  <p class="text-md font-semibold">Premium sedan</p>
                  <p class="text-xs text-[#7A7A7A] mb-2">
                    Mercedes E-Class, Lexus ES, Cadillac CT6, or similar.
                  </p>
                  <img
                    src="../assets/icons/distance/car2.svg"
                    class="w-full h-24 object-contain"
                  />
                  <div
                    class="flex items-center gap-4 mt-auto pt-2 text-xs text-[#4D4D4D]"
                  >
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/people.svg"
                        class="h-4"
                      />
                      2
                    </span>
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/baggage.svg"
                        class="h-4"
                      />
                      5
                    </span>
                  </div>
                </div>

                <!-- CAR 3 -->
                <div
                  class="bg-white border border-[#E0E0E0] rounded-xl p-2 shadow flex flex-col"
                >
                  <p class="text-md font-semibold">Premium SUV</p>
                  <p class="text-xs text-[#7A7A7A] mb-2">
                    Chevrolet Suburban, GMC Yukon, or similar.
                  </p>
                  <img
                    src="../assets/icons/distance/car4.svg"
                    class="w-full h-24 object-contain"
                  />
                  <div
                    class="flex items-center gap-4 mt-auto pt-2 text-xs text-[#4D4D4D]"
                  >
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/people.svg"
                        class="h-4"
                      />
                      6
                    </span>
                    <span class="flex items-center gap-1">
                      <img
                        src="../assets/icons/distance/baggage.svg"
                        class="h-4"
                      />
                      7
                    </span>
                  </div>
                </div>
              </div>

              <!-- right arrow -->
              <button
                class="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D9] border border-[#E0E0E0] rounded-full p-2 shadow hover:shadow-md"
              >
                <img
                  src="../assets/icons/distance/scroller-right.svg"
                  class="h-2 w-2"
                  alt="next"
                />
              </button>
            </div>
          </div>

          <!-- ===================== CONTINUE BUTTON ===================== -->
          <button
            class="w-full bg-[#369FFF] text-white py-3 rounded-lg text-lg font-medium"
          >
            Continue
          </button>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="w-full sm:w-full xl:w-[325px] space-y-6">
          <div class="border h-[850px] relative">
            <img
              src="../assets/images/map.svg"
              alt="map"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
