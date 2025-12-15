<!-- components/Modal.vue -->
<script setup>
import { defineProps, defineModel, defineEmits } from "vue"

defineProps({
    size: {
        type: String,
        default: "md", // default size
    },
})

const model = defineModel();
const emit = defineEmits(['close']);

const sizeClasses = {
    sm: "max-w-sm w-full",
    md: "max-w-md w-full",
    lg: "max-w-lg w-full",
    xl: "max-w-xl w-full",
    "2xl": "max-w-2xl w-full",
    "3xl": "max-w-3xl w-full",
    "4xl": "max-w-4xl w-full",
    "5xl": "max-w-5xl w-full",
    "6xl": "max-w-6xl w-full",
    "7xl": "max-w-7xl w-full",
    full: "w-full h-full rounded-none",
}
</script>
<template>
    <transition name="fade">
        <div v-if="model" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            @click.self="emit('close')">
            <div :class="[
                'bg-white rounded-xl shadow-xl px-6 py-4 mx-4 animate-modal',
                sizeClasses[size] || sizeClasses['md']
            ]">
                <!-- Header Slot -->
                <div v-if="$slots.header" class="mb-4 border-b pb-3">
                    <slot name="header" />
                </div>

                <!-- Default Body Slot -->
                <div class="overflow-y-auto hide-scrollbar" style="max-height: calc(90vh - 160px)">
                    <slot />
                </div>

                <!-- Footer Slot -->
                <div v-if="$slots.footer" class="mt-4 border-t pt-3">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes popup {
    from {
        transform: scale(0.93);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-modal {
    animation: popup 0.2s ease;
}

/* Add this in Modal.vue <style> */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
