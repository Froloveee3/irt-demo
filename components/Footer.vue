<template>
  <div class="footer">
    <div class="logo">
      <img src="/images/footer-logo.png" alt="Footer Logo" class="logo">
    </div>
    <h2 v-if="!isMobileScreen">logistica@povpro.ru</h2>
    <div v-if="!isNarrowScreen" class="navigation">
      <button @click="scrollTo('advantages')"><p class="header-text">Преимущества</p></button>
      <button @click="scrollTo('possibilities')"><p class="header-text">Возможности</p></button>
      <button @click="scrollTo('robots')"><p class="header-text">Промышленные роботы</p></button>
      <button @click="scrollTo('production')"><p class="header-text">Производство</p></button>
      <button @click="scrollTo('contacts')"><p class="header-text">Контакты</p></button>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

import { ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const isNarrowScreen = computed(() => windowWidth.value < 1100);
const isMobileScreen = computed(() => windowWidth.value < 740);
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 2rem 1rem;
  background: linear-gradient(180deg, var(--color-gradient-end) 0%, var(--color-gradient-start) 200%);
  border-top-left-radius: 1.875rem;
  border-top-right-radius: 1.875rem;
  gap: 1rem;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 4..375rem;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  margin-left: auto;
  margin-right: auto;
}

.navigation {
  display: flex;
  height: 100%;
  gap: 3.75rem;
  align-items: start;
  margin-left: auto;
  margin-right: auto;
}

.navigation button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  height: 1rem;
}

@media (max-width: 740px) {
  .footer {
    padding: 1rem;
  }
}
</style>