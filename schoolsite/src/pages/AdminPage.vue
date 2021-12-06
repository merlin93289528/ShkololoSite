<template>
    <master-page>
        <admin/>
    </master-page>
</template>

<script>
import MasterPage from '@/MasterPage/NewMasterPage'
import Admin from '@/components/Admin'

    export default {
        name: 'AdminPage',
        components:{
            MasterPage,
            Admin
        },

    }
</script>

<style scoped>

</style>