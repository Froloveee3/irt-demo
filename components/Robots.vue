<template>
  <div class="robots" id="robots">
    <div class="title">
      <h1>{{$t("Промышленные роботы манипуляторы")}}</h1>
      <p class="text-1">{{$t("Мы предлагаем обширный ассортимент промышленных роботов-манипуляторов, обеспечиваем их интеграцию в производственный процесс, выполняем программирование, изготовление необходимого оборудования и оснастки, а также предоставляем всестороннюю техническую и программную поддержку.")}}</p>
    </div>
    <div style="width: 100%;">
      <Robot v-for="robot in robots" :key="robot.name" v-bind="robot" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();



const robots = [
  {
    imageLeft: true,
    name: t("Роботы SCARA"),
    // imagePath: "/srt-web-page/images/robot-scara.png",
    imagePath: "/images/robot-scara.png",
    text1: t("Компактная конструкция, высокая скорость, высокая точность позиционирования, малый размер и гибкость, защита от воды и пыли, легкий корпус, Поддержка модуля Wi-Fi, загрузка и выгрузка данных, мониторинг в реальном времени."),
    text2: t("Компьютерная, производство электроники, сортировка, фармацевтическое производство, пищевая промышленность."),
    headers: [t("Модель"), t("Радиус действия, мм"), t("Полезная нагрузка, кг"), t("Количество осей")],
    rows: [
      ["SRT3-400", "400", "3", "4"],
      ["SRT6-600", "600", "6", "4"],
      ["SRT6-750", "750", "6", "4"],
      ["SRT12-600", "600", "12", "4"],
      ["SRT12-700", "700", "12", "4"],
      ["SRT12-820", "820", "12", "4"],
      ["SRT12-1000", "1000", "12", "4"],
      ["SRT20-820", "820", "20", "4"],
      ["SRT20-1000", "1000", "20", "4"],
    ],
    // imageTablePath: locale.value === "en" ? "/srt-web-page/images/scara-table-en.png" : "/srt-web-page/images/scara-table.png",
    imageTablePath: locale.value === "en" ? "/images/scara-table-en.png" : "/images/scara-table.png",
  },
  {
    imageLeft: false,
    name: t("Настольные роботы серии SRTt"),
    // imagePath: "/srt-web-page/images/robot-srtt.png",
    imagePath: "/images/robot-srtt.png",
    text1: t("Высокий уровень защиты, высокая скорость, точность, стабильность."),
    text2: t("Компьютерная, коммуникационная, бытовая электроника, металлообработка, пищевая промышленность, фармацевтическое производство. Идеально подходит для интенсивной работы в зоне замкнутого пространства."),
    headers: [t("Модель"), t("Радиус действия, мм"), t("Полезная нагрузка, кг"), t("Количество осей")],
    rows: [
      ["SRTt4-560", "560", "4", "6"],
      ["SRTt7-920", "920", "7", "6"],
      ["SRTt8-710", "700", "8", "6"],
      ["SRTt10-1210", "1211", "10", "6"],
      ["SRTt15-950", "947", "15", "6"],
    ],
    // imageTablePath: locale.value === "en" ? "/srt-web-page/images/srtt-table-en.png" : "/srt-web-page/images/srtt-table.png",
    imageTablePath: locale.value === "en" ? "/images/srtt-table-en.png" : "/images/srtt-table.png",
  },
  {
    imageLeft: true,
    name: t("Роботы легко - средне нагруженные SRTе"),
    // imagePath: "/srt-web-page/images/robot-srte.png",
    imagePath: "/images/robot-srte.png",
    text1: t("Высокая скорость, повторяемость, точность позиционирования и жесткость, высокий уровень защиты, легкий корпус, низкие затраты на эксплуатацию и обслуживание."),
    text2: t("Компьютерная, коммуникационная, производство бытовой электроники, металлообработка, сварочное производство, окрасочное производство. В основном применяется для погрузки и разгрузки, шлифовки и полировки, сварки, перемещения и укладки в тяжелых условиях."),
    headers: [t("Модель"), t("Радиус действия, мм"), t("Полезная нагрузка, кг"), t("Количество осей")],
    rows: [
      ["SRTe6-1450", "1455", "10", "6"],
      ["SRTe10-1420", "1420", "10", "6"],
      ["SRTe10-1720", "1721", "10", "6"],
      ["SRTe12-2000", "2001", "12", "6"],
      ["SRTe20-2000", "2001", "20", "6"],
      ["SRTe25-1700", "1702", "25", "6"],
      ["SRTe35-1700", "1702", "35", "6"],
      ["SRTe50-2230", "2238", "50", "6"],
      ["SRTe75-2100", "2112", "75", "6"],
    ],
    // imageTablePath: locale.value === "en" ? "/srt-web-page/images/srte-table-en.png" : "/srt-web-page/images/srte-table.png",
    imageTablePath: locale.value === "en" ? "/images/srte-table-en.png" : "/images/srte-table.png",
  },
  {
    imageLeft: false,
    name: t("Роботы тяжело нагруженные SRTh"),
    // imagePath: "/srt-web-page/images/robot-srth.png",
    imagePath: "/images/robot-srth.png",
    text1: t("Жёсткая конструкция, высокая стабильность, незначительные колебания крутящего момента."),
    text2: t("Производственные линии, тяжелая промышленность, машиностроение, механическая обработка, перемещение тяжелых грузов."),
    headers: [t("Модель"), t("Радиус действия, мм"), t("Полезная нагрузка, кг"), t("Количество осей")],
    rows: [
      ["SRTh130-2700", "2707", "130", "6"],
      ["SRTh130-3100", "3104", "130", "6"],
      ["SRTh165-2750", "2750", "165", "6"],
      ["SRTh170-2700", "2707", "170", "6"],
      ["SRTh170-3100", "3104", "170", "6"],
      ["SRTh220-2700", "2707", "220", "6"],
      ["SRTh220-3100", "3104", "220", "6"],
      ["SRTh280-2700", "2707", "280", "6"],
    ],
    // imageTablePath: locale.value === "en" ? "/srt-web-page/images/srth-table-en.png" : "/srt-web-page/images/srth-table.png",
    imageTablePath: locale.value === "en" ? "/images/srth-table-en.png" : "/images/srth-table.png",
  },
];
</script>

<style scoped>
.robots {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 3rem 1rem;
  margin-top: 9.5rem;
  background: linear-gradient(180deg, var(--color-gradient-end) 0%, var(--color-gradient-start) 15%, var(--color-gradient-start) 100%);
  border-top-left-radius: 1.875rem;
  border-top-right-radius: 1.875rem;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  gap: 1rem;
}

.title h1 {
    max-width: 56rem;
  }

.title p {
  max-width: 56rem;
}

@media (min-width: 1500px) {
  .title h1 {
    max-width: 73.75rem;
  }

  .title p {
    max-width: 92.5rem;
  }
}
</style>