<template>
  <div class="mainPage">
    <master-page>
      <div class="wrap">
        <div class="wrapper1">
          <div class="firstCol"></div>
          <div class="middleCol">
            
          </div>
          <div class="lastCol">
            
          </div>
        </div>
        <div class="middleWrapper"></div>
        <div class="wrapper2">
          <div class="firstLeftCol">
            
          </div>
          <div class="middleLeftCol">
           
          </div>
          <div class="lastLeftCol">
           
          </div>
        </div>
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
