<script setup>
import axios from "@/axios";
import Form from 'vform'
import { onMounted, reactive, ref } from "vue";
import DotsLoading from "@/components/DotsLoading.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const loading = ref(false);

const form = reactive(
  new Form({
    name: "",
    email: "",
    phone: "",
  })
);

const getProfileData = async (updateLocalStorage = false) => {
  try {
    loading.value = true;
    const { data } = await axios.get("/customer/profile");

    if (data.success == true) {
      form.name = data?.data?.name || "";
      form.email = data?.data?.email || "";
      form.phone = data?.data?.phone || "";

      if (updateLocalStorage) {
        localStorage.setItem("customer", JSON.stringify(data?.data));
      }
    } else {
      toast.error(data.message || "Failed to fetch profile data");
    }
  } catch (err) {
    console.error("Create Ride Data Fetching Error:", err);
    toast.error("Failed to fetch profile data");
  } finally {
    loading.value = false;
  }
};

const updateProfile = async () => {
  try {
    const { data } = await form.put("/customer/profile/update");

    if (data.success == true) {
      getProfileData(true);
      toast.success(data.message || "Profile updated successfully");
    } else {
      toast.error(data.message || "Failed to update profile");
    }
  } catch (err) {
    console.error("Update Profile Error:", err);
  }
};

onMounted(() => {
  getProfileData();
});
</script>
<template>
  <!-- MAIN CONTENT -->
  <main class="lg:ml-64 pt-[100px] mb-10 px-4 sm:px-0" data-aos="fade-right" data-aos-duration="1200"
    data-aos-offset="150" data-aos-easing="ease-in-out" data-aos-delay="100">
    <div class="mx-auto max-w-4xl">
      <!-- Heading -->
      <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-6">
        Settings & Profile
      </p>

      <!-- FORM CONTAINER -->
      <div class="space-y-6">
        <!-- Full Name -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1">Full Name</label>
          <input type="text" placeholder="Enter your full name"
            class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
            v-model="form.name" />
          <p v-if="form.errors.has('name')" class="text-red-500 text-xs">{{ form.errors.get('name') }}</p>
        </div>

        <!-- Email -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1">Email address</label>
          <input type="email" placeholder="Enter your email address"
            class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7] cursor-not-allowed disabled:bg-[#F5F5F5]"
            v-model="form.email" disabled />
        </div>

        <!-- Phone + DOB -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Phone -->
          <div class="flex flex-col">
            <label class="text-md text-[#515151] mb-1">Phone Number</label>
            <input type="text" placeholder="Enter your phone number"
              class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]"
              v-model="form.phone" />
            <p v-if="form.errors.has('phone')" class="text-red-500 text-xs">{{ form.errors.get('phone') }}</p>
          </div>

          <!-- DOB -->
          <div class="flex flex-col">
            <label class="text-md text-[#515151] mb-1">Date of birth</label>
            <input type="date" placeholder="02/12/2001"
              class="w-full border border-[#B7B7B7] rounded-lg px-4 py-2 text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#329EE7]" />
          </div>
        </div>

        <!-- Address -->
        <div class="flex flex-col">
          <label class="text-md text-[#515151] mb-1">Address</label>

          <!-- Address Box -->
          <div class="border border-[#B7B7B7] rounded-xl p-8 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <!-- Street -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap">Street:</span>
                <input type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none" />
              </label>

              <!-- City -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap">City:</span>
                <input type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none" />
              </label>

              <!-- Postal Code -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap">Postal Code:</span>
                <input type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none" />
              </label>

              <!-- Country -->
              <label class="flex items-baseline gap-2">
                <span class="text-sm text-[#515151] whitespace-nowrap">Country:</span>
                <input type="text"
                  class="w-full border-0 border-b border-[#B7B7B7] bg-transparent px-1 text-sm placeholder:text-gray-400 focus:border-b-2 focus:border-[#0072EF] focus:outline-none" />
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center pt-2">
            <button
              class="bg-[#369FFF] text-white w-[60%] py-2 rounded-lg text-sm hover:bg-blue-600 transition disabled:opacity-50"
              :disabled="form.busy || loading" @click="updateProfile">
              <div v-if="form.busy" class="h-6 flex justify-center items-center">
                <DotsLoading />
              </div>
              <span v-else>Save changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
