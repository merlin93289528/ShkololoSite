<template>
  <div class="popup">
    <div class="popupWrapAdmin">
      <div class="studInfo">
        <label for="name"> Повне ім'я студента</label>
        <div class="">
          <input type="text" id="name" class="inpInfo" v-model="name" />
        </div>
      </div>
      <div class="studInfo">
        <label for="formClass"> Клас:</label>
        <div class="">
          <input
            type="text"
            id="formClass"
            class="inpInfo"
            v-model="studForm"
          />
        </div>
      </div>
      <div class="subjects">
        <div class="subjInfo">
          <label for="math"> Оцінки математики: (через пробіл)</label>
          <div class="">
            <input type="text" id="math" class="inpInfo" v-model="mathMarks" />
          </div>
        </div>
        <div class="subjInfo">
          <label for="ukr"> Українська:</label>
          <div class="">
            <input type="text" id="ukr" class="inpInfo" v-model="ukrMarks" />
          </div>
        </div>
        <div class="subjInfo">
          <label for="geogr"> Географія:</label>
          <div class="">
            <input type="text" id="geogr" class="inpInfo" v-model="geogMarks" />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <div class="btnCloseDiv">
        <button class="btnClose" @click="closePop">X</button>
      </div>
      <div class="btnAddDiv">
        <button class="btnAdd" @click="addNewStudent">Додати</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      studForm: "",
      error: "",
    };
  },

  methods: {
    ...mapActions(["GET_NEW_USER"]),
    closePop() {
      this.$emit("closePop");
    },
    addNewStudent() {
      axios
        .post("http://localhost:5000/student/setstudent", {
          studentfullname: this.name,
          studentform: this.studForm,
        })
        .then((response) => {
          this.GET_NEW_USER(response.data);
        })
        .catch((e) => (this.error = e.response.data.message));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
