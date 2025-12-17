<script setup>
import { defineProps, defineEmits, reactive, onMounted, ref, computed } from "vue"
import ModalComponent from "@/components/ModalComponent.vue"
import Form from 'vform'
import DotsLoading from "@/components/DotsLoading.vue";
import { useToast } from "vue-toastification";
import axios from "@/axios";

const props = defineProps({
    ride: {
        type: Object,
        default: () => { }
    }
})
const toast = useToast();

const model = ref(true);
const emit = defineEmits(['close']);

const btnLoading = ref(false);
const fetchCreditBalanceLoading = ref(false);
const creditBalance = ref(0);

const rideId = computed(() => props.ride?.id);

const form = reactive(
    new Form({
        booking_id: rideId.value,
        payment_method: 'credit',
    })
);

const fetchCreditBalance = async () => {
    try {
        fetchCreditBalanceLoading.value = true;

        const { data } = await axios.get("/customer/wallet/available-credit-balance");

        if (data.success == true) {
            creditBalance.value = data?.data?.available_credit_balance;
        } else {
            toast.error(data?.message || "Something went wrong! Please try again later.");
        }
    } catch (err) {
        console.error("Fetch Credit Balance Error:", err);
    } finally {
        fetchCreditBalanceLoading.value = false;
    }
};

const payNow = async () => {
    try {
        const { data } = await form.post("/customer/bookings/payment");

        if (data.success == true) {
            if (data?.data?.payment_method == 'credit') {
                toast.success(data.message || "Booking Payment successfully!");
                close();
            } else {
                if (data?.data?.payment_url) {
                    btnLoading.value = true;
                    window.location.href = data?.data?.payment_url;
                } else {
                    toast.error(data?.message || "Something went wrong! Please try again later.");
                }
            }
        } else {
            toast.error(data?.message || "Something went wrong! Please try again later.");
        }
    } catch (err) {
        console.error("Pay Now Error:", err);
    }
};

const close = () => {
    model.value = false;
    emit('close');
};

onMounted(() => {
    fetchCreditBalance();
});
</script>

<template>
    <ModalComponent v-model="model" size="3xl" @close="close">
        <template #header>
            <h2 class="text-xl font-semibold">Choose a payment method</h2>
        </template>

        <!-- Booking Summary -->
        <div class="bg-white border border-[#DBDBDB] rounded-xl shadow mb-6 p-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg text-[#414141]">Ride ID: #{{ ride.id }}</h3>
                <div
                    class="flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-2 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8]">
                    <img src="../../assets/icons/dashboard/distance.svg" class="h-3" alt="date" />
                    <span>{{ ride.total_distance }}</span>
                    <img src="../../assets/icons/dashboard/mini-clock.svg" class="h-4" alt="date" />
                    <span>{{ ride.total_time }}</span>
                </div>
            </div>
            <div class="flex gap-3 items-start text-sm text-[#414141] pt-3 pb-2">
                <img src="../../assets/icons/dashboard/location-line.svg" class="h-10 sm:h-12 pt-1" alt="route" />

                <div class="flex flex-col space-y-3">
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                        <span class="text-xs sm:text-sm">{{
                            ride.pickup_location
                        }}</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                        <span class="text-xs sm:text-sm">{{
                            ride.drop_location
                        }}</span>
                    </div>
                </div>

                <div
                    class="ml-auto border border-[#329EE7] whitespace-nowrap px-2 sm:px-6  rounded-full text-[#329EE7] text-[10px] sm:text-[12px]">
                    <h1>{{ ride.travel_type === "1" ? "One Way" : ride.travel_type === "2" ? "Round Trip" : "N/A" }}
                    </h1>
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div class="flex flex-col gap-1 rounded-lg px-1 text-md text-[#17171A]">
                    <div class="items-center">
                        <span class="text-[#414141]">Pickup Date: {{ ride.pickup_date }}</span>
                    </div>
                    <div class="items-center">
                        <span class="text-[#414141]">Pickup Time: {{ ride.pickup_time }}</span>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                    <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                    <p class="text-sm sm:text-lg font-medium text-[#000]">
                        ${{ ride.payments_total }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Available Credit Balance -->
        <div class="rounded-xl bg-blue-50 p-3 mb-4">
            <p class="text-xs text-blue-600 font-medium">
                Your Credit Balance
            </p>
            <div v-if="fetchCreditBalanceLoading" class="flex items-center mt-3">
                <DotsLoading />
            </div>
            <p v-else class="text-lg font-bold text-blue-700">
                ${{ creditBalance }}
            </p>
        </div>

        <!-- Payment Methods -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="relative cursor-pointer rounded-xl border p-4 flex items-start gap-4 transition
            hover:border-blue-400
            focus-within:ring-2 focus-within:ring-blue-500" :class="form.payment_method === 'credit'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white'">
                <input type="radio" class="sr-only" value="credit" v-model="form.payment_method" />

                <div class="flex h-5 w-5 items-center justify-center rounded-full border" :class="form.payment_method === 'credit'
                    ? 'border-blue-600'
                    : 'border-gray-300'">
                    <div v-if="form.payment_method === 'credit'" class="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                </div>

                <div>
                    <h3 class="font-semibold text-gray-900">
                        Credit Balance
                    </h3>
                    <p class="text-sm text-gray-500">
                        Use your available wallet balance
                    </p>
                </div>
            </label>

            <!-- Card -->
            <label class="relative cursor-pointer rounded-xl border p-4 flex items-start gap-4 transition
            hover:border-blue-400
            focus-within:ring-2 focus-within:ring-blue-500" :class="form.payment_method === 'card'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white'">
                <input type="radio" class="sr-only" value="card" v-model="form.payment_method" />

                <div class="flex h-5 w-5 items-center justify-center rounded-full border" :class="form.payment_method === 'card'
                    ? 'border-blue-600'
                    : 'border-gray-300'">
                    <div v-if="form.payment_method === 'card'" class="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                </div>

                <div>
                    <h3 class="font-semibold text-gray-900">
                        Card
                    </h3>
                    <p class="text-sm text-gray-500">
                        Pay using debit or credit card
                    </p>
                </div>
            </label>
        </div>

        <template #footer>
            <div class="flex justify-end gap-2">
                <button class="px-4 py-2 bg-gray-200 rounded-lg" @click="close">
                    Cancel
                </button>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    :disabled="fetchCreditBalanceLoading || form.busy || btnLoading" @click="payNow">
                    <div v-if="fetchCreditBalanceLoading || form.busy || btnLoading"
                        class="h-6 flex justify-center items-center">
                        <DotsLoading />
                    </div>
                    <span v-else>Pay Now</span>
                </button>
            </div>
        </template>
    </ModalComponent>
</template>
