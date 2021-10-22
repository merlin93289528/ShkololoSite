<template>
  <link rel="stylesheet" type="text/css" href="src/assets/main.css" />
  <div class="mainPage">
    <master-page>
      <div class="leftCol">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        blanditiis sapiente quidem laudantium animi alias perspiciatis sint
        pariatur, distinctio consectetur ab assumenda temporibus enim delectus
        voluptas vitae omnis itaque asperiores? Consectetur, alias
        necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
        neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
        laborum dolore quos impedit? Maxime cumque odio eaque voluptatem sequi.
        Eum accusantium, sapiente repudiandae voluptates accusamus ipsum
        repellendus nobis dolorem nulla provident obcaecati corrupti optio
        perferendis nesciunt laborum voluptas amet quisquam sequi ab explicabo!
        Corporis est doloremque obcaecati ratione optio?
      </div>
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
/* @import 'src/assets/main.css'; */
.mainPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://pbs.twimg.com/media/EBzi8h1XsAA2eOI.jpg) no-repeat;
  background-size: cover;
}
</style>
