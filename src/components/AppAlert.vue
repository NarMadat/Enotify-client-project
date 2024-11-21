<template>
  <article
    class="app-alert flex gap-4 items-center p-4 border-l-8"
    :class="[ variant ]"
  >
    <div v-if="icon">
      <AppIcon
        v-if="icon"
        :icon="icon"
        size="24px"
      />
    </div>

    <div class="flex flex-col">
      <div class="text-base font-semibold">
        {{ title }}
      </div>

      <AppWysiwyg
        v-if="description"
        :content="description"
      />

      <slot></slot>
    </div>
  </article>
</template>

<script setup lang="ts">
export type AppAlertVariants =  'success' | 'info' | 'warning' | 'error' | 'yesem' | 'standard' | 'standard_white';

export interface AppAlert {
  icon?: string;
  title: string;
  description?: string;
  variant?: AppAlertVariants;
}

interface Props extends AppAlert {}

withDefaults(defineProps<Props>(), {
  variant: 'standard'
});
</script>

<style>
.app-alert.success {
  @apply bg-systemMessage-successLight border-systemMessage-success;
}

.app-alert.info {
  @apply bg-systemMessage-infoLight border-systemMessage-info;
}

.app-alert.warning {
  @apply bg-systemMessage-warningLight border-systemMessage-warning;
}

.app-alert.error {
  @apply bg-systemMessage-errorLight border-systemMessage-error;
}

.app-alert.yesem {
  @apply bg-white border-yesem-primary;
}

.app-alert.standard {
  @apply bg-systemMessage-infoLight border-primary;
}

.app-alert.standard_white {
  @apply  border-primary;
}
</style>
