<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import axios from "@/axios"; 
// import { useToast } from "vue-toastification";


const router = useRouter();
const loading = ref(false);
const email = ref("");

// const emailHandler = async() => {
//   loading.value = true;
//   router.push({
//     name: "verify-otp",
//     query: { email: email.value, reset_password: true },
//   });
// };

const emailHandler = async() => {
  loading.value = true;
  router.push({
    name: "verify-otp",
    query: { email: email.value, reset_password: true },
  });
};
</script>

<template>
  <div class="flex items-center bg-[#FFFFFF] justify-center">
    <div
      class="bg-white rounded-2xl w-full max-w-md overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-offset="150"
      data-aos-easing="ease-in-out"
      data-aos-delay="100"
    >
      <!-- Header -->
      <div class="text-white text-center mt-10">
        <img
          src="../assets/images/logo.svg"
          alt="Logo"
          class="w-[150px] mx-auto"
        />
      </div>

      <!-- Form -->
      <form class="p-8 space-y-5">
        <!-- Apply Tailwind font + size -->
        <h2
          class="font-poppins font-semibold text-4xl text-[#4B4B4B] text-center"
        >
          Welcome
        </h2>
        <p
          class="text-md text-[#414141] font-poppins font-normal text-center mb-6"
        >
          Please enter the Registered Email.
        </p>

        <!-- otp -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your Email "
            class="font-poppins text-sm justify-center w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]"
          />
        </div>

        <!-- Submit -->
        <button
          @click="emailHandler"
          type="button"
          class="w-full flex items-center bg-[#369FFF] justify-center gap-2 border border-[#AAAAAA] py-2 rounded-lg hover:shadow-lg font-medium"
        >
          <span class="text-[#FFFFFF] font-poppins">
            {{ loading ? "Sending.... " : "Send OTP" }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
