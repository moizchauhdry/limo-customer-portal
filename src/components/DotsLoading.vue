<template>
    <div class="flex items-center gap-1.5 md:gap-2">
        <span class="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full animate-bounce-delay1"></span>
        <span class="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full animate-bounce-delay2"></span>
        <span class="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full animate-bounce-delay3"></span>
    </div>
</template>

<style scoped>
@keyframes bounce {

    0%,
    80%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }

    40% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Custom Tailwind-like utilities for animation delays */
.animate-bounce-delay1 {
    animation: bounce 1.4s infinite ease-in-out;
    animation-delay: -0.32s;
}

.animate-bounce-delay2 {
    animation: bounce 1.4s infinite ease-in-out;
    animation-delay: -0.16s;
}

.animate-bounce-delay3 {
    animation: bounce 1.4s infinite ease-in-out;
    animation-delay: 0s;
}
</style>
