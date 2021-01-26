import Vue from 'vue'
import App from './app.vue'
import { xTree } from '../src'

Vue.use(xTree)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    console.log('success')
  }
})
