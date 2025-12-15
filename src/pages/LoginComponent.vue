<script setup>
import DotsLoading from "@/components/DotsLoading.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "@/axios";
import { useToast } from "vue-toastification";
import { login } from "@/utils";


const router = useRouter();
const toast = useToast();

// Reactive form object
const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const loading = ref(false);

const loginHandler = async () => {
  loading.value = true;

  try {
    const payload = {
      email: form.email,
      password: form.password,
    };

    const { data } = await axios.post("/customer/auth/login", payload);

    const token = data?.data?.token;

    if (data.data?.account_not_verified == true) {
      router.push({ name: "verify-otp", query: { email: form.email } });
    } else if (token && data.success == true) {
      login(token, data.data?.customer);
      router.push({ name: "dashboard" });
      toast.success(data?.message || "Login Successful!");
    } else {
      toast.error(data?.message || "Login Failed!");
    }
  } catch (err) {
    console.error("Login error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>

  <body class="flex items-center bg-[#FFFFFF] justify-center">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden" data-aos="fade-right" data-aos-duration="1200"
      data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <!-- Header -->
      <div class="text-white text-center mt-10">
        <img src="../assets/images/logo.svg" alt="Logo" class="w-[150px] mx-auto" />
      </div>

      <!-- Form -->
      <form class="p-8 space-y-5" @submit.prevent="loginHandler">
        <!-- Apply Tailwind font + size -->
        <h2 class="font-poppins font-semibold text-4xl text-[#4B4B4B] text-center">
          Welcome Back
        </h2>
        <p class="text-lg text-[#414141] font-poppins font-normal text-center mb-6">
          Sign in to your account!
        </p>

        <!-- Email -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Email</label>
          <input v-model="form.email" type="email" placeholder="Enter your email ;"
            class="font-poppins text-sm justify-center w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">Password</label>
          <input v-model="form.password" type="password" placeholder="Enter your password ;"
            class="font-poppins text-sm w-full px-4 py-2 border rounded-lg border-[#AAAAAA] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Remember me + Forgot -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-[#414141] font-poppins">
            <input type="checkbox" class="rounded text-blue-600" v-model="form.remember" />
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
          <span v-else>login</span>
        </button>

        <!-- Google Sign In -->
        <button type="button"
          class="w-full flex items-center justify-center gap-2 bg-white border border-[#AAAAAA] py-2 rounded-lg hover:bg-gray-50 transition font-medium">
          <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
          <span class="text-[#7E7E7E] font-poppins">Continue With Google</span>
        </button>

        <!-- Sign Up -->
        <p class="text-center text-md text-[#414141] font-poppins">
          Don’t have account?
          <router-link class="text-blue-600 hover:text-black underline" to="/auth/signup">sign up</router-link>
        </p>
      </form>
    </div>
  </body>
</template>
