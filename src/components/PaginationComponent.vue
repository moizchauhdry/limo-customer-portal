<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  pagination: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["change"]);

const goTo = (url) => {
  if (!url) return;
  emit("change", url);
};

/* Mobile pagination: Prev 1 2 ... last Next */
const mobileLinks = computed(() => {
  if (!props.pagination?.links?.length) return [];

  const links = props.pagination.links;

  const prev = links.find(l => l.label.includes("Previous"));
  const next = links.find(l => l.label.includes("Next"));

  const pages = links.filter(
    l => l.url && !l.label.includes("Previous") && !l.label.includes("Next")
  );

  if (pages.length <= 2) return pages;

  return [
    prev,
    pages[0],
    pages[1],
    { label: "...", url: null },
    pages[pages.length - 1],
    next
  ];
});
</script>


<template>
  <div
    v-if="pagination && pagination.last_page > 1"
    class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <!-- Results info -->
    <p class="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
      Showing
      <span class="font-medium">{{ pagination.from }}</span>
      to
      <span class="font-medium">{{ pagination.to }}</span>
      of
      <span class="font-medium">{{ pagination.total }}</span>
      results
    </p>

    <!-- Pagination -->
    <nav class="flex items-center gap-1 justify-center sm:justify-end">

      <!-- 🔹 Mobile pagination -->
      <div class="flex gap-1 sm:hidden">
        <button
          v-for="(link, index) in mobileLinks"
          :key="index"
          @click="goTo(link?.url)"
          :disabled="!link?.url"
          class="
            min-w-[34px]
            px-2
            py-1.5
            text-xs
            rounded-lg
            border
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
          :class="[
            link?.label == pagination.current_page
              ? 'bg-[#329EE7] text-white border-[#329EE7]'
              : 'text-gray-700 hover:bg-gray-50'
          ]"
          v-html="link?.label"
        />
      </div>

      <!-- 🔹 Desktop pagination -->
      <div class="hidden sm:flex gap-1">
        <button
          v-for="(link, index) in pagination.links"
          :key="index"
          @click="goTo(link.url)"
          :disabled="!link.url"
          class="
            min-w-[36px]
            px-3
            py-2
            text-sm
            rounded-lg
            border
            transition
            whitespace-nowrap
            disabled:opacity-50
          "
          :class="[
            link.active
              ? 'bg-[#329EE7] text-white border-[#329EE7]'
              : 'text-gray-700 hover:bg-gray-50'
          ]"
          v-html="link.label"
        />
      </div>

    </nav>
  </div>
</template>

