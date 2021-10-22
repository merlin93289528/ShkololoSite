<template>
  <div class="mainPage">
    <master-page>
      <div class="wrap">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
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

<style scoped src="@/assets/styles/mainPage.css"></style>
