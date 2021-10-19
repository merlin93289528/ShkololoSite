<template>
  <div class="mainPage">
    <master-page>
      <div class="wrapper1">
        <div class="firstCol"></div>
        <div class="middleCol">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis sapiente quidem laudantium animi alias perspiciatis sint
          pariatur, distinctio consectetur ab assumenda temporibus enim delectus
          voluptas vitae omnis itaque asperiores? Consectetur, alias
          necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
          neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
          laborum dolore quos impedit? Maxime cumque odio eaque voluptatem
          sequi. Eum accusantium, sapiente repudiandae voluptates accusamus
          ipsum repellendus nobis dolorem nulla provident obcaecati corrupti
          optio perferendis nesciunt laborum voluptas amet quisquam sequi ab
          explicabo! Corporis est doloremque obcaecati ratione optio?
        </div>
        <div class="lastCol">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis sapiente quidem laudantium animi alias perspiciatis sint
          pariatur, distinctio consectetur ab assumenda temporibus enim delectus
          voluptas vitae omnis itaque asperiores? Consectetur, alias
          necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
          neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
          laborum dolore quos impedit? Maxime cumque odio eaque voluptatem
          sequi. Eum accusantium, sapiente repudiandae voluptates accusamus
          ipsum repellendus nobis dolorem nulla provident obcaecati corrupti
          optio perferendis nesciunt laborum voluptas amet quisquam sequi ab
          explicabo! Corporis est doloremque obcaecati ratione optio?
        </div>
      </div>
      <div class="middleWrapper"></div>
      <div class="wrapper2">
        <div class="firstLeftCol">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis sapiente quidem laudantium animi alias perspiciatis sint
          pariatur, distinctio consectetur ab assumenda temporibus enim delectus
          voluptas vitae omnis itaque asperiores? Consectetur, alias
          necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
          neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
          laborum dolore quos impedit? Maxime cumque odio eaque voluptatem
          sequi. Eum accusantium, sapiente repudiandae voluptates accusamus
          ipsum repellendus nobis dolorem nulla provident obcaecati corrupti
          optio perferendis nesciunt laborum voluptas amet quisquam sequi ab
          explicabo! Corporis est doloremque obcaecati ratione optio?
        </div>
        <div class="middleLeftCol">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis sapiente quidem laudantium animi alias perspiciatis sint
          pariatur, distinctio consectetur ab assumenda temporibus enim delectus
          voluptas vitae omnis itaque asperiores? Consectetur, alias
          necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
          neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
          laborum dolore quos impedit? Maxime cumque odio eaque voluptatem
          sequi. Eum accusantium, sapiente repudiandae voluptates accusamus
          ipsum repellendus nobis dolorem nulla provident obcaecati corrupti
          optio perferendis nesciunt laborum voluptas amet quisquam sequi ab
          explicabo! Corporis est doloremque obcaecati ratione optio?
        </div>
        <div class="lastLeftCol">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis sapiente quidem laudantium animi alias perspiciatis sint
          pariatur, distinctio consectetur ab assumenda temporibus enim delectus
          voluptas vitae omnis itaque asperiores? Consectetur, alias
          necessitatibus esse eveniet possimus exercitationem nihil, natus odit,
          neque ducimus dolorem minus nostrum at fuga aliquid? Officia delectus
          laborum dolore quos impedit? Maxime cumque odio eaque voluptatem
          sequi. Eum accusantium, sapiente repudiandae voluptates accusamus
          ipsum repellendus nobis dolorem nulla provident obcaecati corrupti
          optio perferendis nesciunt laborum voluptas amet quisquam sequi ab
          explicabo! Corporis est doloremque obcaecati ratione optio?
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

<style scoped  >
 .wrapper1 {
  display: flex;
  flex-direction: column;
}
.firstCol,
.middleCol,
.lastCol {
  width: 28%;
  height: 288px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  top: 30px;
  position: relative;
  background-color: rgba(77, 24, 121, 0.466);
}
.middleWrapper {
  background-color: rgba(77, 24, 121, 0.466);
  position: absolute;
  height: 710px;
  width: 768px;
  top: 120px;
  left: 576px;
}
.wrapper2 {
  display: flex;
  position: absolute;
  top: 30px;
  right: 0px;
  flex-direction: column;
}
.firstLeftCol,
.middleLeftCol,
.lastLeftCol {
  width: 28%;
  height: 288px;
  background-color: rgba(77, 24, 121, 0.466);
  color: rgb(16, 51, 82);
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 1360px;
} 

.mainPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url(https://pbs.twimg.com/media/EBzi8h1XsAA2eOI.jpg) no-repeat; */
  background-size: cover;
}

</style>

