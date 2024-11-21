<template>
  <div
    ref="contentElement"
    v-html="content"
    class="wysiwyg"
    :class="[variant]"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue'
type WysiwygVariants = 'regular' | 'darkLink';

interface Props {
  content: string;
  variant?: WysiwygVariants;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'regular',
});

// const { processWysiwyg, handleWysiwygClick } = useWysiwyg();

const watchForUpdates = ref(false);
const contentElement = ref<HTMLDivElement | null>(null);

// watch(contentElement, () => {
//   if (!contentElement.value) return;

//   processWysiwyg(contentElement.value);

//   watchForUpdates.value = true;
// });

// watch(
//   () => props.content,
//   async () => {
//     if (!watchForUpdates.value) return;

//     await nextTick();

//     if (!contentElement.value) return;

//     processWysiwyg(contentElement.value);
//   },
// );

// const onClick = (event: MouseEvent) => {
//   handleWysiwygClick(event);
// };
</script>

<style>
.wysiwyg {
  @apply text-text-700 leading-normal;
}

.wysiwyg a .open-in-new {
  @apply ml-1 select-none;
}

.wysiwyg.darkLink a {
  @apply text-text-700 leading-normal;
}

.wysiwyg ul {
  @apply list-disc list-outside pl-6 marker:text-xl marker:text-visualization-orange-main my-2;
}

.wysiwyg ol {
  @apply list-decimal list-outside;
}

.wysiwyg iframe,
.wysiwyg video {
  @apply aspect-video w-full h-auto;
}

.wysiwyg div {
  @apply break-words;
}

.wysiwyg p {
  word-break: break-word;
}

.wysiwyg table {
  @apply !w-full text-base text-left rtl:text-right text-text-800 border-none md:border border-text-600;
}

.wysiwyg table tr {
  @apply transition-colors border-text-400 !h-auto
    first:hidden md:first:table-row first:pointer-events-none
  even:bg-white odd:bg-white md:odd:bg-text-200
    border md:border-b mb-4 last:mb-0 table-row;
}

.wysiwyg table td {
  @apply !w-full md:!w-auto flex flex-col p-4 !h-auto text-left border-text-400
    md:table-cell md:before:!content-['']
    last:border-none;
}

.wysiwyg table colgroup {
  @apply flex md:table-column-group;
}

.wysiwyg table td::before {
  content: attr(data-label);
  font-weight: bold;
  float: left;
}

.wysiwyg h3 {
  @apply py-4;
}

.wysiwyg h4 {
  @apply py-2;
}

.wysiwyg h3:first-child,
.wysiwyg h4:last-child {
  @apply pt-0;
}

.wysiwyg blockquote {
  @apply border-l-8 border-systemMessage-info bg-systemMessage-infoLight pl-4 pr-2 py-4 my-5;
}
</style>
