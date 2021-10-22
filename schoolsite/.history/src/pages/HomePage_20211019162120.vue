<template>
  <div class="mainPage">
    <master-page>
      <div class="leftCol"></div>
      <div class="middleCol"></div>
      <div class="rightCol"></div>
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

@import 'src/assets/css/main.css';
.mainPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://pbs.twimg.com/media/EBzi8h1XsAA2eOI.jpg)
    no-repeat;
  background-size: cover;
}
</style>
