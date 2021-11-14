<template>
  <div>
    <div class="JrnItem">
      <p class="studName">{{ data.studentName }}</p>
      <div class="inputTypeMark">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
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
};
</script>

<style lang="css" scoped>
.studName {
  width: 20vw;
  height: 1.3vw;
  font-size: 1vw;
  text-align: left;
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
