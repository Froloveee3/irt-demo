<template>
  <div class="header">
    <div class="logo">
      <!-- Логотип меняется в зависимости от текущей локали -->
      <img :src="logoSrc" alt="Main Logo" class="logo">
    </div>
    <div class="navigation">
      <button @click="scrollTo('advantages')"><p class="header-text">{{$t("Преимущества")}}</p></button>
      <button @click="scrollTo('possibilities')"><p class="header-text">{{$t("Возможности")}}</p></button>
      <button @click="scrollTo('robots')"><p class="header-text">{{$t("Промышленные роботы")}}</p></button>
      <button @click="scrollTo('production')"><p class="header-text">{{$t("Производство")}}</p></button>
      <button @click="scrollTo('contacts')"><p class="header-text">{{$t("Контакты")}}</p></button>
    </div>
    <template v-if="isMobileScreen">
      <div style="display: flex; flex-direction: row; align-items: center; gap: 0.5rem;">
        <div class="language-switch">
          <button @click="toggleLanguage">
            <img src="/images/change-locale.png" alt="Language" />
          </button>
        </div>
        <div class="menu-icon" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <div class="line" :class="{ active: isMenuOpen }"></div>
          <div class="line" :class="{ active: isMenuOpen }"></div>
          <div class="line" :class="{ active: isMenuOpen }"></div>
        </div>
        <div class="menu-navigation" :class="{ active: isMenuOpen }">
          <button @click="scrollTo('advantages')"><p class="header-text">{{$t("Преимущества")}}</p></button>
          <button @click="scrollTo('possibilities')"><p class="header-text">{{$t("Возможности")}}</p></button>
          <button @click="scrollTo('robots')"><p class="header-text">{{$t("Промышленные роботы")}}</p></button>
          <button @click="scrollTo('production')"><p class="header-text">{{$t("Производство")}}</p></button>
          <button @click="scrollTo('contacts')"><p class="header-text">{{$t("Контакты")}}</p></button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="language-switch">
        <button @click="toggleLanguage">
          <img src="/images/change-locale.png" alt="Language" />
        </button>
      </div>
      <div class="menu-icon" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <div class="line" :class="{ active: isMenuOpen }"></div>
        <div class="line" :class="{ active: isMenuOpen }"></div>
        <div class="line" :class="{ active: isMenuOpen }"></div>
      </div>
      <div class="menu-navigation" :class="{ active: isMenuOpen }">
        <button @click="scrollTo('advantages')"><p class="header-text">{{$t("Преимущества")}}</p></button>
        <button @click="scrollTo('possibilities')"><p class="header-text">{{$t("Возможности")}}</p></button>
        <button @click="scrollTo('robots')"><p class="header-text">{{$t("Промышленные роботы")}}</p></button>
        <button @click="scrollTo('production')"><p class="header-text">{{$t("Производство")}}</p></button>
        <button @click="scrollTo('contacts')"><p class="header-text">{{$t("Контакты")}}</p></button>
      </div>
    </template>

    <!-- <div class="language-switch">
      <button @click="toggleLanguage">
        <img src="/images/change-locale.png" alt="Language" />
      </button>
    </div>
    <div class="menu-icon" :class="{ active: isMenuOpen }" @click="toggleMenu">
      <div class="line" :class="{ active: isMenuOpen }"></div>
      <div class="line" :class="{ active: isMenuOpen }"></div>
      <div class="line" :class="{ active: isMenuOpen }"></div>
    </div>
    <div class="menu-navigation" :class="{ active: isMenuOpen }">
      <button @click="scrollTo('advantages')"><p class="header-text">{{$t("Преимущества")}}</p></button>
      <button @click="scrollTo('possibilities')"><p class="header-text">{{$t("Возможности")}}</p></button>
      <button @click="scrollTo('robots')"><p class="header-text">{{$t("Промышленные роботы")}}</p></button>
      <button @click="scrollTo('production')"><p class="header-text">{{$t("Производство")}}</p></button>
      <button @click="scrollTo('contacts')"><p class="header-text">{{$t("Контакты")}}</p></button>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

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

const isMobileScreen = computed(() => windowWidth.value < 836);

const { locale } = useI18n();
const isMenuOpen = ref(false);

const logoSrc = computed(() => {
  // return locale.value === 'en' ? '/srt-web-page/images/main-logo-en.png' : '/srt-web-page/images/main-logo.png';
  return locale.value === 'en' ? '/images/main-logo-en.png' : '/images/main-logo.png';
});

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}


const router = useRouter();
function toggleLanguage() {
  const newLocale = locale.value === 'en' ? 'ru' : 'en';
  // const currentPath = router.currentRoute.value.fullPath.replace('/srt-web-page', '');
  const newPath = newLocale === 'en' ? `/en` : `/`;

  router.push(newPath);
}


function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false;
  }
}
</script>



<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.75rem;
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;
  background-color: var(--color-header-bg);
  color: var(--color-header-text);
  box-sizing: border-box;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.625rem;
  height: 2.75rem;
}

.menu-icon {
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  cursor: pointer;
  z-index: 1000;
}

.menu-icon.active {
  position: fixed;
  top: 1.75rem;
  right: 2rem;
}

.menu-icon .line {
  width: 1.5rem;
  height: 0.2rem;
  background-color: #FFFFFF;
  border-radius: 100vh;
}

.menu-icon .line.active {
  background-color: #3E456C;
}

.navigation {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: start;
  transition: all 0.3s ease-in-out;
}

.menu-navigation {
  display: none;
  gap: 1rem;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  background-color: #CBD7FF;
  padding: 1rem;
  padding-top: 3rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: top 0.5s ease-in-out;
  z-index: 999;
}

.menu-navigation.active {
  display: flex;
  flex-direction: column;
  top: 0;
}

@keyframes slideDown {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}

.menu-navigation.active {
  animation: slideDown 0.3s ease-in-out;
}

.menu-navigation button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  height: 1rem;
  margin: 0.5rem 0;
}

.menu-navigation button p {
  text-align: left;
  color: #3E456C;
}

.navigation button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  height: 1rem;
  margin: 0.5rem 0;
}

@media screen and (max-width: 836px) {
  .menu-icon {
    display: flex;
  }

  .navigation {
    display: none;
  }
}

.language-switch {
  display: flex;
  align-items: center;
  justify-content: center;
}

.language-switch button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.language-switch img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
