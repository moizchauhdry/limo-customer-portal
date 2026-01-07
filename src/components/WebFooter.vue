<template>
  <!-- FOOTER : single-row grid on desktop, stacked on mobile -->
  <footer
    class="bg-[linear-gradient(93.72deg,#3D3D3D_2.95%,#000000_100%)] text-white px-4 md:px-10 lg:px-20 py-10 sm:py-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-10 items-start">
      <!-- 1️⃣ LOGO + NEWSLETTER -->
      <div class="lg:col-span-2 space-y-2">
        <!-- LOGO -->
        <img src="@/assets/icons/footer/footer-logo.svg" alt="Elite Limo" class="h-14 sm:h-10 mb-2 sm:mb-0 cursor-pointer" 
         @click="$router.push('/')"
        />
        <div class="hidden sm:flex flex-col sm:pt-2 sm:space-y-1">
          <h3 class="text-md">Subscribe To Our Newsletter</h3>
          <p class="text-gray-300 text-xs sm:pb-2">
            Stay up to date with the latest deals, promotions, and travel tips.
          </p>
          <div class="relative w-[80%]">
            <!-- email input -->
            <input type="email" placeholder="Enter Your Email ..."
              class="w-full text-sm py-2.5 pl-3 pr-3 bg-white border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(250,191,36,1)]" />

            <!-- golden arrow button -->
            <button class="absolute right-0 top-0 bottom-0 w-11 h-full flex items-center justify-center rounded-lg"
              style="background-color: rgba(250, 191, 36, 1)">
              <img src="@/assets/icons/footer/footer1.svg" alt="arrow" class="w-3 h-3 object-contain" />
            </button>
          </div>
        </div>
        <div class="flex flex-col sm:hidden">
          <div class="flex flex-row space-x-2 pt-4">
            <img src="@/assets/icons/footer/yellow-call.svg" class="" alt="arrow" />
            <p class="text-white text-sm">
              +1 (888) 8959619
            </p>
          </div>
          <div class="flex flex-row space-x-2 pt-4">
            <img src="@/assets/icons/footer/yellow-mail.svg" class="" alt="arrow" />
            <p class="text-white text-sm">
              info@urbanelitelimo.com
            </p>
          </div>
        </div>
      </div>

      <!-- 2️⃣ VEHICLE TYPES -->
      <div>
        <h4 class="text-2xl sm:text-lg mb-2 sm:mb-4">Vehicle types</h4>
        <ul class="space-y-2 sm:space-y-5 text-xs text-gray-300">
          <li><a href="#" class="hover:text-white">CAR RENTAL</a></li>
          <li><a href="#" class="hover:text-white">CLASSIC CAR RENTAL</a></li>
          <li><a href="/terms-condition" class="hover:text-white">TERMS & CONDITIONS</a></li>
          <li>
            <a href="/privacy-policy" class="hover:text-white whitespace-nowrap">PRIVACY POLICY</a>
          </li>
        </ul>
      </div>
      <!-- 2️⃣ VEHICLE TYPES -->
      <div class="hidden sm:flex">
        <div class="mb-4"></div>
        <ul class="space-y-2 sm:space-y-5 text-xs text-gray-300 mt-[2.75rem]">
          <li><a href="#" class="hover:text-white">SUV RENTAL</a></li>
          <li><a href="#" class="hover:text-white">SPORTS CAR RENTAL</a></li>
          <li><a href="/terms-condition" class="hover:text-white">TERMS & CONDITIONS</a></li>
          <li>
            <a href="/privacy-policy" class="hover:text-white whitespace-nowrap">PRIVACY POLICY</a>
          </li>
        </ul>
      </div>

      <!-- 3️⃣ COMPANY -->
      <div>
        <h4 class="text-2xl sm:text-lg mb-3 sm:mb-4">Company</h4>
        <ul class="space-y-3 sm:space-y-5 text-sm text-gray-300">
          <li class="flex items-center gap-2">
            <img src="@/assets/icons/footer/footer2.svg" class="w-2 h-2" alt="arrow" />
            <router-link to="/about-us" class="hover:text-white text-xs">ABOUT</router-link>
          </li>
          <li class="flex items-center gap-2">
            <img src="@/assets/icons/footer/footer2.svg" class="w-2 h-2" alt="arrow" />
            <a href="#" class="hover:text-white text-xs">TEAM</a>
          </li>
          <li class="flex items-center gap-2">
            <img src="@/assets/icons/footer/footer2.svg" class="w-2 h-2" alt="arrow" />
            <a href="#" class="hover:text-white text-xs">FAQ</a>
          </li>
          <li class="flex items-center gap-2">
            <img src="@/assets/icons/footer/footer2.svg" class="w-2 h-2" alt="arrow" />
            <router-link to="/contact-us" class="hover:text-white text-xs">CONTACTS</router-link>
          </li>
        </ul>
      </div>

      <!-- 4️⃣ FOLLOW US + APPS -->
      <div class="space-y-4 sm:space-y-6">
        <div>
          <h4 class="text-lg mb-4">Follow Us</h4>
          <div class="flex sm:space-x-3">
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700">
              <img src="@/assets/icons/footer/media1.svg" class="w-4 h-4" alt="social" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700">
              <img src="@/assets/icons/footer/media2.svg" class="w-4 h-4" alt="social" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700">
              <img src="@/assets/icons/footer/media3.svg" class="w-4 h-4" alt="social" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-700">
              <img src="@/assets/icons/footer/media4.svg" class="w-4 h-4" alt="social" />
            </a>
          </div>
        </div>

        <!-- STORE BADGES -->
        <div class="flex space-x-3 pt-6 sm:pt-0">
          <a href="#" class="flex items-center gap-4 rounded-lg text-sm">
            <img src="@/assets/icons/footer/google-play.svg" alt="Google Play" class="w-36 h-auto" />
          </a>
          <a href="#" class="flex items-center gap-2 rounded-lg text-sm">
            <img src="@/assets/icons/footer/app-store.svg" alt="App Store" class="w-36 h-auto" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
