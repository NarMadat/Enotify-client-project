<template>
  <AppContainer>
    <AppFormHeader title="Գրանցում համակարգում" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col" @keydown.enter="onSubmit">
        <div class="flex flex-col gap-2 mt-8">
          <AppSteper stepText="Քայլ 1/4" />

          <p class="text-[#1a1a1a] text-2xl md:text-3xl font-semibold font-['Noto Sans Armenian'] leading-10">
            Նշեք Ձեր մուտքանունն ու գաղտնաբառը
          </p>

          <p class="text-[#454545] text-[16px] font-normal">
            Նշեք Ձեր մուտքանունը (username) և գաղտնաբառը (password),
            <br /> որոնցով կարող եք մուտք գործել Ձեր անձնական հաշիվ։
          </p>
        </div>

        <div class="flex flex-col gap-4 mt-8">
          <AppInputField
            type="text"
            class="w-full md:w-[294px]"
            label="Մուտքանուն"
            v-model="username"
            @blur="onUsernameBlur"
            :error="usernameTouched && !isUsernameValid"
          />

          <AppInputField
            type="password"
            class="w-full md:w-[294px]"
            label="Գաղտնաբառ"
            v-model="password"
            @blur="onPasswordBlur"
            :error="passwordTouched && !isPasswordValid"
            errorMessage="Առնվազն 6 նիշ"
          />

          <div class="py-[0.5px] md:py-[15px] mb-[44px] md:mb-48">
            <AppButton
              variant="secondary"
              size="regular"
              class="text-[#1a1a1a] font-normal leading-normal"
              :disabled="!isFormValid"
              @click="onSubmit"
            >
              Հաջորդ
              <AppIcon icon="arrow_forward_ios" size="12px" class="text-black-500 ml-[16px]" />
            </AppButton>
          </div>
        </div>
      </div>
    </Viewport>
  </AppContainer>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');
const usernameTouched = ref(false);
const passwordTouched = ref(false);

const isUsernameValid = computed(() => username.value.length >= 3); 
const isPasswordValid = computed(() => password.value.length >= 6); 
const isFormValid = computed(() => isUsernameValid.value && isPasswordValid.value);

const onUsernameBlur = () => {
  usernameTouched.value = true;
};

const onPasswordBlur = () => {
  passwordTouched.value = true;
};

const onSubmit = () => {
  if (isFormValid.value) {
    router.push('/step2');
  }
};
</script>
