<template>
    <AppViewport
      col
      parentElement="footer"
      class="py-6 bg-text-200 border-t border-gray-100 z-10"
    >
      <div class="w-full flex flex-col lg:flex-row justify-between    items-center">
        <section class="md:flex md:flex-col md:gap-5 flex flex-col gap-6 items-center md:items-start">
          <div class="flex gap-2 items-center text-text-800 ">
            <div class="flex">
              <h3 class="text-[#454545] text-lg font-normal   leading-normal flex gap-2 items-center">
                <AppIcon
                  icon="how_to_reg"
                  size="24px"
                  class="text-button-default"
                />
                <p>Կայքը համապատասխանում է</p>
                <a href="https://standards.hightech.gov.am/">ՀՀ հանրային ծառայությունների թվայնացման սկզբունքներին
                  <AppIcon
                    icon="open_in_new"
                    size="18px"
                  />
                </a>
              </h3>
            </div>
          </div>
  
          <div class="text-[#1a1a1a] text-base font-normal font-['Noto Sans Armenian']  leading-normal">
            {{ copyrightText }}
          </div>
        </section>
  
        <div class="md:flex md:justify-center lg:justify-start md:items-center hidden">
          <img
            class="max-w-32 h-[90px]"
            loading="lazy"
            src="/isaa_logo_blue.svg"
            alt="ISAA logo"
          />
        </div>
      </div>
    </AppViewport>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { templateInterpolation } from '../utils/interpolation'
  import AppViewport from './Viewport.vue';
  
  const copyrightText = computed(() => {
    const year = new Date().getFullYear();
    const text = '© {year} Հայաստանի տեղեկատվական համակարգերի գործակալություն:';
    return templateInterpolation(text, { year });
  });
  </script>

