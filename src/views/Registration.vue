<template>
  <AppContainer>
    <AppFormHeader title="Գրանցում համակարգում" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col" @keydown.enter.prevent="onSubmit">
        <div class="flex flex-col gap-2 mt-8">
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
            v-model="authStore.username"
            @blur="onUsernameBlur"
            :error="usernameTouched && !authStore.isUsernameValid"
          />

          <AppInputField
            type="password"
            class="w-full md:w-[294px]"
            label="Գաղտնաբառ"
            v-model="authStore.password"
            @blur="onPasswordBlur"
            :error="passwordTouched && !authStore.isPasswordValid"
            errorMessage="Առնվազն 6 նիշ"
          />

          <div class="py-[0.5px] md:py-[15px] mb-[44px] md:mb-48">
            <AppButton
              variant="secondary"
              size="regular"
              class="text-[#1a1a1a] font-normal leading-normal"
              :disabled="!authStore.isFormValid"
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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const usernameTouched = ref(false);
const passwordTouched = ref(false);

const onUsernameBlur = () => {
  usernameTouched.value = true;
};

const onPasswordBlur = () => {
  passwordTouched.value = true;
};

const onSubmit = () => {
  if (authStore.isFormValid) {
    router.push('/select');
  }
};
</script>

