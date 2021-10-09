<template>
    <master-page>
        <registration-form/>
    </master-page>
</template>

<script>
    import MasterPage from '@/MasterPage/NewMasterPage'
    import RegistrationForm from '@/components/RegistrationForm'

    export default {
        name: 'registrationPage',
        components:{
            MasterPage,
            RegistrationForm
        }
    }
</script>

<style scoped>

</style>