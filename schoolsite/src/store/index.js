import { createStore } from 'vuex';
import axios from 'axios';

const store = new createStore({
    state: {
        studentJournal: [],
        authStatus: JSON.parse(localStorage.getItem("isAuth")) ?? false,
        userRole: JSON.parse(localStorage.getItem("Roles")) ?? "",
        authError: ''
    },
    getters: {
        getStudentJournal: (state) => state.studentJournal,
        getAuthStatus: ({ authStatus }) => authStatus,
        getUserRole: ({userRole}) => userRole[1] || userRole[0],
        getAuthError: ({authError}) => authError
    },
    actions: {
        GET_STUDENTS_FROM_API({ commit }) {
            return axios('http://localhost:5000/student/getstudents', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_STUDENTS_TO_VUEX', response.data)
                })
        },
        IS_AUTH({ commit }, data) {
            commit('SET_AUTH_STATUS', data)
        },
        IS_AUTH_ERRORS({commit} , data){
            commit('AUTH_ERRORS' , data)
        },
        GET_NEW_MARKS({ commit }, data) {
            commit('SET_NEW_MARKS', data)
        },
        GET_NEW_USER({commit}, data){
            commit('SET_NEW_USER' ,data)
        }
       
    },
    mutations: {
        SET_STUDENTS_TO_VUEX(state, students) {
            state.studentJournal = students
        },
        SET_AUTH_STATUS(state, data) {
            localStorage.setItem('JWTtoken', data.token)
            state.authStatus = true
            state.userRole = data.roles
            localStorage.setItem('Roles',JSON.stringify(data.roles))
            localStorage.setItem('isAuth', true)
        },
        SET_NEW_MARKS(state, data) {
            const index = state.studentJournal.findIndex(student => student._id === data._id)
            state.studentJournal[index] = data
        },
        AUTH_ERRORS(state,data){
            state.authError = data.message
        },
        SET_NEW_USER(state, data){
            state.studentJournal.push(data)
        }
    }



})


export default store