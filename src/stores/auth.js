import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const username = ref('');
  const password = ref('');

  const isUsernameValid = computed(() => username.value.length >= 3);
  const isPasswordValid = computed(() => password.value.length >= 6);
  const isFormValid = computed(() => isUsernameValid.value && isPasswordValid.value);

  const setUsername = (newUsername) => {
    username.value = newUsername;
  };

  const setPassword = (newPassword) => {
    password.value = newPassword;
  };

  return {
    username,
    password,
    isUsernameValid,
    isPasswordValid,
    isFormValid,
    setUsername,
    setPassword,
  };
});
