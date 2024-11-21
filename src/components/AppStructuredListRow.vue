<template>
  <component
    :is="hasContent ? 'button' : 'div'"
    role="row"
    :aria-expanded="status"
    class="z-10 focus:z-20"
    :class="[ hasContent
      ? status ? 'bg-green-200 hover:bg-green-200' : 'bg-white hover:bg-text-200'
      : ''
    ]"
    v-bind="attrs"
    @click="toggleExpandedRow"
  >
    <slot
      :status="status"
      :toggleExpandedRow="toggleExpandedRow"
    ></slot>
  </component>

  <div
    ref="content"
    class="origin-top overflow-hidden duration-300 transition-[height] border-text-400"
    style="height: 0;"
    :class="[ status ? 'border-b' : 'border-b-0' ]"
  >
    <div class="bg-white p-3 sm:p-4 pl-3 sm:pl-11 md:pl-14">
      <slot name="expanded-row"></slot>
    </div>
  </div>
</template>/home/narek/Desktop/hartak-web/components/AppStructuredListRow.vue

<script setup lang="ts">
import { ref, computed, useAttrs, useSlots, type Ref } from 'vue'

const slots = useSlots();
const attrs = useAttrs();

const status = ref(false);
const animationInProcess = ref(false);

const content = ref() as Ref<HTMLElement>;

const hasContent = computed(() => !!slots['expanded-row']);

const toggleExpandedRow = () => {
  if (!hasContent.value) return;

  if (status.value) {
    closeExpandedRow();
    return;
  }

  openExpandedRow();
}

const openExpandedRow = () => {
  if (animationInProcess.value || status.value) return false;

  status.value = true;
  animationInProcess.value = true;

  content.value.style.height = '0';

  setTimeout(() => {
    content.value.style.height = `${content.value.scrollHeight}px`;
  });

  setTimeout(() => {
    content.value.style.height = '';
    animationInProcess.value = false;
  }, 300);
}

const closeExpandedRow = () => {
  if (animationInProcess.value || !status.value) return false;

  status.value = false;
  animationInProcess.value = true;

  content.value.style.height = `${content.value.scrollHeight}px`;

  setTimeout(() => {
    content.value.style.height = '0';
    animationInProcess.value = false;
  });
}
</script>
