<template>
  <div class="app-structured-list">
    <div
      role="grid"
      class="w-full grid grid-cols-1 text-base sm:text-sm md:text-base text-left text-text-800"
    >
      <AppStructuredListRow
        v-if="!hideHeaders"
        class="!hidden md:!grid"
      >
        <AppStructuredListCell
          v-for="(header, index) in headers"
          :key="index"
          :colspan="header.colspan"
          class="font-bold text-[20px]"
        >
          {{ header.title }}
        </AppStructuredListCell>
      </AppStructuredListRow>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
export interface AppStructuredListHeader {
  title: string;
  colspan: number;
}

interface Props {
  headers: AppStructuredListHeader[];
  hideHeaders?: boolean;
}

const props = defineProps<Props>();

const colspan = computed(() => props.headers.reduce((accumulator, currentValue) => accumulator + currentValue.colspan, 0));
</script>

<style>
.app-structured-list *[role="row"] {
  @apply grid transition-[border,background-color] border-b border-text-400 text-left grid-cols-1
    sm:grid-cols-[repeat(v-bind('colspan'),_minmax(0,_1fr))];
}

.app-structured-list *[role="row"][aria-expanded="true"] {
  @apply border-b-0;
}
</style>
