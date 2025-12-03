<template>
  <!-- MAIN CONTENT -->
  <main
    class="lg:ml-64 pt-[100px] mb-10 px-4 sm:px-0"
    data-aos="fade-right"
    data-aos-duration="1200"
    data-aos-offset="150"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
  >
    <div class="mx-auto max-w-4xl">
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-6">
        Settings & Profile
      </p>

      <!-- FORM CONTAINER -->
      <div class="space-y-6">
        <!-- Full Name -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1 ml-4">Full Name</label>
          <input
            type="text"
            placeholder="Write here"
            class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
          />
        </div>

        <!-- Email -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1 ml-4">Email address</label>
          <input
            type="email"
            placeholder="Write here"
            class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
          />
        </div>

        <!-- Phone + DOB -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Phone -->
          <div class="flex flex-col">
            <label class="text-md text-[#515151] mb-1 ml-4">Phone Number</label>
            <input
              type="text"
              placeholder="Write here"
              class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
            />
          </div>

          <!-- DOB -->
          <div class="flex flex-col">
            <label class="text-md text-[#515151] mb-1 ml-4"
              >Date of birth</label
            >
            <input
              type="text"
              placeholder="02/12/2001"
              class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
            />
          </div>
        </div>

        <!-- Address -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1 ml-4">Address</label>

          <!-- Address Box -->
          <div class="border border-[#B7B7B7] rounded-xl p-8 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <!-- Street -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap"
                  >Street:</span
                >
                <input
                  type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none"
                />
              </label>

              <!-- City -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap"
                  >City:</span
                >
                <input
                  type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none"
                />
              </label>

              <!-- Postal Code -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap"
                  >Postal Code:</span
                >
                <input
                  type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none"
                />
              </label>

              <!-- Country -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap"
                  >Country:</span
                >
                <input
                  type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none"
                />
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center pt-2">
            <button
              class="bg-[#369FFF] text-white w-[60%] py-2 rounded-lg text-sm hover:bg-blue-600 transition"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
