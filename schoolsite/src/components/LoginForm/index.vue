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
          <input type="password" id="password" class="inpType" v-model="password" />
        </div>
      </div>
      <div class="form-group">
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
import { mapActions } from "vuex";
import axios from "axios";
import router from "@/router";
export default {
  name: "LoginForm",
  data() {
    return {
      test: '',
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["IS_AUTH"]),
    login(event) {
      event.preventDefault();
      axios
        .post(`http://localhost:5000/auth/login`, {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.IS_AUTH(response.data.token);
          router.push("/");
        });
    },

  },
};
</script>

<style scoped></style>
