<script setup>
import { useRouter, useRoute } from "vue-router";
import { reactive, ref } from "vue";
import axios from "@/axios";
import { useToast } from "vue-toastification";
import { onMounted } from "vue";
import { login } from "@/utils";

const router = useRouter();
const route = useRoute();

const toast = useToast();

const email = route?.query?.email || "";
const resetPassword = route?.query?.reset_password == "true" ? 1 : 0;

console.log(resetPassword);

// Reactive form object
const form = reactive({
  email: email,
  otp: "",
  reset_password: resetPassword,
});

const loading = ref(false);

const sendOtp = async () => {
  try {
    const { data } = await axios.post("/customer/auth/send-otp", {
      email: form.email,
    });

    if (data.success != true) {
      toast.error(data?.message || "OTP Verification Failed!");
    }
  } catch (err) {
    console.error("Otp Verfication error:", err);
  } finally {
    loading.value = false;
  }
};

const verifyOtp = async () => {
  loading.value = true;

  try {
    const { data } = await axios.post("/customer/auth/verify-otp", form);

    if (data.success == true) {
      const token = data?.data?.token;
      if (data?.data?.reset_password == 1) {
        router.push({ name: "update-password", query: { token: token } });
        return;
      }

      if (token) {
        login(token, data.data?.customer);
        router.push({ name: "dashboard" });
        toast.success("Login Successfully!");
      }
    } else {
      toast.error(data?.message || "OTP Verification Failed!");
    }
  } catch (err) {
    console.error("Otp Verfication error:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (email) {
    sendOtp();
  } else {
    toast.error("Email is required to send OTP.");
  }
});
</script>

<template>
  <div class="flex items-center bg-[#FFFFFF] justify-center">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden" data-aos="fade-up" data-aos-duration="1200"
      data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
      <!-- Header -->
      <div class="text-white text-center mt-10">
        <img src="../assets/images/logo.svg" alt="Logo" class="w-[150px] mx-auto" />
      </div>

      <!-- Form -->
      <form class="p-8 space-y-5">
        <!-- Apply Tailwind font + size -->
        <h2 class="font-poppins font-semibold text-4xl text-[#4B4B4B] text-center">
          Welcome
        </h2>
        <p class="text-md text-[#414141] font-poppins font-normal text-center mb-6">
          Please enter the OTP sent to your registered account.
        </p>

        <!-- otp -->
        <div>
          <label class="block text-[#414141] ml-3 text-md mb-1">OTP</label>
          <input v-model="form.otp" type="text" placeholder="Enter your OTP "
            class="font-poppins text-sm justify-center w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
        </div>

        <!-- Submit -->
        <button @click="verifyOtp" :disabled="loading" type="button"
          class="w-full flex items-center bg-[#369FFF] justify-center gap-2 border border-[#AAAAAA] py-2 rounded-lg hover:shadow-lg font-medium">
          <span class="text-[#FFFFFF] font-poppins">
            {{ loading ? "Verifying.... " : "Verify" }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
