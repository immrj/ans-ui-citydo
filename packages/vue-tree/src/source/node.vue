<template>
  <collapse-transition :appear="appear">
    <ul :class="classes">
      <li @contextmenu.stop="handleContextmenu(data, $event)" @selectstart.stop="handlePreventSelect(data, $event)">
        <span :class="arrowClasses" @click="handleExpand">
          <i v-if="showArrow" :class="libName + '-icon-arrow-right'"></i>
          <i v-if="showLoading" :class="libName + '-icon-spinner2'"></i>
        </span>
        <x-checkbox
            v-if="showCheckbox"
            :value="data.checked"
            :indeterminate="data.indeterminate"
            :disabled="data.disabled || data.disableCheckbox"
            @click.native.prevent="handleCheck"></x-checkbox>
        <span :class="titleClasses" @click="handleClickNode">
          <Render v-if="data.render" :render="data.render" :data="data" :node="node"></Render>
          <Render v-else-if="isParentRender" :render="parentRender" :data="data" :node="node"></Render>
          <template v-else>{{ data.title }}</template>
        </span>
        <div v-show="data.expand">
          <x-tree-node
              :appear="appearByClickArrow"
              v-for="(item, i) in children"
              :key="i"
              :data="item"
              :multiple="multiple"
              :show-checkbox="showCheckbox"
              :children-key="childrenKey">
          </x-tree-node>
        </div>
      </li>
    </ul>
  </collapse-transition>
</template>
<script>
import { xCheckbox } from '../../../vue-checkbox/src/index'
import Render from './render'
import CollapseTransition from './CollapseTransition'
import { LIB_NAME, emitter, findComponentUpward } from '../../../../src/util'

const prefixCls = `${LIB_NAME}-tree`

export default {
  name: 'xTreeNode',
  mixins: [emitter],
  inject: ['xTreeInstance'],
  components: { xCheckbox, CollapseTransition, Render },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      libName: LIB_NAME,
      prefixCls: prefixCls,
      appearByClickArrow: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}-children`
      ]
    },
    selectedCls () {
      return [
        {
          [`${prefixCls}-node-selected`]: this.data.selected
        }
      ]
    },
    arrowClasses () {
      return [
        `${prefixCls}-arrow`,
        {
          [`${prefixCls}-arrow-disabled`]: this.data.disabled,
          [`${prefixCls}-arrow-open`]: this.data.expand
        }
      ]
    },
    titleClasses () {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-selected`]: this.data.selected
        }
      ]
    },
    showArrow () {
      return (this.data[this.childrenKey] && this.data[this.childrenKey].length) || ('loading' in this.data && !this.data.loading)
    },
    showLoading () {
      return 'loading' in this.data && this.data.loading
    },
    isParentRender () {
      const Tree = findComponentUpward(this, 'xTree')
      return Tree && Tree.render
    },
    parentRender () {
      const Tree = findComponentUpward(this, 'xTree')
      if (Tree && Tree.render) {
        return Tree.render
      } else {
        return null
      }
    },
    node () {
      const Tree = findComponentUpward(this, 'xTree')
      if (Tree) {
        // 将所有的 node（即flatState）和当前 node 都传递
        return [Tree.flatState, Tree.flatState.find(item => item.nodeKey === this.data.nodeKey)]
      } else {
        return []
      }
    },
    children () {
      return this.data[this.childrenKey]
    }
  },
  methods: {
    handleExpand () {
      const item = this.data
      // if (item.disabled) return;

      // Vue.js 2.6.9 对 transition 的 appear 进行了调整，导致 iView 初始化时无动画，加此方法来判断通过点击箭头展开时，加 appear，否则初始渲染时 appear 为 false
      this.appearByClickArrow = true

      // async loading
      if (item[this.childrenKey].length === 0) {
        const tree = findComponentUpward(this, 'xTree')
        if (tree && tree.loadData) {
          this.$set(this.data, 'loading', true)
          tree.loadData(item, children => {
            this.$set(this.data, 'loading', false)
            if (children.length) {
              this.$set(this.data, this.childrenKey, children)
              this.$nextTick(() => this.handleExpand())
            }
          })
          return
        }
      }

      if (item[this.childrenKey] && item[this.childrenKey].length) {
        this.$set(this.data, 'expand', !this.data.expand)
        this.dispatch('xTree', 'toggle-expand', this.data)
      }
    },
    handleClickNode () {
      if (this.xTreeInstance.expandNode) {
        if (this.showArrow) this.handleExpand()
      } else if (this.xTreeInstance.selectNode) {
        this.handleSelect()
      }
    },
    handleSelect () {
      if (this.data.disabled) return
      if (this.xTreeInstance.showCheckbox && this.xTreeInstance.checkDirectly) {
        this.handleCheck()
      } else {
        this.dispatch('xTree', 'on-selected', this.data.nodeKey)
      }
    },
    handleCheck () {
      if (this.data.disabled) return
      const changes = {
        checked: !this.data.checked && !this.data.indeterminate,
        nodeKey: this.data.nodeKey
      }
      this.dispatch('xTree', 'on-check', changes)
    },
    handleContextmenu (data, event) {
      if (data.contextmenu) {
        event.preventDefault()
        this.dispatch('xTree', 'contextmenu', { data, event })
      }
    },
    handlePreventSelect (data, event) {
      if (data.contextmenu) {
        event.preventDefault()
      }
    }
  }
}
</script>
