<template>
  <div class="possibilities" id="possibilities">
    <h1>{{$t("Наши возможности")}}</h1>
    <div class="grid">
      <Box v-for="(item, index) in items" :key="index" :title="item.title" :text="item.description" :title-height="item.titleHeight" :scrollToId="item.scrollToId" :class="`grid-item item-${index + 1}`"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Box from './Box.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const items = [
  { title: t("Промышленные роботы манипуляторы"), description: t("Программирование и пуско-наладка"), titleHeight: "3.75rem", scrollToId: "robots" },
  { title: t("Интеллектуальные разработки"), description: t("Мы сможем не только поставить необходимых роботов, но и спроектировать все узлы и компоненты для интеграции в ваш рабочий процесс"), titleHeight: "3.75rem"},
  { title: t("Собственное производство"), description: t("Изготовление необходимой оснастки и инструментов на собственном производстве"), titleHeight: "3.75rem", scrollToId: "production" },
  { title: t("Написание управляющих программ для оборудования"), description: "", titleHeight: "3.75rem" },
  { title: t("Написание постпроцессоров"), description: "", titleHeight: "3.75rem" },
  { title: t("Программирование контроллеров"), description: "", titleHeight: "3.75rem" },
  { title: t("Автоматизация технологических процессов"), description: "", titleHeight: "3.75rem", scrollToId: "automization" },
  { title: t("3D-моделирование и разработка чертежей"), description: "", titleHeight: "3.75rem" },
  { title: t("Модернизация оборудования"), description: "", titleHeight: "3.75rem", scrollToId: "modernization" },
];
</script>

<style scoped>
.possibilities {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  margin-top: 2.25rem;
  background: var(--color-gradient-start);
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1.5rem; 
  width: 100%;
  justify-content: center;

  grid-template-areas:
    "item-1 item-2 item-3 ."
    ". item-4 item-5 item-6"
    ". item-7 item-8 item-9";
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "item-1 item-2 item-3"
      "item-4 item-5 item-6"
      "item-7 item-8 item-9";
  }
}

@media (max-width: 836px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "item-2 item-6"
      "item-2 item-9"
      "item-1 item-3"
      "item-1 item-3"
      "item-4 item-5"
      "item-7 item-8";
  }
}

.grid-item {
  /* padding: 1.5rem; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 8rem;
}

@media (max-width: 836px) {
  .grid-item {
  }
}

.grid-item h2 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.grid-item p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.item-1 {
  grid-area: item-1;
}

.item-2 {
  grid-area: item-2;
}

.item-3 {
  grid-area: item-3;
}

.item-4 {
  grid-area: item-4;
}

.item-5 {
  grid-area: item-5;
}

.item-6 {
  grid-area: item-6;
}

.item-7 {
  grid-area: item-7;
}

.item-8 {
  grid-area: item-8;
}

.item-9 {
  grid-area: item-9;
}
</style>
