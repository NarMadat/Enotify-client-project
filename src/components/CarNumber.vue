<template>
  <div class="flex items-center border-4 border-black rounded-lg bg-white w-[328px] md:w-[425px] p-2 font-sans gap-4">
    <div class="flex flex-col items-center ">
      <img src="/am-flag.svg" alt="AM" class="w-16 h-auto" />
      <span class="text-2xl font-sans mt-1">AM</span>
    </div>
    <div class="h-20 w-1.5 bg-gray-100"></div>
    <div class="flex gap-2 font-bold text-5xl md:text-7xl">
      <span class="block">{{ numbersBefore }}</span>
      <span class="block">{{ letters }}</span>
      <span class="block">{{ numbersAfter }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const numbersBefore = ref('34');
const letters = ref('DF');
const numbersAfter = ref('234');
</script>
