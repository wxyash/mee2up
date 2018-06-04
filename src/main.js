import Vue from 'vue'
import App from './App'
import {router} from './router/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from  'firebase'
import fireConfig from './firebaseConfig.js'
firebase.initializeApp(fireConfig);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
