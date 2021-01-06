<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <div>
        <x-dropdown trigger="click">
          <a href="javascript:void(0)">
            下拉菜单
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item disabled>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item divided>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown style="margin-left: 20px">
          <x-button type="primary">
            下拉菜单
            <i class="ans-icon-arrow-down"></i>
          </x-button>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item disabled>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item divided>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
      </div>
    </section>
  </div>
</template>

<script>
import { xDropdown, xDropdownMenu, xDropdownItem } from '../src'
import { xButton } from '../../vue-button/src'

export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {},
  components: { xDropdown, xDropdownMenu, xDropdownItem, xButton }
}
</script>

<style lang="scss"></style>
