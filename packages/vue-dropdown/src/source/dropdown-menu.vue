<template>
    <ul :class="[libName + '-dropdown-menu']"><slot></slot></ul>
</template>
<script>
import { LIB_NAME } from '../../../../src/util'
export default {
  name: 'xDropdownMenu',
  data () {
    return {
      libName: LIB_NAME
    }
  }
}
</script>
