<script setup>
import { reactive, ref } from 'vue';
import axios from "@/axios";
import { useToast } from "vue-toastification";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const toast = useToast();
const token = route?.query?.token || "";

const form = reactive({
    password: "",
    password_confirmation: "",
    token: token,
});

const loading = ref(false);

const updatePassword = async () => {
    try {
        loading.value = true;
        const { data } = await axios.post("customer/auth/update-password", form)

        if (data.success == true) {
            router.push({ name: "login" })
            toast.success(data?.message || "Password Updated Successfully!");
        } else {
            toast.error(data?.message || "Failed to Update Password!");
        }
    } catch (err) {
        console.log("Password Update error ", err)
    } finally {
        loading.value = false;
    }
};


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
                    Please enter the New Password.
                </p>

                <!-- New Password -->
                <div>
                    <label class="block text-[#414141] ml-3 text-md mb-1">New Password</label>
                    <input v-model="form.password" type="password" placeholder="Enter your New Password"
                        class="font-poppins text-sm justify-center w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
                </div>
                <!-- Confirm New Password -->
                <div>
                    <label class="block text-[#414141] ml-3 text-md mb-1">Confirm New Password</label>
                    <input v-model="form.password_confirmation" type="password" placeholder="Confirm your New Password"
                        class="font-poppins text-sm justify-center w-full px-4 py-2 border border-[#AAAAAA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B9B9B9]" />
                </div>

                <!-- Updating -->
                <button type="button" @click="updatePassword"
                    class="w-full flex items-center bg-[#369FFF] justify-center gap-2 border border-[#AAAAAA] py-2 rounded-lg hover:shadow-lg font-medium">
                    <span class="text-[#FFFFFF] font-poppins">
                        {{ loading ? "Updating.... " : "Update Passwrod" }}
                    </span>
                </button>
            </form>
        </div>
    </div>
</template>
