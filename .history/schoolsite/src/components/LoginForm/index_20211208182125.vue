<template>
  <div class="container">
    <div class="wrapper">
      <div class="form-group">
        <label for="email"> Логін:</label>
        <div class="">
          <input type="text" id="email" class="inpType" v-model="username" />
        </div>
      </div>
      <div class="form-group">
        <label for="password"> Пароль:</label>
        <div>
          <input
            type="password"
            id="password"
            class="inpType"
            v-model="password"
          />
        </div>
      </div>
      <div class="errorLog">
        <p>{{ getAuthError }}</p>
      </div>
      <div class="buttonEntr">
        <button type="button" @click="login" class="btn">Вхід</button>
      </div>
      <div class="form-group">
        Нема аккаунту?
        <router-link class="refRegist" to="/registration"
          >Зареєструвати</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["getAuthError"]),
  },
  methods: {
    ...mapActions(["IS_AUTH", "IS_AUTH_ERRORS"]),
    login(event) {
      event.preventDefault();
      axios
        .post(`http://localhost:5000/auth/login`, {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.IS_AUTH(response.data);
          router.push("/");
        })
        .catch((e) => this.IS_AUTH_ERRORS(e.response.data));
    },
  },
};
</script>

<style scoped>
.errorLog{
  position: absolute;
  margin-top: 15vw;
  margin-left: 2.5vw;
  color: rgb(255, 0, 0);
  font-weight: bolder;
}
</style>
