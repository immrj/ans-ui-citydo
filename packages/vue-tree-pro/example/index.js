import Vue from 'vue'
import App from './app.vue'
import { xTreePro } from '../src'

Vue.use(xTreePro)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    console.log('success')
  }
})
