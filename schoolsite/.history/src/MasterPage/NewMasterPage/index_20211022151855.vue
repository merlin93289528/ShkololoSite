<template>
  <div>
    <header>
      <div class="container">
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
.container {
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  left: 24%;
  z-index: 1;
  min-height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px 10px;
  background-repeat: no-repeat;
  background-size: cover;
   box-shadow: 0 0 5px 5px rgba(18, 4, 44, 0.836) inset;
  background-image: url(https://p4.wallpaperbetter.com/wallpaper/88/701/158/nature-peace-peaceful-landscape-wallpaper-preview.jpg)
}

.middleHead {
  transition: 0.5s;
  z-index: 1;
}
.h1,
.h2,
.h3,
.h4 {
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
  z-index: 1;
}

.middleHead:hover .h1:hover,
.h2:hover,
.h3:hover,
.h4:hover {
  font-size: 30px;
  z-index: 1;
}

/* footer {
  width: 730px;
  height: 60px;
  left: 30%;
  display: flex;
  background: rgba(77, 24, 121, 0.466);
  bottom: 25px;
  padding: 20px;
  position: absolute;
} */
</style>
