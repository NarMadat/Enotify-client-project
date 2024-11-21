<template>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="car in cars"
        :key="car.id"
        class="border-slate-200 border-2 rounded-sm w-[328px] h-[686px] md:w-[368px] md:h-[658px] p-[24px]"
      >

        <div class="bg-primary w-[280px] h-[140px] md:w-[320px] md:h-[140px] rounded flex items-center justify-center">
          <img :src="car.image" :alt="car.name" class="w-24 h-24" />
        </div>
  
        <p class="mt-[16px] text-[20px] font-semibold">{{ car.name }}</p>
  
        <div class="flex flex-row items-center mt-[8px] gap-2">
          <p class="text-[16px] text-[#454545]">Հաշվառման համարանիշը:</p>
          <p class="text-[16px] font-semibold text-[#454545]">{{ car.regNum }}</p>
        </div>
  
        <div class="w-[280px] h-[2px] md:w-[320px] bg-[#CBD6E3] mt-[16px]"></div>
  
        <div class="flex flex-col gap-4 mt-4">
          <div>
            <p class="text-[16px] text-[#1A1A1A] font-semibold">Տիպը:</p>
            <p>{{ car.type }}</p>
          </div>
  
          <div>
            <p class="text-[16px] text-[#1A1A1A] font-semibold">Թափքի տեսակը:</p>
            <p>{{ car.model }}</p>
          </div>
  
          <div>
            <p class="text-[16px] text-[#1A1A1A] font-semibold">Գույնը:</p>
            <p>{{ car.color }}</p>
          </div>
  
          <div>
            <p class="text-[16px] text-[#1A1A1A] font-semibold">Թողարկման տարեթիվը:</p>
            <p>{{ car.year }}</p>
          </div>
  
          <div>
            <p class="text-[16px] text-[#1A1A1A] font-semibold">Նույնականացման համարը (VIN):</p>
            <p>{{ car.vin }}</p>
          </div>
  
          <div class="flex justify-center" v-if="displayButton">
            <AppButton
              variant="secondary"
              size="regular"
              class="text-[#1a1a1a] font-normal"
              @click="router.push('/step3')"
            >
              Ընտրել ավտոմեքենան
            </AppButton>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
  
const props = defineProps({
    cars: {
      type: Array,
      required: true,
      default: () => [],
    },
    displayButton: {
      type: Boolean,
      default: true,
    },
  });
</script>
  
