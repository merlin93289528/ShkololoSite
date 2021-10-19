<template>
  <div class="mainPage">
    <master-page>
      Головна сторінка
    </master-page>
  </div>
</template>

<script>
import MasterPage from "@/MasterPage/NewMasterPage";
export default {
  name: "HomePage",
  components: {
    MasterPage,
  },
};
</script>

<style scoped>
.mainPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://i.pinimg.com/originals/b0/d3/18/b0d3181a80864289fc7bad18d04a78db.png) no-repeat;
  background-size: 100%;
}
</style>
