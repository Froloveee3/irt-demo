<template>
  <div class="introducing" id="introducing">
    <div style="display: flex; flex-direction: column; align-items: center;" v-if="isMobileScreen">
      <div class="title">
          <h1>ИРТ <span class="description">— роботизированные технологии для автоматизации вашего производства</span></h1>
      </div>
      <div class="video">
        <video autoplay loop muted width="100%" height="100%">
          <source src="/animations/main-animation.webm" type="video/webm">
        </video>
      </div>
      <div class="subtitle">
        <p class="text-1">Раздвигаем границы возможного!</p>
      </div>
    </div>
    <template v-else>
      <div class="text">
        <div class="title">
          <h1>ИРТ <span class="description">— роботизированные технологии для автоматизации вашего производства</span></h1>
        </div>
        <div class="subtitle">
          <p class="text-1">Раздвигаем границы возможного!</p>
        </div>
      </div>
      <div class="video">
        <video autoplay loop muted width="100%" height="100%">
          <source src="/animations/main-animation.webm" type="video/webm">
        </video>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
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

const isMobileScreen = computed(() => windowWidth.value < 740);

</script>

<style scoped>
.introducing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  margin-top: 9.5rem;
  background: linear-gradient(180deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%);
  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
}

.text {
  padding-left: 1rem;
}

.title {
  flex-shrink: 0;
  max-width : 37.5rem;
}

.title h1 {
  text-align: left;
}

.description {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
} 

.subtitle {
  margin-top: 9.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 2rem;
}

.video {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25rem;
  min-width: 25rem;
  height: 25rem;
  width: 25rem;
}

@media (max-width: 1100px) {
  .introducing {
    margin-top: 4rem;
  }

  .subtitle {
    margin-top: 1rem;
  }
  
  .subtitle p {
    font-size: 1.5rem;
  }

  .video {
    min-height: 16rem;
    min-width: 16rem;
    height: 16rem;
    width: 16rem;
  }
}

@media (max-width: 740px) {
  .introducing {
    flex-direction: column;
    margin-top: 4rem;
  }

  .title h1 {
    text-align: center;
  }

  .subtitle {
    margin-top: 1rem;
  }

  .subtitle p {
    text-align: center;
    font-size: 1.25rem;
    max-width: 12.5rem;
  }

  .video {
    min-height: 28rem;
    min-width: 28rem;
    height: 28rem;
    width: 28rem;
  }
  
}
</style>