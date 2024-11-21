<template>
  <AppViewport
    parentElement="header"
    class="py-4 w-full flex md:px-8 bg-primary relative"
  >
    <div
      class="w-full flex justify-center xl:justify-start items-center !transform-none"
    >
      <RouterLink
        to="/"
        ref="headerButtonElement"
        class="flex items-center text-left bg-transparent focus:bg-transparent focus:no-underline transition-opacity duration-300"
        @click="removeLinkFocus"
      >
        <img
          class="max-w-24 h-14"
          src="/isaa_logo_white.svg"
          alt="Հայաստանի Հանրապետության զինանշան"
        />

        <div
          class="flex self-stretch"
        >
          <div class="w-px h-full bg-white mx-3"></div>
        </div>

        <div class="text-white text-[13px] sm:text-base font-normal sm:font-bold !leading-normal py-1 max-w-sm">
          <span class="flex">
            Հայաստանի տեղեկատվական 
            <br>համակարգերի գործակալություն:
          </span>
        </div>
      </RouterLink>

      <div class="flex-grow"></div>

      <div class="flex items-center">
      </div>
    </div>
  </AppViewport>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue'
import AppViewport from './Viewport.vue';
import { useRouter, RouterLink } from 'vue-router';

const router = useRouter();
const headerButtonElement = ref<ComponentPublicInstance | null>(null);

const removeLinkFocus = () => {
  if (!headerButtonElement.value) return;

  headerButtonElement.value.$el.blur();
};
</script>


  