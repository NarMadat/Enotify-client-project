<template>
  <div class="border-b border-text-600">
    <AppViewport class="py-6">
        <slot>
          <h4 class="text-[24px] font-semibold">
            {{ title }}
          </h4>
        </slot>
    </AppViewport>
  </div>
</template>

<script setup lang="ts">
import AppViewport from './Viewport.vue';
interface Props {
  title?: string;
}

defineProps<Props>();
</script>
