<template>
  <div>
    <AppIcon 
      icon="arrow_left"
      size="24px"
      class="text-black-500"
    />

    
    <button
      class="underline text-base font-normal active:bg-purple-500 active:text-white"
      @click="navigateBack"
    >
      Վերադառնալ
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; 
import AppIcon from './AppIcon.vue';
import { defineProps } from 'vue';

const props = defineProps({
  routerName: {
    type: String,
    required: true  
  }
})


const router = useRouter();


const navigateBack = () => {
  router.push(props.routerName);
}
</script>

  