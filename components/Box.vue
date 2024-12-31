<template>
  <div class="box" :style="{ minWidth: minWidth || '8rem' }">
    <h2 :style="{ minHeight: titleHeight || '2.5rem', maxWidth: titleMaxWidth || '100%' }">{{ title }}</h2>
    <p v-if="text" class="text-2">{{ text }}</p>
    <img v-if="image" :src="image" alt="Box Image" />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  text: String,
  image: String,
  titleHeight: String,
  titleMaxWidth: String,
  minWidth: String,
});
</script>

<style scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
  flex: 1 1 20%;
  padding: 1.625rem 0.75rem;
  background: linear-gradient(180deg, #ffffff33 0%, #9999991a 100%);
  border-radius: 1.875rem;
  box-sizing: border-box;
  text-align: center;
}

.box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.875rem;
  padding: 1px;
  background: radial-gradient(circle at top left, rgba(0, 0, 0, 0.0) 0%, rgba(255, 255, 255, 0.2) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  z-index: 0;
}

.box h2 {
  z-index: 1;
}

.box p {
  z-index: 1;
}

.box img {
  max-height: 22rem;
}
</style>
