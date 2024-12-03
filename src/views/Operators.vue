<template>
  <AppContainer>
    <AppFormHeader title="My Operators" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2 mt-8">
          <AppGoBack class="mb-2" @click="router.push('/select')" />

          <p class="text-[#1a1a1a] text-2xl md:text-3xl font-semibold font-['Noto Sans Armenian'] leading-10">
            Օպեռատորների տվյալներ
          </p>

          <div class="flex flex-col mt-4">
            <p class="mb-4 text-xl">Ձեր ՀԾՀ։ {{ authStore.username }}</p>
            <AppButton @click="fetchNotificationOperators">
              Որոնել
            </AppButton>
          </div>
        </div>

        <div v-if="tableData.length" class="mt-6">
          <h3 class="text-lg font-bold mb-4">Տվյալներ</h3>
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th class="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tableData" :key="row.op_id">
                <td class="border border-gray-300 px-4 py-2">{{ row.op_id }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ row.priority }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else-if="searchCompleted" class="mt-6 text-gray-500">
          <p>Ոչինչ չի գտնվել։ Ավելացրեք օպեռատոր:</p>
          <select v-model="selectedOperator" class="mt-4 border px-2 py-1">
            <option disabled value="">Ընտրեք օպեռատոր</option>
            <option v-for="op in availableNops" :key="op" :value="op">
              {{ op }}
            </option>
          </select>
          <AppButton @click="addOperator" class="mt-4">
            Ավելացնել
          </AppButton>
        </div>
      </div>
    </Viewport>
  </AppContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const tableData = ref<{ op_id: string; priority: number }[]>([]);
const availableNops = ref(['Operator 1', 'Operator 2', 'Operator 3']);
const selectedOperator = ref<string | null>('');
const searchCompleted = ref(false); 

const fetchNotificationOperators = async () => {
  if (!authStore.username) {
    alert('Enter SSN');
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/notification_operators?ssn=${authStore.username}`
    );
    const data = await response.json();

    if (data.length > 0) {
      tableData.value = data[0].notification_operators;
    } else {
      tableData.value = [];
    }
  } catch (error) {
    console.error('Error request:', error);
    tableData.value = [];
  } finally {
    searchCompleted.value = true; 
  }
};

const addOperator = () => {
  if (!selectedOperator.value) {
    alert('Select operator');
    return;
  }

  const newPriority = tableData.value.length
    ? Math.max(...tableData.value.map((row) => row.priority)) + 1
    : 0;

  tableData.value.push({
    op_id: selectedOperator.value,
    priority: newPriority,
  });

  selectedOperator.value = '';
};
</script>
