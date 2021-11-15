<template>
  <div>
    <div class="JrnItem">
      <p class="studName">{{ data.studentName }}</p>
      <div class="inputTypeMark">
        <input type="text" v-for="n in 20" :key="n"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.studName {
  width: 20vw;
  height: 1.3vw;
  font-size: 1vw;
  text-align: center;
  color: aliceblue;
  background-color: rgba(20, 19, 90, 0.541);
}
.inputTypeMark {
  margin-left: 1vw;
}
.JrnItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -1.5vw;
}
input {
  width: 1.5vw;
  height: 1.3vw;

}
</style>
