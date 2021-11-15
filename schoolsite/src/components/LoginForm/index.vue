<template>
  <div class="container">
    <div class="wrapper">
      <div class="form-group">
        <label for="email"> Email:</label>
        <div class="">
          <input type="text" id="email" class="inpType" />
        </div>
      </div>
      <div class="form-group">
        <label for="password"> Пароль:</label>
        <div>
          <input type="text" id="password" class="inpType" />
        </div>
      </div>
      <div class="form-group">
        <button type="button" class="btn">Вхід</button>
      </div>
      <div class="form-group">
        Нема аккаунту?
        <router-link class="refRegister" to="/registration"
          >Зареєструватися</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped></style>
