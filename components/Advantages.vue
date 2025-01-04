<template>
  <div class="advantages" id="advantages">
    <div class="title">
      <h1>{{$t("Наши преимущества")}}</h1>
      <p class="text-1">>{{$t("ИРТ выведет ваше производство на новый уровень рентабельности и качества.")}}</p>
    </div>
    <div class="info">
      <Box 
        v-for="advantage in advantages" 
        :key="advantage.id"
        :title="advantage.title"
        :text="advantage.text"
        :image="advantage.image" 
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Box from '~/components/Box.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const advantages = [
  {
    id: 1,
    title: t('Гибкость использования'),
    text: t(
      'Наши технологии применимы в самых разных сферах — от электроники и фармацевтики до тяжелой промышленности. Мы обеспечиваем быстрое внедрение и адаптацию под ваши потребности, сохраняя высочайшее качество производства.'
    ),
    image: undefined,
  },
  {
    id: 2,
    title: t('Производительность'),
    text: t(
      'Наши технологии круглосуточно выполняют поставленные задачи с высоким уровнем точности и стабильности. Им не нужен отпуск или выходной.'
    ),
    image: undefined,
  },
  {
    id: 3,
    title: t('Рентабельность'),
    text: t(
      'Сокращение затрат на персонал и его обучение, а также снижение внепроизводственные расходов, увеличение объема и качества выпускаемой продукции.'
    ),
    image: undefined,
  },
  {
    id: 4,
    title: t('Независимость от кадров'),
    text: t(
      'Наши технологии позволяют поддерживать стабильность производства даже при нехватке или отсутствии высококвалифицированного персонала.'
    ),
    image: undefined,
  },
];
</script>

<style scoped>
.advantages {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  margin-top: 6.75rem;
  background: var(--color-gradient-start);
  border-bottom-left-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
  box-sizing: border-box;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.info {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin-top: 4.375rem;
}

@media (max-width: 1100px) {
  .info {
    display: grid;
    grid-template-areas: 
      ". item-1 item-2 "
      "item-3 item-4 .";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 1rem;
    width: 100%;
    margin-top: 4.375rem;
  }

  .info > :nth-child(1) {
    grid-area: item-1;
  }

  .info > :nth-child(2) {
    grid-area: item-2;
  }

  .info > :nth-child(3) {
    grid-area: item-3;
  }

  .info > :nth-child(4) {
    grid-area: item-4;
  }
}

@media (max-width: 836px) {
  .info {
    display: grid;
    grid-template-areas: 
      "item-1 item-2 "
      "item-3 item-4 ";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 1rem;
    width: 100%;
    margin-top: 4.375rem;
  }

  .info > :nth-child(1) {
    grid-area: item-1;
  }

  .info > :nth-child(2) {
    grid-area: item-2;
  }

  .info > :nth-child(3) {
    grid-area: item-3;
  }

  .info > :nth-child(4) {
    grid-area: item-4;
  }
}
</style>
