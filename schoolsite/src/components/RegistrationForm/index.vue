<template>
    <div class="container register-container">
    <div class="wrapper">
      <div class="form-group">
        <label for="name"> Ваше ім'я, прізвище та по-батькові:</label>
        <div>
          <input type="text" id="name" class="inpType" />
        </div>
      </div>

      <div class="form-group">
        <label for="schoolClass"> Клас: </label>
        <div>
          <input type="text" id="schoolClass" class="inpType" />
        </div>
      </div>

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
      <button type="button" class="btn">Зареєструватися</button>
      </div>
      
    </div>
  </div>
</template>

<script>
    export default {
        name: 'RegistrationForm'
    }
</script>

<style scoped ></style>