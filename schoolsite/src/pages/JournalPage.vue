<template>
    <master-page>
        <journal/>
    </master-page>
</template>

<script>
import MasterPage from '@/MasterPage/NewMasterPage'
import Journal from '@/components/Journal'

    export default {
        name: 'JournalPage',
        components:{
            MasterPage,
            Journal
        },

    }
</script>

<style scoped>

</style>