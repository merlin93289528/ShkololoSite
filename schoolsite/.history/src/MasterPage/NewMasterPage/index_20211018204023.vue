<template>
  <div>
    <header>
      <div class="head">
        <div class="head2">
          <router-link class="hh" to="/">Головна сторінка</router-link>
          <router-link class="hh" to="/journal">Журнал</router-link>
          <router-link class="hh" to="/registration">Реєстрація</router-link>
          <router-link class="hh" to="/login">Вхід</router-link>
        </div>
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
  display: flex;
  justify-content: space-between;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bolder;
  background: rgba(216, 112, 147, 0.541);
  margin-top: 20px;
}
.head.head2 {
  display: flex;
  align-items: center;
}
.head .hh {
  color: rgb(255, 255, 255);
  padding: 10px, 15px; 
  font-size: 250px;
  text-decoration: none;
}
footer {
  /* тут пиши стилі для футера (вони будуть відображатися на всіх сторінках) */
  width: 100%;
  height: 4em;
  background-color: thistle;
}
</style>
