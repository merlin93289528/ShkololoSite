<template>
  <div>
    <header>
      <div class="head">
        <div class="middleHead">
          <router-link class="hh" to="/">Головна сторінка</router-link>
          <router-link class="hh" to="/journal">Журнал</router-link>
          <router-link class="hh" to="/registration">Реєстрація</router-link>
          <router-link class="hh" to="/login">Вхід</router-link>
        </div>
      </div>
    </header>
    <main>
      <slot> </slot>
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
.head {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1;
}
.head2 {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.hh {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-decoration: none;
  margin-left: 10px;
}
.hh:hover {
  color: rgb(255, 208, 0);
}

footer {
  width: 730px;
  height: 60px;
  left: 30%;
  display: flex;
  background: rgba(77, 24, 121, 0.466);
  bottom: 25px;
  padding: 20px;
  position: absolute;
}
</style>
