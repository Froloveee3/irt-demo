<template>
  <div class="production" id="production">
    <div class="title">
      <h1>{{$t("Собственное производство")}}</h1>
      <p class="text-1">{{$t("Наша компания работает в единой связи с ООО \"Поволжское Производственное объединение №3\"")}}</p>
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
            <img :src="images[currentIndex1]" :key="currentIndex1" alt="gallery" />
          </transition>
        </div>
        <div @click="nextImage(1)" class="arrow right"><img src="/images/arrow-right.png" alt="arrow"/></div>
      </div>
    </div>
    <div class="title">
      <h1>{{$t("Автоматизация технологических процессов")}}</h1>
    </div>
    <div class="blocks">
      <Box :title="$t('Преимущества автоматизации технологических процессов')" titleHeight="2.5rem" titleMaxWidth="21rem" minWidth="17.5rem">
        <div class="slot-text">
          <p class="text-2">{{$t("• Контролирование процесса удаленно, с любого устройства.")}}</p>
          <p class="text-2">{{$t("• Все параметры регулируются автоматически, исключая человеческий фактор.")}}</p>
          <p class="text-2">{{$t("• Увеличение производительности и отсутствие необходимости постоянного присутствия оператора.")}}</p>
        </div>
      </Box>
      <div class="info">
        <p class="text-2">{{$t("Обычный сушильный шкаф, приобретенный у отечественного производителя, с ручным управлением оказался неудобным и малоэффективным: для настройки режимов требовалось постоянное присутствие оператора, что снижало производительность и рентабельность.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("После нашей модернизации и интеграции системы управления процессором необходимость в постоянном присутствии персонала отпала. Единственное участие человека сводится к загрузке и выгрузке, что требуется лишь раз в четыре дня.")}}</p>
        <div class="gap"></div>
        <p class="text-2">{{$t("Возможность удалённо регулировать температурные и временные режимы с любого устройства. Программное обеспечение, разработанное нашими инженерами, позволяет гибко задавать любые режимы и циклы, а также защищает от нештатных ситуаций. В случае аварии система автоматически оповестит вас сигналом или сообщением.")}}</p>
        <div class="gap"></div>
        <p class="text-2"><span>{{$t("Как пример:")}}</span>{{$t(" в процессе, длительностью 4 суток, каждые 1,5 часа требуется повышать температуру на 7 градусов. При нарушении этих условий продукция становится испорченной. Благодаря нашей автоматизации весь процесс выполняется без сбоев, полностью в автоматическом режиме.")}}</p>
      </div>
    </div>
    <div class="title">
      <h1>{{$t("Модернизация оборудования")}}</h1>
      <p class="text-1">{{$t("Модернизация горизонтально-расточного станка 2А622Ф4")}}</p>
    </div>
    <div class="blocks with-gallery">
      <div class="gallery-container">
        <div @click="prevImage(2)" class="arrow left"><img src="/images/arrow-left.png" alt="arrow"/></div>
        <div class="gallery">
          <transition :name="transitionName">
            <img :src="images[currentIndex2]" :key="currentIndex2" alt="gallery" />
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
import { ref } from 'vue';

const images = [
  'images/production-1.png',
  'images/production-2.png',
  'images/production-3.png',
  'images/production-4.png',
  'images/production-5.png',
  'images/production-6.png',
];

const currentIndex1 = ref(0);
const currentIndex2 = ref(0);
const transitionName = ref('slide-left');

const prevImage = (num: number) => {
  transitionName.value = 'slide-right';

  if (num === 1) {
    currentIndex1.value = (currentIndex1.value - 1 + images.length) % images.length;
  } else if (num === 2) {
    currentIndex2.value = (currentIndex2.value - 1 + images.length) % images.length;
  }
};

const nextImage = (num: number) => {
  transitionName.value = 'slide-left';

  if (num === 1) {
    currentIndex1.value = (currentIndex1.value + 1) % images.length;
  } else if (num === 2) {
    currentIndex2.value = (currentIndex2.value + 1) % images.length;
  }
};
</script>

<style scoped>
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
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.blocks.with-gallery {
  gap: 5rem;
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

@media (max-width: 836px) {
  .blocks {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .blocks.with-gallery {
    gap: 2rem;
  }

  .slot-text {
    margin-top: -1rem;
    padding: 0;
  }


}
</style>