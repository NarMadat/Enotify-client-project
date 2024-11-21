<template>
  <div class="app-input-field">
    <label class="flex flex-col gap-1">
      <div v-if="label" class="font-semibold">
        {{ label }}
      </div>

      <p v-if="error" class="text-systemMessage-error">{{ errorMessage }}</p>

      <div
        :class="[ 'app-input-field-content', { 'errorElement': error } ]"
      >
        <div
          v-if="prefix"
          class="px-3 py-2 shrink-0 border-r border-black bg-text-200 rounded-s-[3px]"
        >
          <div>{{ prefix }}</div>
        </div>

        <input
          v-model="input"
          ref="inputFieldElement"
          :type="type"
          @input="onInput"
          @blur="onBlur"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


interface Props {
  type?: string;
  modelValue: string;
  label?: string;
  prefix?: string;
  error?: boolean;
  errorMessage?: string;
}

interface Emit {
  (e: 'update:modelValue', value: Props['modelValue']): void;
  (e: 'blur'): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  error: false,
  errorMessage: 'Տեղի է ունեցել սխալ',
});

const emit = defineEmits<Emit>();

const inputFieldElement = ref<HTMLInputElement | null>(null);
const input = ref('');

watch(
  () => props.modelValue,
  () => (input.value = props.modelValue),
  { immediate: true }
);

const onInput = () => {
  if (!inputFieldElement.value) return;

  input.value = inputFieldElement.value.value;
  emit('update:modelValue', input.value);
};

const onBlur = () => {
  emit('blur');
};

const focus = () => {
  inputFieldElement.value?.focus();
};

defineExpose({
  focus,
});
</script>

<style scoped>
.app-input-field-content {
  @apply flex border border-black rounded;
}

.app-input-field-content.errorElement {
  @apply border-red-500 border-2;
}

.app-input-field-content input {
  @apply p-2 w-full rounded;
}

/* Chrome, Safari, Edge, Opera */
.app-input-field-content input::-webkit-outer-spin-button,
.app-input-field-content input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

/* Firefox */
.app-input-field-content input[type='number'] {
  appearance: textfield;
}
</style>

