<script setup>
import { defineModel, defineEmits, reactive, ref, watch } from "vue"
import ModalComponent from "@/components/ModalComponent.vue"
import { formatDate } from "@/utils";
import axios from "@/axios";
import Form from 'vform'
import FilePond from "@/components/FilePond.vue";
import DotsLoading from "@/components/DotsLoading.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const model = defineModel();
const emit = defineEmits(['refresh']);
const filePondRef = ref(null);
const searchBookingLoading = ref(false);
const bookingSearchQuery = ref("");
const bookings = ref([]);
const selectedBooking = ref(null);

const form = reactive(
    new Form({
        booking_id: "",
        subject: "",
        description: "",
        files: "",
    })
);

let timer = null;

watch(
    () => bookingSearchQuery.value,
    () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            searchBooking()
        }, 500)
    }
)

const searchBooking = async () => {
    try {
        searchBookingLoading.value = true;
        const { data } = await axios.get('/customer/bookings/search-single', {
            params: { search: bookingSearchQuery.value },
        });

        if (data?.success == true) {
            if (data?.data) {
                bookings.value = data.data;
            } else {
                bookings.value = [];
            }
        }
    } catch (err) {
        console.error("Error fetching bookings:", err);
    } finally {
        searchBookingLoading.value = false;
    }
};

const selectBooking = (booking) => {
    selectedBooking.value = booking;
    form.booking_id = booking.id;
    bookingSearchQuery.value = "";
    bookings.value = [];
};

const createComplaint = async () => {
    try {
        const { data } = await form.post("/customer/complaints/create");

        if (data.success == true) {
            toast.success(data.message || "Complaint created successfully!");
            form.reset();
            selectedBooking.value = null;
            emit('refresh');
            model.value = false;
        } else {
            toast.error(data?.message || "Something went wrong! Please try again later.");
        }
    } catch (err) {
        console.error("Store Booking Error:", err);
    }
};
</script>

