<template>
    <div class="jrnl">
        <div>Назва предмету {{data.SubjectName}}</div>
        <div>І'мя викладача {{data.TeacherName}}</div>
        <p>Ім'я школяра {{data.StudentName}} , Оцінка {{data.StudentMark}}</p>
    </div>
</template>

<script>
    export default {
        name: "Journal",
        props:{
            data :{
                type: Object,
                default: null
            }
        }
    }
</script>

<style scoped>
.jrnl{
    border: solid 2px red;
}
</style>