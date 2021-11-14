import { createStore } from 'vuex';


const store = new createStore({
    state: {
        studentJournal: [
            {
                id: 1,
                studentName: 'Мілюченко Андрій Андрійович',
                studentClass: 4,
                subject: 'Математика',

            },
            {
                id: 2,
                studentName: 'Савчин Мирослав Володимирович',
                studentClass: 3,

            },
            {
                id: 3,
                studentName: 'Мілюченко Андрій Андрійович'
            },
            {
                id: 4,
                studentName: 'Мілюченко Андрій Андрійович'
            },
            {
                id: 5,
                studentName: 'Мілюченко Андрій Андрійович'
            },
        ],
    },
    getters: {
        getStudentJournal: (state) => state.studentJournal,
    },
    actions: {

    },



})


export default store