<template>
    <div :class="prefixCls" v-show="show" :style="contentStyle"><slot></slot></div>
</template>
<script>
import { LIB_NAME } from '../../../../src/util'
const prefixCls = `${LIB_NAME}-tabs-tabpane`

export default {
  name: 'xTabPane',
  inject: ['xTabsInstance'],
  props: {
    name: {
      type: String
    },
    label: {
      type: [String, Function],
      default: ''
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: null
    },
    // Tabs 嵌套时，用 tab 区分层级，指向对应的 Tabs 的 name
    tab: {
      type: String
    },
    // 在 xTabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序
    // 数值需大于 0
    index: {
      type: Number
    },
    // 4.3.0
    contextMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      show: true,
      currentName: this.name
    }
  },
  computed: {
    contentStyle () {
      return {
        visibility: this.xTabsInstance.activeKey !== this.currentName ? 'hidden' : 'visible'
      }
    }
  },
  methods: {
    updateNav () {
      this.xTabsInstance.updateNav()
    }
  },
  watch: {
    name (val) {
      this.currentName = val
      this.updateNav()
    },
    label () {
      this.updateNav()
    },
    icon () {
      this.updateNav()
    },
    disabled () {
      this.updateNav()
    }
  },
  mounted () {
    this.updateNav()
  },
  destroyed () {
    this.updateNav()
  }
}
</script>
