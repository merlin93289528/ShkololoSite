<template>
  <div>
    <header>
      <div class="container1">
        <div>
          <router-link class="head1 nav-link" to="/">Головна сторінка</router-link>
        </div>
        <div>
          <router-link class="head2 nav-link" id="journalClick" to="/journal">Журнал</router-link>
        </div>
        <div v-if="!getAuthStatus">
          <router-link class="head3 nav-link" id="loginButton" to="/login">Вхід</router-link>
        </div>
        <div class="alRightWhenRegistered" v-else>
          <div class="text">
            Ви зареєстровані
          </div>
          <div>
            <button class="buttonExit" @click="logout">Вийти</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "masterPage",
  computed: {
    ...mapGetters(["getAuthStatus"]),
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<style scoped >
header {
  height: 1.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
}
.head1 {
  justify-items: start;
}
.head2 {
  justify-items: center;
}
.container1 {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 80vw 1fr 2fr;
  justify-items: start;
  z-index: 1;
  height: 2vw;
  margin-top: 0.2vw;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.5vw 0.5vw;
  background-repeat: no-repeat;
  box-shadow: 0 0 17px 10px rgba(0, 0, 0, 0.404) inset;
}
.buttonExit {
  border-radius: 0.2vw 0.2vw;
 
  background-color: rgb(188, 253, 231);
}

.alRightWhenRegistered {
width: 20vw;
margin-left: -5vw;
display: flex;
  flex-direction: row;
}
.text {
  font-weight: bolder;
  margin-right: 0.5vw;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(255, 255, 255);
}
.head1,
.head2,
.head3 {
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 15px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.521);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 1;
  display: grid;
  justify-self: flex-start;
  transition: 0.3s;
}
.nav-link:hover{
 transform: scale(1.2);
}
</style>
