<template>
  <div>
    <div class="JrnItem">
      <div>
        <p>
          {{ data.studentName }}
          <input type="text" class="markField" />
        </p>
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

<style lang="css" scoped>
.JrnItem {
}
.markField {
  width: 20px;
}
</style>