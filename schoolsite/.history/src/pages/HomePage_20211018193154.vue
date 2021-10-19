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
  background-color: rgb(99, 16, 16);
}
</style>
