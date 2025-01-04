<template>
  <div сclass="contacts" id="contacts">
    <div class="title">
      <h1>{{$t("Присоединяйтесь к нам!")}}</h1>
    </div>
  </div>
  <div class="blocks">
    <div class="info">
      <p class="text-1">{{$t("Мы предлагаем сотрудничество специалистам, которые хотят расти и развиваться в области цифровых технологий. Если у вас есть знания и амбиции, независимо от вашего местоположения, мы будем рады видеть вас в нашей команде. Мы предлагаем возможности для обучения, развития и достойного заработка.")}}</p>
      <div class="gap"></div>
      <p class="text-1">{{$t("Мы готовы к сотрудничеству с региональными компаниями для реализации проектов и решения актуальных задач на местах.")}}</p>
    </div>
    <div class="contact-us">
      <h2>{{$t("Контакты")}}</h2>
      <div class="gap"></div>
      <h2><span>logistica@povpro.ru</span></h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
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
  gap: 1.5rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.gap {
  height: 1rem;
}

.contact-us {
  text-align: right;
  min-width: 22.5rem;
  margin-bottom: auto;
}

.contact-us h2 span {
  font-size: 1.5rem;
}

@media (max-width: 836px) {
  .blocks {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-us {
    margin-left: auto;
  }
}
</style>