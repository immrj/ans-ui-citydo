<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <div>
        <x-tabs value="name1">
          <x-tab-pane label="标签一" name="name1">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" name="name2">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" name="name3">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>禁用</h4>
      <div>
        <x-tabs>
          <x-tab-pane label="标签一">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" disabled>标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>图标</h4>
      <div>
        <x-tabs>
          <x-tab-pane label="标签一" icon="home-empty">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" icon="folder-empty">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" icon="database">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>迷你型</h4>
      <div>
        <x-tabs size="small">
          <x-tab-pane label="标签一" icon="home-empty">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" icon="folder-empty">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" icon="database">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>卡片样式</h4>
      <div>
        <x-tabs type="card">
          <x-tab-pane label="标签一">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>可关闭</h4>
      <div>
        <x-tabs type="card" closable @on-tab-remove="handleTabRemove">
          <x-tab-pane label="标签一" v-if="tab0">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" v-if="tab1">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" v-if="tab2">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>右键菜单 </h4>
      <h5>TabPane 开启属性 context-menu，可以配合 slot contextMenu 实现点击右键弹出菜单。</h5>
      <div>
        <x-tabs type="card" @on-contextmenu="handleContextMenu">
          <x-tab-pane label="标签一" name="tab1" context-menu>标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" name="tab2" context-menu>标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" name="tab3" context-menu>标签三的内容</x-tab-pane>
          <template slot="contextMenu">
            <x-dropdown-item @click.native="handleContextMenuEdit">编辑</x-dropdown-item>
            <x-dropdown-item @click.native="handleContextMenuDelete" style="color: #ed4014">删除</x-dropdown-item>
          </template>
        </x-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import { xTabPane, xTabs } from '../src'
import { xDropdownItem } from '../../vue-dropdown/src/index'

export default {
  name: 'app',
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    },
    handleContextMenu (data) {
      this.contextData = data
    },
    handleContextMenuEdit () {
      console.log('Click edit of ' + this.contextData.name)
    },
    handleContextMenuDelete () {
      console.log('Click delete of ' + this.contextData.name)
    }
  },
  components: { xTabPane, xTabs, xDropdownItem }
}
</script>

<style lang="scss"></style>
