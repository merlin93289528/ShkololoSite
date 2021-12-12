<template>
  <div>
    <header>
      <div class="container1">
        <div class="middleHead">
          <div class="alLeft">
            <router-link class="head1" to="/">Головна сторінка</router-link>
            <router-link class="head2" to="/journal">Журнал</router-link>
            <!-- <router-link class="head2" to="/admin">Адмін</router-link> -->
          </div>
          <div class="alRight" v-if="!getAuthStatus">
            <router-link class="head4" to="/login">Вхід</router-link>
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

<style scoped>
header {
  height: 1.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
}
.container1 {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  height: 2vw;
  margin-top: 0.2vw;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.5vw 0.5vw;
  background-repeat: no-repeat;
  box-shadow: 0 0 17px 10px rgba(0, 0, 0, 0.404) inset;
}
.buttonExit{
  border-radius: 0.5vw 0.5vw;
  background-color: rgb(188, 253, 231);
}
.middleHead {
  z-index: 1;
  display: flex;
  flex-direction: row;
}
.alLeft {
  display: flex;
  justify-content: left;
  margin-left: 2vw;
}
.alRight {
  margin-left: 73vw;
}
.alRightWhenRegistered {
  margin-left: 66vw;
  display: flex;
  flex-direction: row;

}
.text{
  margin-right: 0.5vw;
  text-transform: uppercase;
  color: rgb(106, 202, 149);
}
.head1,
.head2,
.head3,
.head4 {
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 15px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.521);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 1;
}
</style>
