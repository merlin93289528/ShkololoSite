<template>
<div class="mainPage">
    <master-page>
        Головна сторінка
    </master-page>
</div>
</template>

<script>
import MasterPage from '@/MasterPage/NewMasterPage'
export default {
  name: 'HomePage',
  components: {
    MasterPage
  }
}
</script>

<style scoped>
.mainPage{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>
