import Vue from 'vue'
import App from './App.vue'
import VueConfetti from 'vue-confetti'
Vue.use(VueConfetti)
// global.fireworks = fireworks
// global.$ = fireworks
// window.$ = window.fireworks = require('fireworks')

// Vue.use(fireworks)

// import fireworks from '../src/jquery.fireworks.js'
// import jquery from 'jquery'
// window.$ = window.jQuery = require('jquery')

// global.jquery = jquery
// global.$ = jquery

// import jquery from 'jQuery'

Vue.config.productionTip = false
// Vue.use(fireworks)
new Vue({
  render: h => h(App)
}).$mount('#app')
