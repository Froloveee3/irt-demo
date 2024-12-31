<template>
  <div v-if="isNarrowScreen">
    <div class="robot" style="margin-right: auto;">
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" titleMaxWidth="15rem" minWidth="22.5rem"/>
      <div class="description">
        <p class="text-2">{{ text1 }}</p>
        <div class="gap"></div>
        <h2>Область применения:</h2>
        <p class="text-2">{{ text2 }}</p>
        <div class="gap"></div>
      </div>
    </div>
    <h2>Основные технические характеристики</h2>
    <Table :headers="headers" :rows="rows"></Table>
  </div>
  <div v-else style="display: flex; flex-direction: column;">
    <div v-if=imageLeft class="robot" style="margin-right: auto;">
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" titleMaxWidth="15rem" minWidth="22.5rem"/>
      <div class="description">
        <p class="text-2">{{ text1 }}</p>
        <div class="gap"></div>
        <h2>Область применения:</h2>
        <p class="text-2">{{ text2 }}</p>
        <div class="gap"></div>
        <h2>Основные технические характеристики</h2>
        <Table :headers="headers" :rows="rows"></Table>
      </div>
    </div>
    <div v-else class="robot" style="margin-left: auto;">
      <div class="description">
        <p class="text-2">{{ text1 }}</p>
        <div class="gap"></div>
        <h2>Область применения:</h2>
        <p class="text-2">{{ text2 }}</p>
        <div class="gap"></div>
        <h2>Основные технические характеристики</h2>
        <Table :headers="headers" :rows="rows"></Table>
      </div>
      <Box :title="name" :image="imagePath" titleHeight="1.25rem" titleMaxWidth="15rem" minWidth="22.5rem"/>
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
});
</script>

<style scoped>
.robot {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2.625rem 1rem;
  gap: 1.5rem;
}

.description p, .description h2 {
  max-width: 34.5rem;
}

.gap {
  height: 1.5rem;
}

@media (max-width: 740px) {
  .robot {
    flex-direction: column;
  }
}
</style>
