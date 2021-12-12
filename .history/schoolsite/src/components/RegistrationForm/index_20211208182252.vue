<template>
  <div class="container register-container">
    <div class="wrapper">
      <form>
        <div class="form-group">
          <label for="name"> Логін:</label>
          <div>
            <input type="text" id="name" class="inpType" v-model="name" />
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
        <div class="form-group">
          <label for="password"> Повторіть ваш пароль:</label>
          <div>
            <input
              type="password"
              id="password_repeat"
              class="inpType"
              v-model="repeat_password"
            />
          </div>
        </div>
        <div class="g">
          <p>{{ getAuthError }}</p>
        </div>
        <div class="groupButton">
          <button type="button" class="btn" @click="signUpUser">
            Зареєструватися
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RegistrationForm",
  data() {
    return {
      name: "",
      password: "",
      repeat_password: "",
    };
  },
  computed: {
    ...mapGetters(["getAuthError"]),
  },
  methods: {
    ...mapActions(["IS_AUTH_ERRORS"]),
    signUpUser() {
      axios
        .post("http://localhost:5000/auth/registration", {
          username: this.name,
          password: this.password,
          repeat_password: this.repeat_password,
        })
        .then((response) => {
          response.data;
          this.$router.push("/login");
        })
        .catch((e) => this.IS_AUTH_ERRORS(e.response.data));
    },
  },
};
</script>

<style scoped>
.g {
  position: absolute;
  margin-top: 0vw;
  margin-left: 2.5vw;
  color: rgb(255, 0, 0);
  font-weight: bolder;
  font-size: 1vw;
}
</style>
