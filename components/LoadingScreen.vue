<template>
  <div class="loading-screen">
    <img src="/images/loading-logo.png" alt="Loading Logo" class="loading-logo">
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-loading-bg);
  z-index: 9999;
}

.loading-logo {
  width: var(--loading-logo-size);
  height: var(--loading-logo-size);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
