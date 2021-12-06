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
              type="text"
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
              type="text"
              id="password"
              class="inpType"
              v-model="password"
            />
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn" @click="signUpUser">
            Зареєструватися
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      name: "",
      formClass: "",
      mail: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
