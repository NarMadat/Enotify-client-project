<template>
  <div class="flex flex-col h-full">
    <slot name="append"></slot>



    <div class="flex-1">
      <slot></slot>
    </div>



    <slot name="prepend"></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hidePhaseBanner?: boolean;
  hideFeedbackBarFloating?: boolean;
}

withDefaults(defineProps<Props>(), {
  hidePhaseBanner: false,
  hideFeedbackBarFloating: false,
});
</script>
