<script setup>
import DotsLoading from "@/components/DotsLoading.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "@/axios";
import { useToast } from "vue-toastification";

const router = useRouter();
const toast = useToast();

// Reactive form object
const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  remember: false,
});

const loading = ref(false);

const signupHandler = async () => {
  loading.value = true;

  try {
    const { data } = await axios.post("/customer/auth/signup", form);

    if (data.success == true) {
      router.push({ name: "verify-otp", query: { email: form.email } });
    } else {
      toast.error(data?.message || "Signup Failed!");
    }
  } catch (err) {
    console.error("Signup error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex items-center justify-center bg-[#FFFFFF]">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden" data-aos="fade-right" data-aos-duration="1200"
      data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <!-- Header -->
      <div class="text-white text-center mt-10">
        <img src="../assets/images/logo.svg" alt="Logo" class="w-[150px] mx-auto" />
      </div>

      <!-- Form -->
      <form class="p-8 space-y-5" @submit.prevent="signupHandler">
        <h2 class="font-poppins font-semibold text-4xl text-[#4B4B4B] text-center">
          Welcome Back
        </h2>
        <p class="text-lg text-[#414141] font-poppins font-normal text-center mb-6">
          Sign up to your account!
        </p>

        <!-- Full Name -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Full Name</label>
          <input v-model="form.name" type="text" placeholder="Enter your full name"
            class="font-poppins text-sm w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Email</label>
          <input v-model="form.email" type="email" placeholder="Enter your email"
            class="font-poppins text-sm w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Password</label>
          <input v-model="form.password" type="password" placeholder="Enter your password"
            class="font-poppins text-sm w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Confirm Password</label>
          <input v-model="form.password_confirmation" type="password" placeholder="Confirm your password"
            class="font-poppins text-sm w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Remember me + Forgot -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-[#414141] ml-4 font-poppins">
            <input type="checkbox" v-model="form.remember" class="rounded text-blue-600" />
            <span>Remember me</span>
          </label>
          <router-link to="/auth/forget-password" class="text-[#0072EF] hover:text-black underline font-poppins">Forget
            Password?</router-link>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="loading"
          class="w-full bg-[#0072EF] text-white py-2 rounded-lg font-semibold hover:bg-black transition">
          <!-- Loading -->
          <div v-if="loading" class="flex justify-center py-2 sm:py-1.5">
            <DotsLoading />
          </div>
          <span v-else>Create Account</span>
        </button>

        <!-- Link to Login -->
        <p class="text-center text-md text-[#414141] font-poppins mt-4">
          Do you have an account?
          <router-link to="/auth/login" class="text-blue-600 hover:text-black underline">Sign in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
