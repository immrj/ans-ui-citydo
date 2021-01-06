<template>
    <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
import { LIB_NAME, findComponentUpward } from '../../../../src/util'

const prefixCls = `${LIB_NAME}-dropdown-item`

export default {
  name: 'xDropdownItem',
  props: {
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-selected`]: this.selected,
          [`${prefixCls}-divided`]: this.divided
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      const $parent = findComponentUpward(this, 'xDropdown')
      const hasChildren = this.$parent && this.$parent.$options.name === 'xDropdown'

      if (hasChildren) {
        this.$parent.$emit('on-haschild-click')
      } else {
        if ($parent && $parent.$options.name === 'xDropdown') {
          $parent.$emit('on-hover-click')
        }
      }
      $parent.$emit('on-click', this.name)
    }
  }
}
</script>
