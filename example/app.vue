<template>
  <div class="wrapper">
    <h2 class="h2">Hello analysys</h2>
    <div class="compo-list">
      <ul class="compo-ul">
        <li v-for="(item, i) in componentsList" :key="i">
          <router-link :to="'/'+item" active-class="active">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      componentsList: [
        'icon',
        'spin',
        'switch',
        'tooltip',
        'button',
        'radio',
        'input',
        'checkbox',
        'pagination',
        'select',
        'box',
        'datepicker',
        'timepicker',
        'poptip',
        'progress',
        'cascader',
        'drawer',
        'table',
        'form',
        'steps',
        'dropdown',
        'tabs',
        'badge'
      ]
    }
  }
}
</script>
