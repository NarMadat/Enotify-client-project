<template>
    <label
      class="app-checkbox flex items-center cursor-pointer"
      :class="checkboxClasses"
    >
      <input
        v-model="modelValue"
        class="shrink-0"
        type="checkbox"
        :trueValue="trueValue"
        :falseValue="falseValue"
        :name="name"
      />
  
      <div>
        <slot name="label">
          <span class="text-base">
            {{ label }}
          </span>
  
          <span
            v-if="sublabel"
            class="text-base text-text-600"
          >
            {{ sublabel }}
          </span>
        </slot>
      </div>
    </label>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  export type AppCheckboxSizes = 'regular' | 'large';
  
  interface Props {
    name: string;
    modelValue?: any;
    size?: AppCheckboxSizes;
    label?: string;
    sublabel?: string;
    trueValue?: any;
    falseValue?: any;
  }
  
  interface Emit {
    (e: 'update:modelValue', value: Props['modelValue']): void;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    size: 'regular',
    trueValue: true,
    falseValue: false
  });
  
  const emit = defineEmits<Emit>();
  
  const checkboxClasses = computed(() => [
    props.size
  ]);
  
  const modelValue = computed({
    get() {
      return props.modelValue;
    },
  
    set(value) {
      emit('update:modelValue', value);
    }
  });
  </script>
  
  <style>
  .app-checkbox input[type="checkbox"] {
    @apply grid place-content-center appearance-none bg-white m-0 border-2 border-black;
  }
  
  .app-checkbox input[type="checkbox"]:hover:not(:focus) {
    @apply shadow-[0_0_0_10px_#B1B4B6];
  }
  
  .app-checkbox input[type="checkbox"]::before {
    @apply content-[''] scale-0 transition-transform origin-center;
    clip-path: polygon(77.93125% 18.75%, 39.84375% 56.25%, 22.06875% 38.75%, 9.375% 51.25%, 39.84375% 81.25%, 90.625% 31.25%, 77.93125% 18.7%);
  }
  
  .app-checkbox input[type="checkbox"]:checked::before {
    @apply scale-100;
  }
  
  /* Large */
  .app-checkbox.large {
    @apply gap-4;
  }
  
  .app-checkbox.large input[type="checkbox"] {
    @apply w-10 h-10;
  }
  
  .app-checkbox.large input[type="checkbox"]::before {
    @apply w-6 h-6 shadow-[inset_0_20px_20px_#000000];
  }
  
  /* Regular */
  .app-checkbox.regular {
    @apply gap-2;
  }
  
  .app-checkbox.regular input[type="checkbox"] {
    @apply w-6 h-6;
  }
  
  .app-checkbox.regular input[type="checkbox"]::before {
    @apply w-4 h-4 shadow-[inset_0_12px_12px_#000000];
  }
  </style>