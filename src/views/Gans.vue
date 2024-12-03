<template>
  <AppContainer>
    <AppFormHeader title="Ուղարկել հաղորդագրություն SSN-ին" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col" @keydown.enter="onSubmit">
        <div class="flex flex-col gap-2 mt-8">
          <AppGoBack class="mb-2" @click="router.push('/select')" />

          <p class="text-[#1a1a1a] text-2xl md:text-3xl font-semibold font-['Noto Sans Armenian'] leading-10">
            Մուտքագրեք SSN և հաղորդագրություն։
          </p>

          <p class="text-[#454545] text-[16px] font-normal">
            Խնդրում ենք մուտքագրել Սոցիալական ապահովության համարը (SSN)
            <br />և հաղորդագրությունը, որը ցանկանում եք ուղարկել։
          </p>
        </div>

        <div class="flex flex-col gap-4 mt-8">
          <AppInputField
            type="text"
            class="w-full md:w-[294px]"
            label="SSN"
            v-model="ssn"
            @blur="onSSNBlur"
            :error="ssnTouched && !isSSNValid"
          />

          <AppInputField
            type="text"
            class="w-full md:w-[294px]"
            label="Հաղորդագրություն"
            v-model="message"
            @blur="onMessageBlur"
            :error="messageTouched && !isMessageValid"
          />

          <div class="py-[0.5px] md:py-[15px] mb-[44px] md:mb-48">
            <AppButton
              variant="secondary"
              size="regular"
              class="text-[#1a1a1a] font-normal leading-normal"
              :disabled="!isFormValid"
              @click="onSubmit"
            >
              Հաստատել
              <AppIcon icon="arrow_forward_ios" size="12px" class="text-black-500 ml-[16px]" />
            </AppButton>
          </div>

          <p v-if="responseStatus !== null" class="text-[#454545] text-[16px] font-normal">
            Response Status: {{ responseStatus }}
          </p>
        </div>
      </div>
    </Viewport>
  </AppContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter();

const ssn = ref('');
const message = ref('');
const msgId = ref(Date.now().toString()); 
const broadcast = ref('no'); 
const cbHost = ref('https://example.com/callback'); 

const ssnTouched = ref(false);
const messageTouched = ref(false);
const responseStatus = ref(null);

const isSSNValid = computed(() => ssn.value.length === 10 && /^[0-9]+$/.test(ssn.value));
const isMessageValid = computed(() => message.value.length >= 6);
const isFormValid = computed(() => isSSNValid.value && isMessageValid.value);

const onSSNBlur = () => {
  ssnTouched.value = true;
};

const onMessageBlur = () => {
  messageTouched.value = true;
};

const onSubmit = async () => {
  if (isFormValid.value) {
    try {
      const encodedMessage = btoa(message.value); 

      const { data, error } = await useFetch('http://localhost:3000/send_message')
        .post({
          msg_id: msgId.value,
          broadcast: broadcast.value,
          ssn: ssn.value,
          msg_text: encodedMessage,
          cb_host: cbHost.value,
        })
        .json();

      if (error.value) {
        responseStatus.value = `Error: ${error.value.message}`;
      } else {
        responseStatus.value = `Success: ${data.value?.status || 'Message sent successfully'}`;
      }
    } catch (err) {
      responseStatus.value = `Error: ${err.message}`;
    }
  }
};
</script>

  