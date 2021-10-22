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
  background-color: rgb(243, 23, 23);
  z-index: 1;
  min-height: 40px;
}
.middleHead {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}
.hh {
  display: block;
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
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
