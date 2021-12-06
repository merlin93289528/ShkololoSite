<template>
  <div class="popup">
    <div class="popupWrapAdmin">
      <div class="studInfo">
        <label for="name"> Логін:</label>
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
      <div class="subjects">
        <div class="subjInfo">
        <label for="math"> Математика:</label>
        <div class="">
          <input type="text" id="math" class="inpInfo" />
        </div>
      </div>
      <div class="subjInfo">
        <label for="ukr"> Українська:</label>
        <div class="">
          <input type="text" id="ukr" class="inpInfo" />
        </div>
      </div>
      <div class="subjInfo">
        <label for="geogr"> Географія:</label>
        <div class="">
          <input type="text" id="geogr" class="inpInfo" />
        </div>
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
  
  methods: {
    closePop() {
      this.$emit("closePop");
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