<template>
    <ModalComponent v-model="model" size="3xl" @close="model = false">
        <template #header>
            <h2 class="text-xl font-semibold">Create Complaint</h2>
        </template>

        <!-- <div> -->
        <div class="space-y-1 flex flex-col gap-5">
            <div class="relative">
                <input type="text" placeholder="Search by booking ID"
                    class="w-full pl-10 pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0]"
                    v-model="bookingSearchQuery" />
                <img src="../../assets/icons/rides/search-icon.svg" class="absolute left-3 top-2.5 h-4"
                    alt="Search Icon" />
                <DotsLoading v-if="searchBookingLoading" class="absolute right-3 top-3" />
            </div>

            <table v-if="bookingSearchQuery"
                class="w-full text-sm text-left text-[#414141] border border-[#B7B7B7] rounded-lg overflow-hidden">
                <thead class="bg-[#0072EF] text-white">
                    <tr>
                        <th class="px-4 py-3 font-semibold text-lg">Booking ID</th>
                        <th class="px-4 py-3 font-semibold text-lg">Date</th>
                        <th class="px-4 py-3 font-semibold text-lg">Pick up</th>
                        <th class="px-4 py-3 font-semibold text-lg">Drop off</th>
                        <th class="px-4 py-3 font-semibold text-lg">Fare</th>
                        <th class="px-4 py-3 font-semibold text-lg">Status</th>
                    </tr>
                </thead>

                <transition-group tag="tbody" name="fade">
                    <tr v-if="bookings.length === 0 && !searchBookingLoading">
                        <td colspan="6" class="px-4 py-8 text-center text-[#A0A0A0]">
                            No record found
                        </td>
                    </tr>
                    <tr v-else class="border-b border-[#D9D9D9] transition cursor-pointer hover:bg-[#d3ebff]"
                        v-for="booking in bookings" :key="booking.id" @click="selectBooking(booking)">
                        <td class="px-4 py-3">#{{ booking?.id }}</td>
                        <td class="px-4 py-3">{{ formatDate(booking?.pickup_date) }}</td>
                        <td class="px-4 py-3">{{ booking?.pickup_location }}</td>
                        <td class="px-4 py-3">{{ booking?.drop_location }}</td>
                        <td class="px-4 py-3">${{ booking?.payments_total }}</td>
                        <td class="px-4 py-3">
                            <span class="inline-block px-3 py-1 rounded-lg text-white text-xs"
                                :style="`background-color: ${booking?.booking_status_label_color}`">
                                {{ booking?.booking_status_name }}
                            </span>
                        </td>
                    </tr>
                </transition-group>
            </table>

            <div v-if="selectedBooking" class="bg-[#d3ebff] border border-[#DBDBDB] rounded-xl shadow mb-6">
                <div class="border-b border-[#B4B4B4] p-2 space-y-4">
                    <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                        <img src="../../assets/icons/navbar/profile.svg" class="h-12 w-12 rounded-full" alt="Driver" />
                        <div class="text-sm text-[#414141]">
                            <p class="font-semibold">{{ selectedBooking.booking_someone_name }}</p>
                            <p class="text-xs sm:text-sm text-[#329EE7]">
                                {{ selectedBooking.booking_someone_email }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between px-4 mt-2">
                    <h3 class="text-lg text-[#414141]">Ride ID: <span class="text-[#329EE7]">#{{ selectedBooking.id
                    }}</span>
                    </h3>
                    <div
                        class="flex items-center gap-2 border border-[#D8D8D8] text-xs text-[#17171A] px-2 py-1 rounded-lg shadow-[0_0_6px_#D8D8D8]">
                        <img src="../../assets/icons/dashboard/distance.svg" class="h-3" alt="date" />
                        <span>{{ selectedBooking.total_distance }}</span>
                        <img src="../../assets/icons/dashboard/mini-clock.svg" class="h-4" alt="date" />
                        <span>{{ selectedBooking.total_time }}</span>
                    </div>
                </div>
                <div class="flex gap-3 items-start justify-between text-sm text-[#414141] px-4 pt-3 pb-2">
                    <div class="flex flex-row gap-2">
                        <div class="flex items-center gap-2">
                            <img src="../../assets/icons/dashboard/location.svg" class="h-4" alt="start" />
                            <span class="text-xs sm:text-sm">{{
                                selectedBooking.pickup_location
                                }}</span>
                        </div>
                        <img src="../../assets/icons/dashboard/small-fare.svg" class="h-2 mt-1.5" alt="route" />

                        <div class="flex items-center gap-2">
                            <img src="../../assets/icons/dashboard/airport.svg" class="h-4" alt="end" />
                            <span class="text-xs sm:text-sm">{{
                                selectedBooking.drop_location
                                }}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/rides/total-fare.svg" class="h-4" alt="Fare" />
                        <p class="text-sm sm:text-lg text-[#000]">Final Fare:</p>
                        <p class="text-sm sm:text-lg font-medium text-[#000]">
                            ${{ selectedBooking.payments_total }}
                        </p>
                    </div>
                </div>

                <div class="flex gap-3 items-start justify-between text-sm text-[#414141] px-4 pb-2">
                    <div class="flex items-start sm:w-[50%] gap-2 rounded-lg px-1 text-md text-[#17171A]">
                        <div class="items-center gap-1">
                            <span class="text-[#414141]"><span class="font-semibold">Pickup Date:</span> {{
                                selectedBooking.pickup_date }}</span>
                        </div>
                        <div class="items-center gap-1">
                            <span class="text-[#414141]"><span class="font-semibold">Pickup Time:</span> {{
                                selectedBooking.pickup_time }}</span>
                        </div>
                    </div>

                    <div class="flex flex-col items-end gap-2">
                        <div
                            :class="`bg-[${selectedBooking.booking_status_label_color}] px-6 sm:px-12 py-1 rounded-full text-white text-sm transition`">
                            {{ selectedBooking.booking_status_name }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 border-2 p-3 rounded-lg">
                <div>
                    <label class="block text-sm sm:text-base text-[#414141] font-medium mb-2">
                        Input your complaint details
                    </label>
                    <input type="text" placeholder="Subject"
                        class="w-full pr-4 py-2 border border-[#D8D8D8] rounded-lg text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
                        v-model="form.subject" />
                    <p v-if="form.errors.has('subject')" class="text-red-500 text-xs mt-1">{{ form.errors.get('subject')
                    }}
                    </p>
                </div>
                <div>
                    <label class="block text-sm sm:text-base text-[#414141] font-medium mb-2">
                        Describe your issue
                    </label>
                    <textarea placeholder="Write here" rows="4"
                        class="w-full border border-[#D8D8D8] rounded-lg px-4 py-2 text-sm text-[#414141] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#0072EF]"
                        v-model="form.description"></textarea>
                    <p v-if="form.errors.has('description')" class="text-red-500 text-xs">{{
                        form.errors.get('description') }}
                    </p>
                </div>

                <div>
                    <label class="block text-sm sm:text-base text-[#414141] font-medium mb-1">
                        Attach files
                    </label>
                    <FilePond ref="filePondRef" :acceptedTypes="['image/*', 'application/pdf']" :multiple="true"
                        v-model="form.files" />
                    <p v-if="form.errors.has('files')" class="text-red-500 text-xs">{{ form.errors.get('files') }}</p>
                </div>
            </div>
        </div>
        <!-- </div> -->

        <template #footer>
            <div class="flex justify-end gap-2">
                <button class="px-4 py-2 bg-gray-200 rounded-lg" @click="model = false">
                    Cancel
                </button>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg" @click="createComplaint">
                    <div v-if="form.busy" class="h-6 flex justify-center items-center">
                        <DotsLoading />
                    </div>
                    <span v-else>Save</span>
                </button>
            </div>
        </template>
    </ModalComponent>
</template>
