<template>
  <div
    class="app-structured-list-cell"
    :hideOnMobile="hideOnMobile"
    role="gridcell"
  >
    <div class="flex items-center gap-3 md:gap-4">
      <div
        v-if="statusIndicator"
        class="relative w-5 h-5 md:w-6 md:h-6 shrink-0 basis-auto"
      >
        <AppIcon
          icon="add"
          class="absolute inset-0 transition-opacity duration-300 text-xl md:text-2xl"
          :class="status ? 'opacity-0' : 'opacity-100'"
        />

        <AppIcon
          icon="remove"
          class="absolute inset-0 transition-opacity duration-300 text-xl md:text-2xl"
          :class="status ? 'opacity-100' : 'opacity-0'"
        />
      </div>

      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  statusIndicator?: boolean;
  status?: boolean;
  hideOnMobile?: boolean;
  colspan: number;
}

defineProps<Props>();
</script>

<style>
.app-structured-list-cell {
  grid-column: span v-bind('colspan') / span v-bind('colspan');
  @apply h-full flex flex-col justify-center p-3 md:p-4 text-left;
}

.app-structured-list-cell[hideOnMobile="true"] {
  @apply hidden;
}
</style>
