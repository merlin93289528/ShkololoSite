<template>
  <div>
    <header>
      <div class="head">
        <router-link class="hh" to="/">Головна сторінка</router-link>
        <router-link class="hh" to="/journal">Журнал</router-link>
        <router-link class="hh" to="/registration">Реєстрація</router-link>
        <router-link class="hh" to="/login">Вхід</router-link>
      </div>
    </header>
    <main>
      <slot>
        Дефолтне значення
      </slot>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "masterPage",
};
</script>

<style scoped>
/* можеш ще попробувати зробити медіа-запроси для дефолтної сторінки , щоб була адаптивность (якщо канешно знаєш)*/
.head {
  /* тут пиши стилі для хедера (вони будуть відображатися на всіх сторінках) */
  width: 100%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bolder;
  background-color: rgba(216, 112, 147, 0.541);
  height: 50px;
  top: 200px;
}
.head .hh {
  color: rgb(255, 255, 255);
}
footer {
  /* тут пиши стилі для футера (вони будуть відображатися на всіх сторінках) */
  width: 100%;
  height: 4em;
  background-color: thistle;
}
</style>
