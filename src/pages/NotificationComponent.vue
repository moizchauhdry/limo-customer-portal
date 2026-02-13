<script setup>
import { ref } from "vue";

const showEmptyState = ref(true);

const notifications = ref([
    {
        id: 1,
        title: "Ride Completed",
        message: "Your ride from JFK Airport to Manhattan has been completed successfully.",
        time: "2 hours ago",
        type: "success",
    },
    {
        id: 2,
        title: "Ride Cancelled",
        message: "Your scheduled ride for tomorrow has been cancelled.",
        time: "Yesterday",
        type: "warning",
    },
]);

const badgeColor = (type) => {
    switch (type) {
        case "success":
            return "bg-green-100 text-green-700";
        case "warning":
            return "bg-yellow-100 text-yellow-700";
        default:
            return "bg-blue-100 text-blue-700";
    }
};
</script>

<template>
    <!-- MAIN CONTENT -->
    <main class="lg:ml-64 pt-[100px] mb-10 px-4 sm:px-0 min-h-screen overflow-y-auto">
        <div class="mx-auto max-w-4xl">
            <template v-if="!showEmptyState">
                <!-- Heading -->
                <p class="text-2xl sm:text-3xl text-[#414141] font-normal mt-4 mb-6">
                    Notifications
                </p>
                <!-- Notifications List -->
                <div class="space-y-4">
                    <div v-for="note in notifications" :key="note.id"
                        class="bg-white border border-[#E0E0E0] rounded-xl p-4 shadow-sm hover:shadow-md transition">
                        <div class="flex items-start justify-between gap-3">
                            <!-- Left -->
                            <div class="space-y-1">
                                <h3 class="text-[#414141] font-medium text-base sm:text-lg">
                                    {{ note.title }}
                                </h3>
                                <p class="text-sm text-[#606060]">
                                    {{ note.message }}
                                </p>
                            </div>

                            <!-- Badge -->
                            <span class="inline-flex items-center justify-center
                             text-xs font-medium
                             p-3  w-32 h-6 sm:w-20 sm:h-6
                             rounded-full whitespace-nowrap" :class="badgeColor(note.type)">
                                {{ note.type }}
                            </span>

                        </div>

                        <!-- Footer -->
                        <div class="mt-2 text-xs text-[#909090]">
                            {{ note.time }}
                        </div>
                    </div>
                </div>
            </template>

            <!-- Empty State -->
            <template v-else>
                <div class="flex flex-col items-center justify-center text-center py-16 gap-4">
                    <img src="../assets/images/logo.svg" alt="Urban Elite Limo" class="h-12 sm:h-28 w-auto opacity-80" />

                    <p class="text-[#909090] text-sm sm:text-xl">
                        You’re all caught up <br> no notifications at the moment.
                    </p>

                </div>
            </template>


        </div>

    </main>
</template>
