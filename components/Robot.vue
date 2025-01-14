<template>
  <div v-if="isNarrowScreen">
    <div class="robot" style="margin-right: auto;">
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" :titleMaxWidth="titleMaxWidth" :minWidth="boxMinWidth" :maxWidth="boxMinWidth"/>
      <div class="description">
        <div class="text">
          <p class="text-2">{{ text1 }}</p>
          <div class="gap"></div>
          <h2>{{$t("Область применения:")}}</h2>
          <p class="text-2">{{ text2 }}</p>
          <div class="gap"></div>
        </div>
      </div>
    </div>
    <div class="table">
      <h2>{{$t("Основные технические характеристики")}}</h2>
      <img class="robot-table" :src="imageTablePath" alt="Table">
    </div>
    <!-- <Table :headers="headers" :rows="rows"></Table> -->
  </div>
  <div v-else style="display: flex; flex-direction: column;">
    <div v-if=imageLeft class="robot" style="margin-right: auto;">
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" :titleMaxWidth="titleMaxWidth" :minWidth="boxMinWidth" :maxWidth="boxMinWidth"/>
      <div class="description">
        <div class="text">
          <p class="text-2">{{ text1 }}</p>
          <div class="gap"></div>
          <h2>{{$t("Область применения:")}}</h2>
          <p class="text-2">{{ text2 }}</p>
          <div class="gap"></div>
        </div>
        <div class="table">
          <h2>{{$t("Основные технические характеристики")}}</h2>
          <img class="robot-table" :src="imageTablePath" alt="Table">
        </div>
        <!-- <Table :headers="headers" :rows="rows"></Table> -->
      </div>
    </div>
    <div v-else class="robot" style="margin-left: auto;">
      <div class="description">
        <div class="text">
          <p class="text-2">{{ text1 }}</p>
          <div class="gap"></div>
          <h2>{{$t("Область применения:")}}</h2>
          <p class="text-2">{{ text2 }}</p>
          <div class="gap"></div>
        </div>
        <div class="table">
          <h2>{{$t("Основные технические характеристики")}}</h2>
          <img class="robot-table" :src="imageTablePath" alt="Table">
        </div>
        <!-- <Table :headers="headers" :rows="rows"></Table> -->
      </div>
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" :titleMaxWidth="titleMaxWidth" :minWidth="boxMinWidth" :maxWidth="boxMinWidth"/>
    </div>
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

const isNarrowScreen = computed(() => windowWidth.value < 1100);
const boxMinWidth = ref(windowWidth.value < 1500 ? "22.5rem" : "35.625rem");

if (windowWidth.value <= 836) {
  boxMinWidth.value = "17.5rem";
}

watch(windowWidth, (newWidth) => {
  if (newWidth < 1500) {
    boxMinWidth.value = newWidth <= 836 ? "17.5rem" : "22.5rem";
  } else {
    boxMinWidth.value = "35.625rem";
  }
});
const titleMaxWidth = computed(() => (windowWidth.value < 1500 ? "15rem" : "24rem"));


defineProps({
  imageLeft: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    required: true,
  },
  text2: {
    type: String,
    required: true,
  },
  headers: {
    type: Array as () => string[],
    required: true,
  },
  rows: {
    type: Array as () => Array<string[]>,
    required: true,
  },
  imageTablePath: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.robot {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 2.625rem 1rem;
  gap: 1.5rem;
}

.table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

/* .description p, .description h2 {
  max-width: 34.5rem;
} */

.gap {
  height: 1.5rem;
}

.robot-table {
  max-width: 100%;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (min-width: 1500px) {
  .robot {
    width: 95%;
  }

  .description p, .description h2 {
    max-width: 54rem;
  }
  
}

@media (max-width: 836px) {
  .robot {
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
    margin-left: auto;
  }

  .description {
    padding: 0;
  }
}
</style>
