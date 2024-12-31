<template>
  <div id="app">
    <Transition name="fade">
      <LoadingScreen v-if="showLoading"></LoadingScreen>
    </Transition>

    <div v-if="!isLoading" class="page">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import LoadingScreen from '~/components/LoadingScreen.vue';

const isLoading = ref(true);
const showLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    setTimeout(() => {
      showLoading.value = false;
    }, 1000);
  }, 500);
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: var(--color-bg);
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
