<template>
  <AppContainer>
    <AppFormHeader title="Գործողության ընտրություն" class="bg-[#F5F5F5] md:bg-white" />

    <Viewport class="mb-8" tableOfContents>
      <div class="flex flex-col">
        <div class="flex flex-col gap-2 mt-8">

		  <AppGoBack 
		  	class="mb-2"
			@click="router.push('/')"
		  />

          <p class="text-[#1a1a1a] text-2xl md:text-3xl font-semibold font-['Noto Sans Armenian'] leading-10">
            Ընտրեք անհրաժեշտ գործողությունը
          </p>

          <p class="text-[#454545] text-[16px] font-normal">
            Նշեք Ձեր ցանկալի գործողությունը, որով <br>ցանկանում եք շարունակել:
          </p>
        </div>

        <div class="flex flex-col mt-8">
          <div class="py-[0.5px] md:py-[15px]">
            <AppButton
              variant="primary"
              size="large"
              class="text-[#1a1a1a] font-normal leading-normal"
			  @click="router.push('/gans')"
            >
              Send Message
            </AppButton>
          </div>

		    <div class="py-[0.5px] md:py-[15px] ">
				<AppButton
				variant="primary"
				size="large"
				class="text-[#1a1a1a] font-normal leading-normal"
				@click="router.push('/nop')"
				>
				My Operators
				</AppButton>
          </div>

          <div class="py-[0.5px] md:py-[15px] mb-[44px] md:mb-48">
			<AppButton
				variant="primary"
				size="large"
				class="text-[#1a1a1a] font-normal leading-normal"
				 @click="router.push('/spr')"
				>
				SPR MyData 
			</AppButton>
          </div>
        </div>
      </div>
    </Viewport>
  </AppContainer>
</template>



<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>