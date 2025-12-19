<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
    pagination: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['change'])

const goTo = (url) => {
    if (!url) return
    emit('change', url)
}
</script>
<template>
    <div v-if="pagination && pagination.last_page > 1"
        class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <!-- Results info -->
        <p class="text-sm text-gray-600">
            Showing
            <span class="font-medium">{{ pagination.from }}</span>
            to
            <span class="font-medium">{{ pagination.to }}</span>
            of
            <span class="font-medium">{{ pagination.total }}</span>
            results
        </p>

        <!-- Pagination links -->
        <nav class="inline-flex items-center gap-1 flex-wrap">
            <button v-for="(link, index) in pagination.links" :key="index" @click="goTo(link.url)" :disabled="!link.url"
                class="px-3 py-2 text-sm rounded-lg border transition
               disabled:opacity-50 disabled:cursor-not-allowed" :class="[
                link.active
                    ? 'bg-[#329EE7] text-white border-[#329EE7]'
                    : 'text-gray-700 hover:bg-gray-50',
            ]" v-html="link.label" />
        </nav>
    </div>
</template>