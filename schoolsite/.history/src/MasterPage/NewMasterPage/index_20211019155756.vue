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
  width: 40%;
  display: flex;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bolder;
  background: rgba(216, 112, 147, 0.541);
  margin: 20px auto;
  position: absolute;
  left: 33%;
  padding: 20px;
}
.head2 {
  
  display: flex;
  align-items: center;
}
.hh {
  color: rgb(255, 255, 255);
  font-size: 25px;
  text-decoration: none;
  margin-left: 35px;
  
}
.hh:hover {
  color: purple;
}
footer {
  width: 810px;
  left: 33%;
  height: 75px;
  display: flex;
  background: rgba(216, 112, 147, 0.541);
  position: absolute;
  padding: 20px;
  bottom: 0px;
}
</style>
