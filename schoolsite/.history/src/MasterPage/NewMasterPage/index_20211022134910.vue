<template>
  <div>
    <header>
      <div class="head">
        <div class="middleHead">
          <router-link class="h1" to="/">Головна сторінка</router-link>
          <router-link class="h2" to="/journal">Журнал</router-link>
          <router-link class="h3" to="/registration">Реєстрація</router-link>
          <router-link class="h4" to="/login">Вхід</router-link>
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
  z-index: 1;
  min-height: 40px;
}
.middleHead {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.h1,.h2,.h3,.h4 {
  display: block;
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  transition: .5s;
}

.middleHead:hover  .h1:hover,.h2:hover,.h3:hover,.h4:hover {
  font-size: 30px;
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
