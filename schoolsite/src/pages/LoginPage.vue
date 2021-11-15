<template>
    <master-page>
        <login-form>      
        </login-form> 
    </master-page>
</template>

<script>
import MasterPage from '@/MasterPage/NewMasterPage'
import LoginForm from '@/components/LoginForm'

    export default {
        name: 'loginPage',
        components:{
            MasterPage,
            LoginForm
        }
    }
</script>

<style scoped>

</style>
