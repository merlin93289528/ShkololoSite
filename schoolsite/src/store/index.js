import { createStore } from 'vuex';
import axios from 'axios';

const store = new createStore({
    state: {
        studentJournal: [],
        authStatus: localStorage.getItem("isAuth") ?? false,
        userRole: JSON.parse(localStorage.getItem("Roles"))
    },
    getters: {
        getStudentJournal: (state) => state.studentJournal,
        getAuthStatus: ({ authStatus }) => authStatus
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
        GET_NEW_MARKS({ commit }, data) {
            commit('SET_NEW_MARKS', data)
        },
        GET_USER_ROLE({ commit }) {
            return axios('http://localhost:5000/auth/getroles', {
                method: 'GET'
            }).then((response) => {
                commit('SET_ROLES_TO_VUEX', response.data)
            })
        }
    },
    mutations: {
        SET_STUDENTS_TO_VUEX(state, students) {
            state.studentJournal = students
        },
        SET_AUTH_STATUS(state, token) {
            localStorage.setItem('JWTtoken', token)
            state.authStatus = true
            localStorage.setItem('isAuth', true)
        },
        SET_NEW_MARKS(state, data) {
            const index = state.studentJournal.findIndex(student => student._id === data._id)
            state.studentJournal[index] = data
        },
        SET_ROLES_TO_VUEX(state, roles) {
            state.userRole = roles
            localStorage.setItem('Roles', roles)
        }
    }



})


export default store