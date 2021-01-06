<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <h5>需要配合 x-dropdown-menu 和 x-dropdown-item 两个组件来使用，并且给列表设置具名 slot 为 list。触发对象可以是链接、按钮等各种元素。本例还展示了禁用项和分隔线。</h5>
      <div>
        <x-dropdown>
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
    <section class="demo-section">
      <h4>触发方式</h4>
      <h5>通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。</h5>
      <div>
        <x-dropdown>
          <a href="javascript:void(0)">
            hover 触发
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown trigger="click" style="margin-left: 20px">
          <a href="javascript:void(0)">
            click 触发
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown trigger="contextMenu" style="margin-left: 20px">
          <a href="javascript:void(0)">
            right click
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>返回</x-dropdown-item>
            <x-dropdown-item style="color: #ed4014">删除</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
          <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
              <x-button type="primary" @click="handleClose">关闭</x-button>
            </div>
          </x-dropdown-menu>
        </x-dropdown>
      </div>
    </section>
    <section class="demo-section">
      <h4>对齐方向</h4>
      <h5>通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</h5>
      <div>
        <x-dropdown placement="bottom-start">
          <a href="javascript:void(0)">
            菜单(左)
           <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown style="margin-left: 20px">
          <a href="javascript:void(0)">
            菜单(居中)
           <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
        <x-dropdown style="margin-left: 20px" placement="bottom-end">
          <a href="javascript:void(0)">
            菜单(右)
           <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
      </div>
    </section>
    <section class="demo-section">
      <h4>嵌套用法</h4>
      <h5>下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。嵌套用法不支持 transfer 属性。</h5>
      <div>
        <x-dropdown>
          <a href="javascript:void(0)">
            北京小吃
            <i class="ans-icon-arrow-down"></i>
          </a>
          <x-dropdown-menu slot="list">
            <x-dropdown-item>驴打滚</x-dropdown-item>
            <x-dropdown-item>炸酱面</x-dropdown-item>
            <x-dropdown-item>豆汁儿</x-dropdown-item>
            <x-dropdown placement="right-start">
              <x-dropdown-item>
                北京烤鸭
                <i class="ans-icon-arrow-right"></i>
              </x-dropdown-item>
              <x-dropdown-menu slot="list">
                <x-dropdown-item>挂炉烤鸭</x-dropdown-item>
                <x-dropdown-item>焖炉烤鸭</x-dropdown-item>
              </x-dropdown-menu>
            </x-dropdown>
            <x-dropdown-item>冰糖葫芦</x-dropdown-item>
          </x-dropdown-menu>
        </x-dropdown>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      visible: false
    }
  },
  watch: {
  },
  methods: {
    handleOpen () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss"></style>
