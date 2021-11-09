import {createStore} from 'vuex';


const store = new createStore({
    state:{
        studentJournal: [
            {
                id: 1 ,
                studentName: 'Мілюченко Андрій Андрійович'
            },
            {
                id:2,
                studentName: 'Савчин Мирослав Володимирович'
            }
    ]
    },
    getters:{
        getStudentJournal: (state) => state.studentJournal
    }


})


export default store