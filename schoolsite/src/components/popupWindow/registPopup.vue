<template>
  <div class="popup">
    <div class="popupWrapAdmin">
      <div class="studInfo">
        <label for="name"> Ім'я, прізвище та по-батькові:</label>
        <div class="">
          <input type="text" id="name" class="inpInfo" />
        </div>
      </div>
      <div class="studInfo">
        <label for="formClass"> Клас:</label>
        <div class="">
          <input type="text" id="formClass" class="inpInfo" />
        </div>
      </div>
    </div>
    <div class="buttons">
      <div class="btnCloseDiv">
        <button class="btnClose" @click="closePop">X</button>
      </div>
      <div class="btnAddDiv">
        <button class="btnAdd">Додати</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {},
  data() {
    return {};
  },
  methods: {
    closePop() {
      this.$emit("closePop");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

</style>
