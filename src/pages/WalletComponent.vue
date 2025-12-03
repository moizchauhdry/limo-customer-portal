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
      <!-- =============== wallets row =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
        My Wallet
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Total Trips -->
        <div
          class="bg-[#369FFF] border border-[#CECECE] rounded-xl shadow p-4 flex flex-col gap-6 justify-between"
        >
          <p class="text-[#FFFFFF] text-sm sm:text-lg font-medium">
            Available Balance
          </p>
          <div class="flex justify-between items-center">
            <img
              src="../assets/icons/wallet/wallet.svg"
              alt="wallet"
              class="h-8"
            />
            <p class="text-lg sm:text-3xl text-[#FFFFFF] font-semibold">
              $2500.0
            </p>
          </div>
        </div>

        <!-- Canceled Rides -->
        <div>
          <div
            class="bg-white border border-[#CECECE] rounded-xl shadow p-4 flex flex-col"
          >
            <div class="flex flex-row justify-between items-center mb-4">
              <p class="text-[#515151] text-sm sm:text-lg font-medium">
                Recent Activity
              </p>
              <img
                src="../assets/icons/wallet/mini-wallet.svg"
                alt="mini"
                class="h-8"
              />
            </div>
            <div>
              <p class="text-[#828282] text-xs sm:text-sm">
                18 Dec, 2025 -
                <span class="font-semibold">Wallet Top-up +$50</span>
              </p>
              <p class="text-[#828282] text-xs sm:text-sm mt-2 sm:mt-0">
                18 Dec, 2025 -
                <span class="font-semibold">Wallet Top-up +$50</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
        My payment methods
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Canceled Rides -->
        <div>
          <div
            class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col"
          >
            <div class="flex flex-row justify-between items-center mb-4 gap-4">
              <img
                src="../assets/icons/wallet/visa.svg"
                alt="mini"
                class="h-5"
              />
              <img
                src="../assets/icons/wallet/default.svg"
                alt="default"
                srcset=""
              />
            </div>
            <div>
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm mt-2 sm:mt-3">
                Exp: 08/2027
              </p>
            </div>
          </div>
        </div>
        <!-- Canceled Rides -->
        <div>
          <div
            class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col"
          >
            <div class="flex flex-row justify-between items-center mb-4">
              <img
                src="../assets/icons/wallet/master.svg"
                alt="mini"
                class="h-5"
              />
              <img
                src="../assets/icons/wallet/setaspayment.svg"
                alt="setaspayment"
              />
            </div>
            <div>
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm mt-2 sm:mt-3">
                Exp: 08/2027
              </p>
            </div>
          </div>
        </div>
        <!-- Canceled Rides -->
        <div>
          <div
            class="bg-white border border-[#B7B7B7] rounded-xl shadow p-4 flex flex-col"
          >
            <div class="flex flex-row justify-between items-center mb-4">
              <img
                src="../assets/icons/wallet/discover.svg"
                alt="mini"
                class="h-5"
              />
              <img
                src="../assets/icons/wallet/setaspayment.svg"
                alt="setaspayment"
              />
            </div>
            <div>
              <p class="text-[#828282] text-xs sm:text-sm">Card ending: 1234</p>
              <p class="text-[#828282] text-xs sm:text-sm mt-2 sm:mt-3">
                Exp: 08/2027
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-4">
        Transaction History
      </p>

      <!-- Filter Section -->
      <div class="">
        <!-- Filters Row -->
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <!-- Search Field (Spans 2 columns) -->
          <div class="relative col-span-1 sm:col-span-2">
            <input
              type="text"
              placeholder="Search"
              class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
            />
            <img
              src="../assets/icons/rides/search-icon.svg"
              class="absolute left-3 top-2.5 h-4"
              alt="Search Icon"
            />
          </div>

          <!-- Transaction Type Button -->
          <button
            class="w-full bg-[#0072EF] text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Transaction Type
          </button>

          <!-- Date Range Button -->
          <button
            class="w-full border border-[#BDBDBD] text-[#828282] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#EAEAEA] transition"
          >
            Date Range
          </button>

          <!-- Actions Button -->
          <button
            class="w-full border border-[#BDBDBD] text-[#828282] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#EAEAEA] transition"
          >
            Actions
          </button>
        </div>
      </div>

      <!-- TRIP HISTORY TABLE -->
      <div class="bg-white rounded-xl shadow-lg border border-[#B7B7B7] mt-3">
        <!-- Desktop Table -->
        <div class="hidden sm:block">
          <table class="w-full text-sm text-left text-[#414141]">
            <thead class="text-[#3B3B3B] border-b border-[#B7B7B7]">
              <tr>
                <th class="px-4 py-3 font-semibold text-lg">Ride ID</th>
                <th class="px-4 py-3 font-semibold text-lg">Date</th>
                <th class="px-4 py-3 font-semibold text-lg">Pick up</th>
                <th class="px-4 py-3 font-semibold text-lg">Drop off</th>
                <th class="px-4 py-3 font-semibold text-lg">Fare</th>
                <th class="px-4 py-3 font-semibold text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-[#B7B7B7]">
                <td class="px-4 py-3">TR 1154</td>
                <td class="px-4 py-3">10/20/2025</td>
                <td class="px-4 py-3">LaGuardia</td>
                <td class="px-4 py-3">JFK</td>
                <td class="px-4 py-3">$120</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                  >
                    Complete
                  </span>
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <td class="px-4 py-3">TR 1154</td>
                <td class="px-4 py-3">10/22/2025</td>
                <td class="px-4 py-3">LaGuardia</td>
                <td class="px-4 py-3">JFK</td>
                <td class="px-4 py-3">$120</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                  >
                    Complete
                  </span>
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <td class="px-4 py-3">TR 1154</td>
                <td class="px-4 py-3">10/25/2025</td>
                <td class="px-4 py-3">LaGuardia</td>
                <td class="px-4 py-3">JFK</td>
                <td class="px-4 py-3">$120</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                  >
                    Complete
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3">TR 1154</td>
                <td class="px-4 py-3">10/25/2025</td>
                <td class="px-4 py-3">LaGuardia</td>
                <td class="px-4 py-3">JFK</td>
                <td class="px-4 py-3">$120</td>
                <td class="px-4 py-3">
                  <span
                    class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                  >
                    Complete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Cards -->
        <div class="sm:hidden space-y-4 p-4 text-sm text-[#414141]">
          <!-- Card 1 -->
          <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
            <div class="flex justify-between">
              <span class="font-semibold">Ride ID:</span><span>TR 1154</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Date:</span><span>10/20/2025</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Pick up:</span><span>LaGuardia</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Drop off:</span><span>JFK</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Fare:</span><span>$120</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Status:</span>
              <span
                class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                >Complete</span
              >
            </div>
          </div>

          <!-- Card 2 -->
          <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
            <div class="flex justify-between">
              <span class="font-semibold">Ride ID:</span><span>TR 1154</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Date:</span><span>10/22/2025</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Pick up:</span><span>LaGuardia</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Drop off:</span><span>JFK</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Fare:</span><span>$120</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Status:</span>
              <span
                class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                >Complete</span
              >
            </div>
          </div>

          <!-- Card 3 -->
          <div class="border border-[#B7B7B7] rounded-lg p-3 space-y-2">
            <div class="flex justify-between">
              <span class="font-semibold">Ride ID:</span><span>TR 1154</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Date:</span><span>10/25/2025</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Pick up:</span><span>LaGuardia</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Drop off:</span><span>JFK</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Fare:</span><span>$120</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold">Status:</span>
              <span
                class="inline-block px-3 py-1 rounded-lg bg-[#0FB14B] text-white text-xs"
                >Complete</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
