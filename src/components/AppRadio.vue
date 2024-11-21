<template>
  <label
    class="app-radio flex items-center cursor-pointer"
    :class="size"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-2">
        <input
          class="shrink-0"
          type="radio"
          :value="value"
          :name="name"
          :id="id"
          v-model="internalValue"
          @change="updateValue"
        />
      </div>
    </div>

    <div>
      <slot name="label">
        <div class="flex flex-col gap-1">
          <span class="text-base">
            {{ label }}
          </span>

          <span
            v-if="sublabel"
            class="text-base text-text-600"
          >
            {{ sublabel }}
          </span>
        </div>
      </slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

export type AppRadioSizes = 'regular' | 'large';

interface Props {
  modelValue?: any | null;
  value: any;
  name: string;
  label?: string;
  sublabel?: string;
  size?: AppRadioSizes;
  id?: string; 
}

interface Emit {
  (e: 'update:modelValue', value: Props['modelValue']): void;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'regular'
});

const emit = defineEmits<Emit>();

const internalValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

function updateValue() {
  emit('update:modelValue', props.value);
}
</script>

<style scoped>
.app-radio input[type="radio"] {
  @apply grid place-content-center appearance-none bg-white m-0 border-2 border-black rounded-full;
}

.app-radio input[type="radio"]:hover:not(:focus) {
  @apply shadow-[0_0_0_10px_#B1B4B6];
}

.app-radio input[type="radio"]::before {
  @apply content-[''] rounded-full scale-0 transition-transform;
}

.app-radio input[type="radio"]:checked::before {
  @apply scale-100;
}

/* Large */
.app-radio.large {
  @apply gap-4;
}

.app-radio.large input[type="radio"] {
  @apply w-10 h-10;
}

.app-radio.large input[type="radio"]::before {
  @apply w-5 h-5 shadow-[inset_0_20px_20px_#000000];
}

/* Regular */
.app-radio.regular {
  @apply gap-2;
}

.app-radio.regular input[type="radio"] {
  @apply w-6 h-6;
}

.app-radio.regular input[type="radio"]::before {
  @apply w-3 h-3 shadow-[inset_0_12px_12px_#000000];
}
</style>

