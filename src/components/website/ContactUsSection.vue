<script setup>
import locationIcon from "@/assets/icons/contact/location-contact.svg";
import phoneIcon from "@/assets/icons/contact/phone-contact.svg";
import emailIcon from "@/assets/icons/contact/email-contact.svg";

const contactInfo = [
    {
        id: 1,
        label: "ADDRESS",
        value: "1921 Union St #5058,\nAnaheim, CA 92805, USA",
        icon: locationIcon,
    },
    {
        id: 2,
        label: "TELEPHONE",
        value: "+1 (888) 8959619",
        icon: phoneIcon,
    },
    {
        id: 3,
        label: "EMAIL",
        value: "info@arealimoservice.com",
        icon: emailIcon,
    },
];
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-white">
        <!-- Heading -->
        <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="1200">
            <h2 class="text-[40px] lg:text-[60px] font-bold text-[#010101]">
                Contact Us
            </h2>
        </div>

        <!-- Content -->
        <div class="flex flex-col lg:flex-row gap-12 items-start justify-between max-w-6xl mx-auto" data-aos="fade-up"
            data-aos-duration="1200">
            <!-- Left Info -->
            <div class="space-y-8">
                <div v-for="item in contactInfo" :key="item.id" class="flex items-start gap-4">
                    <img :src="item.icon" class="w-16 h-16" />

                    <div>
                        <p class="text-xs font-light text-[#010101] mb-1">
                            {{ item.label }}
                        </p>
                        <p class="text-[16px] font-medium text-[#010101] leading-relaxed whitespace-pre-line">
                            {{ item.value }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Form -->
            <form class="space-y-6 w-full max-w-xl">
                <!-- Inputs -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="text-xs font-medium text-[#010101] mb-2 block">
                            Full Name
                        </label>
                        <input type="text" placeholder="Your Name"
                            class="w-full border border-[#dcdcdc] rounded-lg px-4 py-3 text-sm placeholder:text-[#929292] focus:outline-none focus:border-black" />
                    </div>

                    <div>
                        <label class="text-xs font-medium text-[#010101] mb-2 block">
                            Email Address
                        </label>
                        <input type="email" placeholder="Your Email"
                            class="w-full border border-[#dcdcdc] rounded-lg px-4 py-3 text-sm placeholder:text-[#929292] focus:outline-none focus:border-black" />
                    </div>
                </div>

                <!-- Message -->
                <div>
                    <label class="text-xs font-medium text-[#010101] mb-2 block">
                        Message
                    </label>
                    <textarea rows="5" placeholder="Message"
                        class="w-full border border-[#dcdcdc] rounded-lg px-4 py-3 text-sm resize-none placeholder:text-[#929292] focus:outline-none focus:border-black"></textarea>
                </div>

                <!-- Checkbox -->
                <div class="flex items-start gap-2 text-xs text-[#474747]">
                    <input type="checkbox" class="mt-1" />
                    <p>
                        I Agree That My Submitted Data Is Being Collected And Stored.
                        For Further Details On Handling User Data, See Our Privacy Policy.
                    </p>
                </div>

                <!-- Button -->
                <button type="submit"
                    class="w-full max-w-[350px] mx-auto flex items-center justify-center h-12 bg-gradient-to-r from-[#FFC107] to-[#FFD400] rounded-lg font-semibold text-black">
                    Get a Free Quote
                </button>
            </form>
        </div>
    </section>
</template>
