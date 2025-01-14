<template>
  <div id="app">
    <Transition name="fade">
      <LoadingScreen v-if="showLoading"></LoadingScreen>
    </Transition>

    <div v-if="!isLoading" class="page">
      <NuxtPage />
    </div>
    <!-- <div class="glow-circle glow-1/"></div> -->
    <!-- <div class="glow-circle glow-2"></div> -->
    <!-- <div class="glow-circle glow-3"></div> -->
    <!-- <div class="glow-circle glow-4"></div> -->
    <!-- <div class="glow-circle glow-5"></div> -->
    <!-- <div class="glow-circle glow-6"></div> -->
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

.glow-1 {
  position: absolute;
  top: 1400px; 
  left: 50%; 
  transform: translateX(-50%);
  width: 1400px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.35), transparent 50%);
  pointer-events: none;
}

.glow-2 {
  position: absolute;
  top: 3200px; 
  left: 0; 
  transform: translateX(-50%);
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.5), transparent 50%);
  pointer-events: none;
}

.glow-3 {
  position: absolute;
  top: 3900px; 
  right: 0; 
  transform: translateX(+50%);
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.5), transparent 50%);
  pointer-events: none;
}

.glow-4 {
  position: absolute;
  top: 6200px; 
  left: 50%; 
  transform: translateX(-50%);
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.35), transparent 50%);
  pointer-events: none;
}

.glow-5 {
  position: absolute;
  top: 7100px; 
  left: 0; 
  transform: translateX(-50%);
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.4  ), transparent 50%);
  pointer-events: none;
}

.glow-6 {
  position: absolute;
  bottom: 7900px;
  right: 0; 
  transform: translateX(+50%);
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 162, 255, 0.4), transparent 50%);
  pointer-events: none;
}
</style>
