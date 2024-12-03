<template>
  <div class="app-container">
    <header>
      <AppHeader />
    </header>

    <main>
      <div id="app">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in" appear>
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </main>
      
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style>
* {
  font-family: 'Noto Sans Armenian';
}

html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

footer {
  text-align: center;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
