<template>
  <div class="production" id="production">
    <div class="title">
      <h1>{{$t("Собственное производство")}}</h1>
      <p class="text-1" v-html="companyInfo"></p>
    </div>
    <div class="blocks with-gallery">
      <div class="info">
        <p class="text-2">{{$t("— это стабильно работающее предприятие с парком современного высокотехнологичного оборудования, что позволяет нам выпускать продукцию высокого качества, соответствующую самым строгим требованиям заказчиков.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("Мы гордимся своей профессиональной командой, состоящей из опытных рабочих, инженеров и программистов. Наши специалисты оперативно решают сложные производственные задачи и предоставляют услуги по созданию оснастки и компонентов для проектов автоматизации и роботизации технологических процессов.")}}</p>
      </div>
      <div class="gallery-container">
        <div @click="prevImage(1)" class="arrow left"><img src="/images/arrow-left.png" alt="arrow"/></div>
        <div class="gallery">
          <transition :name="transitionName">
            <img :src="productionImages[currentIndex1]" :key="currentIndex1" alt="gallery" />
          </transition>
        </div>
        <div @click="nextImage(1)" class="arrow right"><img src="/images/arrow-right.png" alt="arrow"/></div>
      </div>
    </div>
    <div class="title" id="automization">
      <h1>{{$t("Автоматизация технологических процессов")}}</h1>
    </div>
    <div class="blocks not-bottom-margin">
      <Box :title="$t('Преимущества автоматизации технологических процессов')" titleHeight="2.5rem" :titleMaxWidth="titleMaxWidth" :minWidth="boxMinWidth">
        <div class="slot-text">
          <p class="text-1">{{$t("• Контролирование процесса удаленно, с любого устройства.")}}</p>
          <p class="text-1">{{$t("• Все параметры регулируются автоматически, исключая человеческий фактор.")}}</p>
          <p class="text-1">{{$t("• Увеличение производительности и отсутствие необходимости постоянного присутствия оператора.")}}</p>
        </div>
      </Box>
      <div class="info without-gallery">
        <p class="text-2">{{$t("Обычный сушильный шкаф, приобретенный у отечественного производителя, с ручным управлением оказался неудобным и малоэффективным: для настройки режимов требовалось постоянное присутствие оператора, что снижало производительность и рентабельность.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("После нашей модернизации и интеграции системы управления процессором необходимость в постоянном присутствии персонала отпала. Единственное участие человека сводится к загрузке и выгрузке, что требуется лишь раз в четыре дня.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("Возможность удалённо регулировать температурные и временные режимы с любого устройства. Программное обеспечение, разработанное нашими инженерами, позволяет гибко задавать любые режимы и циклы, а также защищает от нештатных ситуаций. В случае аварии система автоматически оповестит вас сигналом или сообщением.")}}</p>
        <div class="gap"></div>
        <p class="text-2"><span>{{$t("Как пример:")}}</span>{{$t(" в процессе, длительностью 4 суток, каждые 1,5 часа требуется повышать температуру на 7 градусов. При нарушении этих условий продукция становится испорченной. Благодаря нашей автоматизации весь процесс выполняется без сбоев, полностью в автоматическом режиме.")}}</p>
      </div>
    </div>
    <div class="toggle-container">
      <p class="text-2 toggle-arrow"><span @click="toggleImage">{{ showImage ? $t('Скрыть') : $t('Подробнее') }}</span></p>
      <transition name="fade">
        <img v-if="showImage" src="/images/automization-image.png" alt="automization" class="toggle-image"/>
      </transition>
    </div>
    <div class="title" id="modernization">
      <h1>{{$t("Модернизация оборудования")}}</h1>
      <p class="text-1">{{$t("Модернизация горизонтально-расточного станка 2А622Ф4")}}</p>
    </div>
    <div class="blocks with-gallery with-gallery-2">
      <div class="gallery-container">
        <div @click="prevImage(2)" class="arrow left"><img src="/images/arrow-left.png" alt="arrow"/></div>
        <div class="gallery gallery-2">
          <transition :name="transitionName">
            <img :src="modernizationImages[currentIndex2]" :key="currentIndex2" alt="gallery" />
          </transition>
        </div>
        <div @click="nextImage(2)" class="arrow right"><img src="/images/arrow-right.png" alt="arrow"/></div>
      </div>
      <div class="info">
        <p class="text-2">{{$t("Заказчик столкнулся с проблемой частого выхода из строя громоздких и не очень надежных двигателей постоянного тока Болгарского производства на горизонтально-расточном станке 2А622Ф4.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("Были спроектированы и изготовлены на собственном производстве переходной адаптер, детали сильфонной муфты и другие необходимые крепежные элементы. После тестирования станок был успешно сдан заказчику, который планирует по этой же схеме поменять все остальные двигатели!")}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const productionImages = [
  'images/production-1.png',
  'images/production-2.png',
  'images/production-3.png',
  'images/production-4.png',
  'images/production-5.png',
  'images/production-6.png',
];

const modernizationImages = [
  'images/modernization-1.png',
  'images/modernization-2.png',
  'images/modernization-3.png',
  'images/modernization-4.png',
];

const currentIndex1 = ref(0);
const currentIndex2 = ref(0);
const transitionName = ref('slide-left');

const prevImage = (num: number) => {
  transitionName.value = 'slide-right';

  if (num === 1) {
    currentIndex1.value = (currentIndex1.value - 1 + productionImages.length) % productionImages.length;
  } else if (num === 2) {
    currentIndex2.value = (currentIndex2.value - 1 + modernizationImages.length) % modernizationImages.length;
  }
};

const nextImage = (num: number) => {
  transitionName.value = 'slide-left';

  if (num === 1) {
    currentIndex1.value = (currentIndex1.value + 1) % productionImages.length;
  } else if (num === 2) {
    currentIndex2.value = (currentIndex2.value + 1) % modernizationImages.length;
  }
};

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

const boxMinWidth = computed(() => (windowWidth.value < 1500 ? "17.5rem" : "45rem"));
const titleMaxWidth = computed(() => (windowWidth.value < 1500 ? "21rem" : "34rem"));
const { t } = useI18n();

const companyInfo = computed(() => {
  const companyName = t('companyName');
  return t('companyText', {
    companyLink: `<a href="https://povpro.ru" target="_blank">${companyName}</a>`
  });
});

const showImage = ref(false);

const toggleImage = () => {
  showImage.value = !showImage.value;
};
</script>

<style scoped>
.production {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.slot-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  max-width: 23.75rem;
  text-align: left;
  padding: 1rem;
}

.text-2 span {
  font-weight: 900;
  font-family: 'Ablation', sans-serif;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 58rem;
  margin-top: 2.25rem;
  margin-left: auto;
  margin-right: auto;
  gap: 1rem;
}

.blocks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.blocks.not-bottom-margin {
  margin-bottom: 0;
}

.blocks.with-gallery {
  gap: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-evenly;
}

.blocks.with-gallery-2 {
  margin-left: 3rem;
  margin-right: 3rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 34rem;
}

.gap {
  height: 1rem;
}

.gallery-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 22.3125rem;
  height: 16.75rem;
  border-radius: 30px;
  overflow: hidden;
}

.gallery img {
  position: absolute;
  width: 22.3125rem;
  height: 16.75rem;
  transition: transform 0.5s ease;
}

.gallery-2 {
  width: 16.5625rem;
  height: 22.125rem;
}

.gallery-2 img {
  width: 26.625rem;
  height: 34.5rem;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4375rem;
  height: 2.4375rem;
  cursor: pointer;
  z-index: 10;
}

.arrow img {
  width: 2.4375rem;
  height: 2.4375rem;
}

.left {
  left: 0;
  transform: translateX(-50%);
}

.right {
  right: 0;
  transform: translateX(50%);
}

@media (min-width: 1500px) {
  .title {
    max-width: 92.5rem;
  }

  .title p {
    max-width: 73.75rem;
  }

  .info {
    max-width: 54.375rem;
  }

  .info.without-gallery {
    max-width: 63.75rem;
  }

  .gallery {
    width: 35.625rem;
    height: 26rem;
  }

  .gallery img {
    width: 35.625rem;
    height: 26rem;
  }

  .gallery-2 {
    width: 26.625rem;
    height: 34.5rem;
  }

  .gallery-2 img {
    width: 26.625rem;
    height: 34.5rem;
  }

  .slot-text {
    max-width: 37.5rem;
  }
}



.toggle-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

.toggle-arrow {
  /* font-size: 1.5rem; */
  cursor: pointer;
  user-select: none;
}

.toggle-image {
  width: 100%;
  margin-top: 1rem;
  border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 836px) {
  .blocks {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .blocks.with-gallery {
    gap: 2rem;
    align-items: center;
  }

  .slot-text {
    margin-top: 0;
    padding: 0;
  }

  .slot-text p {
    font-size: 0.75rem;
  }

  .gallery {
    width: 17.8125rem;
    height: 13.4375rem;
  }

  .gallery-2 {
    width: 17.5rem;
    height: 23.125rem;
  }

  .blocks {
    padding: 0;
  }
  
  .toggle-container {
    padding-left: 0;
    padding-right: 0;
  }

  .blocks.with-gallery {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>