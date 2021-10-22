<template>
    <master-page>
        {{marksJournal[0].SubjectName}}
        <div v-for="markBlock in marksJournal" :key="markBlock.id">
            <journal :data="markBlock"/>  
        </div>
    </master-page>
</template>

<script>
import MasterPage from '@/MasterPage/NewMasterPage'
import Journal from '@/components/Journal'

    export default {
        name: 'JournalPage',
        data() {
            return {
                marksJournal : [ // просто масив для перевірки чи всьо працює коректно (патом ця інфа буде братися з бази данних) 
                    {
                        id : 1,
                        SubjectName : 'Mathematic',
                        TeacherName: 'Pogorilack Oleksandr',
                        StudentName: 'Vasya Holovachko',
                        StudentMark: '100'
                    },
                    {
                        id : 2,
                        SubjectName : 'English',
                        TeacherName: 'Otika Minda',
                        StudentName: 'Vasya Holovachko',
                        StudentMark: '95'
                    }
                ]
                
            }
        },
        components:{
            MasterPage,
            Journal
        },

    }
</script>

<style scoped>

</style>