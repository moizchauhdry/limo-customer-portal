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
      <p class="text-2xl sm:text-3xl text-[#414141] font-bold mt-4 mb-4">
        Submit a new Complaint
      </p>

      <!-- Complaint Form -->
      <div class="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Describe Your Issue -->
        <div>
          <label
            class="block text-sm sm:text-base text-[#414141] font-medium mb-2"
          >
            Describe your issue
          </label>
          <textarea
            placeholder="Write here"
            rows="4"
            class="w-full border border-[#D8D8D8] rounded-lg px-4 py-2 text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
          ></textarea>
        </div>

        <!-- Attach Files -->
        <div>
          <label
            class="block text-sm sm:text-base text-[#414141] font-medium mb-1"
          >
            Attach files
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="Optional"
              class="w-full border border-[#D8D8D8] rounded-lg px-4 py-2 pr-10 text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
            />
            <img
              src="../assets/icons/complaints/attach.svg"
              class="absolute right-3 top-2.5 h-4"
              alt="Attach"
            />
          </div>
          <!-- Submit Button -->
          <div class="mt-3">
            <button
              class="bg-[#0072EF] text-white text-sm w-full py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <!-- =============== TABS =============== -->
      <!-- Heading -->
      <p class="text-xl sm:text-3xl text-[#414141] font-bold mt-4 mb-4">
        Your submitted complaints
      </p>
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
                    Received
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
                    class="inline-block px-5 py-1 rounded-lg bg-[#B1480F] text-white text-xs"
                  >
                    cancel
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
                    class="inline-block px-4 py-1 rounded-lg bg-[#369FFF] text-white text-xs"
                  >
                    Opened
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
                    Received
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
                >Received</span
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
                class="inline-block px-3 py-1 rounded-lg bg-[#B1480F] text-white text-xs"
                >Cancel</span
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
                class="inline-block px-3 py-1 rounded-lg bg-[#369FFF] text-white text-xs"
                >Opened</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
