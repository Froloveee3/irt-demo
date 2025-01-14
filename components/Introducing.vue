<template>
  <div class="introducing" id="introducing">
    <div style="display: flex; flex-direction: column; align-items: center;" v-if="isMobileScreen">
      <div class="title">
          <h1>{{$t("ИРТ")}}<span class="description">{{$t(" — роботизированные технологии для автоматизации вашего производства")}}</span></h1>
      </div>
      <div class="video">
        <video autoplay loop muted width="100%" height="100%">
          <source src="/animations/main-animation.webm" type="video/webm">
        </video>
      </div>
      <div class="subtitle">
        <p class="text-1">{{$t("Раздвигаем границы возможного!")}}</p>
      </div>
    </div>
    <template v-else>
      <div class="text">
        <div class="title">
          <h1>{{$t("ИРТ")}}<span class="description">{{$t(" — роботизированные технологии для автоматизации вашего производства")}}</span></h1>
        </div>
        <div class="subtitle">
          <p class="text-1">{{$t("Раздвигаем границы возможного!")}}</p>
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

const isMobileScreen = computed(() => windowWidth.value < 836);

</script>

<style scoped>
.introducing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  background: linear-gradient(180deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%);
  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
}

.text {
  padding-left: 1rem;
}

.title {
  flex-shrink: 0;
  max-width : 46.25rem;
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
  min-height: 40rem;
  min-width: 40rem;
  height: 40rem;
  width: 40rem;
  margin-left: -10%;
  margin-right: -10%;
}

@media (min-width: 1500px) {
  .introducing {
    margin-top: 0;
  }

  .title {
    max-width: 73.75rem;
  }

  .title h1 {
    font-size: 4.5rem;
  }

  .video {
    min-height: 50rem;
    min-width: 50rem;
    height: 50rem;
    width: 50rem;
    margin-left: -10%;
    margin-right: -10%;
  }

  .subtitle p {
    font-size: 2.5rem;
  }
}


@media (max-width: 1100px) {
  .subtitle {
    margin-top: 2rem;
  }
  
  .subtitle p {
    font-size: 1.5rem;
  }

  .video {
    min-height: 30rem;
    min-width: 30rem;
    height: 30rem;
    width: 30rem;
    margin-right: -5%;
  }
}

@media (max-width: 836px) {
  .introducing {
    flex-direction: column;
    margin-top: 4rem;
  }

  .title {
    max-width: 20rem;
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
    min-height: 35rem;
    min-width: 35rem;
    height: 35rem;
    width: 35rem;
    margin-top: -5%;
  }
  
}
</style>