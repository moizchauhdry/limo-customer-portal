<template>
  <!-- FOOTER : single-row grid on desktop, stacked on mobile -->
  <footer
    class="bg-[linear-gradient(93.72deg,#3D3D3D_2.95%,#000000_100%)] text-white px-4 md:px-10 lg:px-20 py-16"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 items-start"
    >
      <!-- 1️⃣ LOGO + NEWSLETTER -->
      <div class="lg:col-span-2 space-y-2">
        <!-- LOGO -->
        <img
          src="@/assets/icons/footer/footer-logo.svg"
          alt="Elite Limo"
          class="h-10"
        />
        <h3 class="text-lg">Subscribe To Our Newsletter</h3>
        <p class="text-gray-300 text-sm">
          Stay up to date with the latest deals, promotions, and travel tips.
        </p>
        <div class="relative max-w-xs">
          <!-- email input -->
          <input
            type="email"
            placeholder="Enter Your Email ..."
            class="w-full py-3 pl-4 pr-4 bg-white border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(250,191,36,1)]"
          />

          <!-- golden arrow button -->
          <button
            class="absolute right-0 top-0 bottom-0 w-12 h-full flex items-center justify-center rounded-lg"
            style="background-color: rgba(250, 191, 36, 1)"
          >
            <img
              src="@/assets/icons/footer/footer1.svg"
              alt="arrow"
              class="w-4 h-4 object-contain"
            />
          </button>
        </div>
      </div>

      <!-- 2️⃣ VEHICLE TYPES -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Vehicle types</h4>
        <ul class="space-y-4 text-xs text-gray-300">
          <li><a href="#" class="hover:text-white">CAR RENTAL</a></li>
          <li><a href="#" class="hover:text-white">CLASSIC CAR RENTAL</a></li>
          <li><a href="#" class="hover:text-white">VAN RENTAL</a></li>
          <li><a href="#" class="hover:text-white">LUXURY CAR RENTAL</a></li>
        </ul>
      </div>
      <!-- 2️⃣ VEHICLE TYPES -->
      <div>
        <div class="mb-4"></div>
        <ul class="space-y-4 text-xs text-gray-300 mt-[2.75rem]">
          <li><a href="#" class="hover:text-white">SUV RENTAL</a></li>
          <li><a href="#" class="hover:text-white">SPORTS CAR RENTAL</a></li>
          <li><a href="#" class="hover:text-white">TRUCK RENTAL</a></li>
          <li>
            <a href="#" class="hover:text-white whitespace-nowrap"
              >ELECTRIC VEHICLE RENTAL</a
            >
          </li>
        </ul>
      </div>

      <!-- 3️⃣ COMPANY -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Company</h4>
        <ul class="space-y-4 text-sm text-gray-300">
          <li class="flex items-center gap-2">
            <img
              src="@/assets/icons/footer/footer2.svg"
              class="w-2 h-2"
              alt="arrow"
            />
            <a href="#" class="hover:text-white text-xs">ABOUT</a>
          </li>
          <li class="flex items-center gap-2">
            <img
              src="@/assets/icons/footer/footer2.svg"
              class="w-2 h-2"
              alt="arrow"
            />
            <a href="#" class="hover:text-white text-xs">TEAM</a>
          </li>
          <li class="flex items-center gap-2">
            <img
              src="@/assets/icons/footer/footer2.svg"
              class="w-2 h-2"
              alt="arrow"
            />
            <a href="#" class="hover:text-white text-xs">FAQ</a>
          </li>
          <li class="flex items-center gap-2">
            <img
              src="@/assets/icons/footer/footer2.svg"
              class="w-2 h-2"
              alt="arrow"
            />
            <a href="#" class="hover:text-white text-xs">CONTACTS</a>
          </li>
        </ul>
      </div>

      <!-- 4️⃣ FOLLOW US + APPS -->
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-3">
            <a
              href="#"
              class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              <img
                src="@/assets/icons/footer/media1.svg"
                class="w-4 h-4"
                alt="social"
              />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              <img
                src="@/assets/icons/footer/media2.svg"
                class="w-4 h-4"
                alt="social"
              />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              <img
                src="@/assets/icons/footer/media3.svg"
                class="w-4 h-4"
                alt="social"
              />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              <img
                src="@/assets/icons/footer/media4.svg"
                class="w-4 h-4"
                alt="social"
              />
            </a>
          </div>
        </div>

        <!-- STORE BADGES -->
        <div class="flex space-x-3">
          <a href="#" class="flex items-center gap-4 rounded-lg text-sm">
            <img
              src="@/assets/icons/footer/google-play.svg"
              alt="Google Play"
              class="w-36 h-auto"
            />
          </a>
          <a href="#" class="flex items-center gap-2 rounded-lg text-sm">
            <img
              src="@/assets/icons/footer/app-store.svg"
              alt="App Store"
              class="w-36 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
