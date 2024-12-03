<template>
  <AppContainer>
    <AppFormHeader title="Բնակչության պետական ռեգիստր" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2 mt-8">
          <AppGoBack 
            class="mb-2"
            @click="router.push('/select')"
          />

          <p class="text-[#1a1a1a] text-2xl md:text-3xl font-semibold font-['Noto Sans Armenian'] leading-10">
            Ընտրեք անհրաժեշտ գործողությունը
          </p>

          <p class="text-[#454545] text-[16px] font-normal">
            Նշեք Ձեր ցանկալի գործողությունը, որով <br>ցանկանում եք շարունակել:
          </p>
        </div>

        <div class="flex flex-col mt-8">
          <table class="w-full border-collapse border border-gray-300">
            <thead class="bg-[#F5F5F5]">
              <tr>
                <th class="border border-gray-300 px-4 py-2 text-left">Operator Name</th>
                <th class="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Priority</th>
                <th class="border border-gray-300 px-4 py-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index">
                <td class="border border-gray-300 px-4 py-2">
                  <input 
                    v-model="row.operatorName" 
                    type="text" 
                    class="w-full px-2 py-1 border border-gray-300"
                  />
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  <input 
                    v-model="row.id" 
                    type="text" 
                    class="w-full px-2 py-1 border border-gray-300"
                  />
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  <input 
                    v-model="row.priority" 
                    type="text" 
                    class="w-full px-2 py-1 border border-gray-300"
                  />
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                  <button 
                    @click="removeRow(index)" 
                    class="text-red-500 font-bold hover:underline"
                  >
                    <AppIcon icon="delete" size="26px" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <AppButton 
            @click="addRow" 
            class="mt-4 px-4 py-2 mb-24 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </AppButton>
        </div>
      </div>
    </Viewport>
  </AppContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const rows = ref([
  { operatorName: '', id: '', priority: '' },
]);

const addRow = () => {
  rows.value.push({ operatorName: '', id: '', priority: '' });
};

const removeRow = (index: number) => {
  rows.value.splice(index, 1);
};
</script>
