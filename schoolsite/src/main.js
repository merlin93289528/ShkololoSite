import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmdM23VyRVZKr3ESpxihy_oIXk44UmlmQ",
  authDomain: "school-journal-2455d.firebaseapp.com",
  projectId: "school-journal-2455d",
  storageBucket: "school-journal-2455d.appspot.com",
  messagingSenderId: "765147568498",
  appId: "1:765147568498:web:a665421f3713e1626125eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createApp(App)
.use(app)
.use(VueAxios, axios)
.use(store)
.use(router)
.mount('#app')
