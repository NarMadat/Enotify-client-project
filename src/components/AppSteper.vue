<template>
    <div class="w-[98px] h-8 bg-[#F0F4F9] flex justify-center items-center">
        <div class="text-[#1a1a1a] text-sm font-bold font-['Noto Sans Armenian'] uppercase leading-normal flex justify-center">
            {{ computedStepText }}
        </div>
        <AppIcon 
            icon="arrow_drop_down"
            size="20px"
            class="text-black-500"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import AppIcon from './AppIcon.vue';


const props = defineProps<{
    stepText?: string;
}>();


const computedStepText = computed(() => props.stepText || 'Քայլ 1/7');
</script>



