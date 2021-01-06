<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <h5>value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。</h5>
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
      <h5>禁用某一项。</h5>
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
      <h5>通过设置属性 icon，可以显示一个图标。</h5>
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
      <h5>设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。</h5>
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
      <h5>设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。</h5>
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
      <h5>通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。</h5>
      <div>
        <x-tabs type="card" closable @on-tab-remove="handleTabRemove">
          <x-tab-pane label="标签一" v-if="tab0">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二" v-if="tab1">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三" v-if="tab2">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>自定义标签页</h4>
      <h5>设置 label 为 Render 函数后，可以自定义标签页的内容。</h5>
      <div>
        <x-tabs type="card">
          <x-tab-pane :label="label">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三">标签三的内容</x-tab-pane>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>附加内容 </h4>
      <h5>设置 slot extra 可以在页签右边添加附加操作。</h5>
      <div>
        <x-tabs type="card">
          <x-tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</x-tab-pane>
          <x-button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</x-button>
        </x-tabs>
      </div>
    </section>
    <section class="demo-section">
      <h4>不使用动画 </h4>
      <h5>通过设置属性 animated 为 false 可以禁用动画。</h5>
      <div>
        <x-tabs :animated="false">
          <x-tab-pane label="标签一">标签一的内容</x-tab-pane>
          <x-tab-pane label="标签二">标签二的内容</x-tab-pane>
          <x-tab-pane label="标签三">标签三的内容</x-tab-pane>
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
    <section class="demo-section">
      <h4>拖拽调整页签顺序 </h4>
      <h5>开启属性 draggable，并配合事件 @on-drag-drop 可以实现拖拽调整页签顺序。</h5>
      <div>
        <x-tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
          <x-tab-pane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</x-tab-pane>
        </x-tabs>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      tabs: 2,
      tab0: true,
      tab1: true,
      tab2: true,
      label: (h) => {
        return h('div', [
          h('span', '标签一'),
          h('i', '123')
        ])
      },
      contextData: null,
      tabList: [
        {
          label: '标签一',
          name: 'name1'
        },
        {
          label: '标签二',
          name: 'name2'
        },
        {
          label: '标签三',
          name: 'name3'
        },
        {
          label: '标签四',
          name: 'name4'
        },
        {
          label: '标签五',
          name: 'name5'
        }
      ]
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    },
    handleTabsAdd () {
      this.tabs++
    },
    handleContextMenu (data) {
      this.contextData = data
    },
    handleContextMenuEdit () {
      this.$message.info('Click edit of ' + this.contextData.name)
    },
    handleContextMenuDelete () {
      this.$message.info('Click delete of ' + this.contextData.name)
    },
    handleDragDrop (name, newName, a, b, names) {
      // names 为调整后的 name 集合
      this.tabList.splice(b, 1, ...this.tabList.splice(a, 1, this.tabList[b]))
    }
  }
}
</script>

<style lang="scss"></style>
