<template>
  <div class="main-page">
    <Header></Header>
    <Introducing></Introducing>
    <Advantages></Advantages>
    <Possibilities></Possibilities>
    <Robots></Robots>
    <Production></Production>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.main-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--color-bg);
}
</style>