<template>
    <div :class="classes" ref="tabsWrap">
        <div :class="[prefixCls + '-bar']">
            <div :class="[prefixCls + '-nav-right']" v-if="showSlot"><slot name="extra"></slot></div>
            <div
                :class="[prefixCls + '-nav-container']"
                tabindex="0"
                ref="navContainer"
                @keydown="handleTabKeyNavigation"
                @keydown.space.prevent="handleTabKeyboardSelect(false)"
            >
                <div ref="navWrap" :class="[prefixCls + '-nav-wrap', scrollable ? prefixCls + '-nav-scrollable' : '']">
                    <span :class="[prefixCls + '-nav-prev', scrollable ? '' : prefixCls + '-nav-scroll-disabled']" @click="scrollPrev"><i :class="[libName + '-icon-arrow-left']"></i></span>
                    <span :class="[prefixCls + '-nav-next', scrollable ? '' : prefixCls + '-nav-scroll-disabled']" @click="scrollNext"><i :class="[libName + '-icon-arrow-right']"></i></span>
                    <div ref="navScroll" :class="[prefixCls + '-nav-scroll']" @DOMMouseScroll="handleScroll" @mousewheel="handleScroll">
                        <div ref="nav" :class="[prefixCls + '-nav']" :style="navStyle">
                            <div :class="barClasses" :style="barStyle"></div>
                            <div
                                :class="tabCls(item)"
                                v-for="(item, index) in navList"
                                @click="handleChange(index)"
                                @dblclick="handleDblclick(index)"
                                @contextmenu.stop="handleContextmenu(index, $event)"
                                @selectstart.stop="handlePreventSelect(index, $event)"
                                :draggable="draggable"
                                @dragstart="handleDrag(index, $event)"
                                @drop="handleDrop(index, $event)"
                                @dragover.prevent
                            >
                                <i v-if="item.icon !== ''" :class="[libName + '-icon-' + item.icon]"></i>
                                <Render v-if="item.labelType === 'function'" :render="item.label"></Render>
                                <template v-else>{{ item.label }}</template>
                                <i :class="[prefixCls + '-close', libName + '-icon-close']" v-if="showClose(item)" @click.stop="handleRemove(item, index)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="contentClasses" :style="contentStyle" ref="panes"><slot></slot></div>
        <div :class="prefixCls + '-context-menu'" :style="contextMenuStyles">
            <x-dropdown trigger="custom" :visible="contextMenuVisible" transfer @on-clickoutside="handleClickContextMenuOutside">
                <x-dropdown-menu slot="list">
                    <slot name="contextMenu"></slot>
                </x-dropdown-menu>
            </x-dropdown>
        </div>
    </div>
</template>
<script>
import { xDropdown, xDropdownMenu } from '../../../vue-dropdown/src/index'
import { LIB_NAME, emitter, oneOf, MutationObserver, findComponentsDownward, Render } from '../../../../src/util'
import elementResizeDetectorMaker from 'element-resize-detector'

const prefixCls = `${LIB_NAME}-tabs`
const transitionTime = 300 // from CSS

const getNextTab = (list, activeKey, direction, countDisabledAlso) => {
  const currentIndex = list.findIndex(tab => tab.name === activeKey)
  const nextIndex = (currentIndex + direction + list.length) % list.length
  const nextTab = list[nextIndex]
  if (nextTab.disabled) return getNextTab(list, nextTab.name, direction, countDisabledAlso)
  else return nextTab
}

const focusFirst = (element, root) => {
  try { element.focus() } catch (err) {} // eslint-disable-line no-empty

  if (document.activeElement == element && element !== root) return true

  const candidates = element.children
  for (const candidate of candidates) {
    if (focusFirst(candidate, root)) return true
  }
  return false
}

export default {
  name: 'xTabs',
  mixins: [emitter],
  components: { Render, xDropdownMenu, xDropdown },
  provide () {
    return { xTabsInstance: this }
  },
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      validator (value) {
        return oneOf(value, ['line', 'card'])
      },
      default: 'line'
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'default'])
      },
      default: 'default'
    },
    animated: {
      type: Boolean,
      default: true
    },
    captureFocus: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    beforeRemove: Function,
    // xTabs 嵌套时，用 name 区分层级
    name: {
      type: String
    },
    // 4.3.0
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      libName: LIB_NAME,
      prefixCls: prefixCls,
      navList: [],
      barWidth: 0,
      barOffset: 0,
      activeKey: this.value,
      focusedKey: this.value,
      showSlot: false,
      navStyle: {
        transform: ''
      },
      scrollable: false,
      transitioning: false,
      contextMenuVisible: false,
      contextMenuStyles: {
        top: 0,
        left: 0
      }
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-card`]: this.type === 'card',
          [`${prefixCls}-mini`]: this.size === 'small' && this.type === 'line',
          [`${prefixCls}-no-animation`]: !this.animated
        }
      ]
    },
    contentClasses () {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-animated`]: this.animated
        }
      ]
    },
    barClasses () {
      return [
        `${prefixCls}-ink-bar`,
        {
          [`${prefixCls}-ink-bar-animated`]: this.animated
        }
      ]
    },
    contentStyle () {
      const x = this.getTabIndex(this.activeKey)
      const p = x === 0 ? '0%' : `-${x}00%`

      let style = {}
      if (x > -1) {
        style = {
          transform: `translateX(${p}) translateZ(0px)`
        }
      }
      return style
    },
    barStyle () {
      const style = {
        visibility: 'hidden',
        width: `${this.barWidth}px`
      }
      if (this.type === 'line') style.visibility = 'visible'
      if (this.animated) {
        style.transform = `translate3d(${this.barOffset}px, 0px, 0px)`
      } else {
        style.left = `${this.barOffset}px`
      }

      return style
    },
    // 3.4.0, global setting customArrow 有值时，arrow 赋值空
    arrowType () {
      // let type = `${LIB_NAME}-icon-close`

      // if (this.$IVIEW) {
      //   if (this.$IVIEW.tabs.customCloseIcon) {
      //     type = ''
      //   } else if (this.$IVIEW.tabs.closeIcon) {
      //     type = this.$IVIEW.tabs.closeIcon
      //   }
      // }
      return `${LIB_NAME}-icon-close`
    },
    // 3.4.0, global setting
    customArrowType () {
      // let type = ''

      // if (this.$IVIEW) {
      //   if (this.$IVIEW.tabs.customCloseIcon) {
      //     type = this.$IVIEW.tabs.customCloseIcon
      //   }
      // }
      return ''
    },
    // 3.4.0, global setting
    arrowSize () {
      // let size = ''
      //
      // if (this.$IVIEW) {
      //   if (this.$IVIEW.tabs.closeIconSize) {
      //     size = this.$IVIEW.tabs.closeIconSize
      //   }
      // }
      return ''
    }
  },
  methods: {
    getTabs () {
      // return this.$children.filter(item => item.$options.name === 'TabPane');
      const AllTabPanes = findComponentsDownward(this, 'xTabPane')
      const TabPanes = []

      AllTabPanes.forEach(item => {
        if (item.tab && this.name) {
          if (item.tab === this.name) {
            TabPanes.push(item)
          }
        } else {
          TabPanes.push(item)
        }
      })

      // 在 xTabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序
      TabPanes.sort((a, b) => {
        if (a.index && b.index) {
          return a.index > b.index ? 1 : -1
        }
      })
      return TabPanes
    },
    updateNav () {
      this.navList = []
      this.getTabs().forEach((pane, index) => {
        this.navList.push({
          labelType: typeof pane.label,
          label: pane.label,
          icon: pane.icon || '',
          name: pane.currentName || index,
          disabled: pane.disabled,
          closable: pane.closable,
          contextMenu: pane.contextMenu
        })
        if (!pane.currentName) pane.currentName = index
        if (index === 0) {
          if (!this.activeKey) this.activeKey = pane.currentName || index
        }
      })
      this.updateStatus()
      this.updateBar()
    },
    updateBar () {
      this.$nextTick(() => {
        const index = this.getTabIndex(this.activeKey)
        if (!this.$refs.nav) return // 页面销毁时，这里会报错，为了解决 #2100
        const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`)
        const tab = prevTabs[index]
        this.barWidth = tab ? parseFloat(tab.offsetWidth) : 0

        if (index > 0) {
          let offset = 0
          const gutter = this.size === 'small' ? 0 : 16
          for (let i = 0; i < index; i++) {
            offset += parseFloat(prevTabs[i].offsetWidth) + gutter
          }

          this.barOffset = offset
        } else {
          this.barOffset = 0
        }
        this.updateNavScroll()
      })
    },
    updateStatus () {
      const tabs = this.getTabs()
      tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey) || this.animated)
    },
    tabCls (item) {
      return [
        `${prefixCls}-tab`,
        {
          [`${prefixCls}-tab-disabled`]: item.disabled,
          [`${prefixCls}-tab-active`]: item.name === this.activeKey,
          [`${prefixCls}-tab-focused`]: item.name === this.focusedKey
        }
      ]
    },
    handleChange (index) {
      if (this.transitioning) return

      this.transitioning = true
      setTimeout(() => this.transitioning = false, transitionTime)

      const nav = this.navList[index]
      if (!nav || nav.disabled) return
      this.activeKey = nav.name
      this.$emit('input', nav.name)
      this.$emit('on-click', nav.name)
    },
    handleDblclick (index) {
      const nav = this.navList[index]
      if (!nav || nav.disabled) return
      this.$emit('on-dblclick', nav.name)
    },
    handleContextmenu (index, event) {
      if (this.contextMenuVisible) this.handleClickContextMenuOutside()
      this.$nextTick(() => {
        const nav = this.navList[index]
        if (!nav || nav.disabled || !nav.contextMenu) return

        event.preventDefault()
        const $TabsWrap = this.$refs.tabsWrap
        const TabsBounding = $TabsWrap.getBoundingClientRect()
        const position = {
          left: `${event.clientX - TabsBounding.left}px`,
          top: `${event.clientY - TabsBounding.top}px`
        }
        this.contextMenuStyles = position
        this.contextMenuVisible = true
        this.$emit('on-contextmenu', nav, event, position)
      })
    },
    handleClickContextMenuOutside () {
      this.contextMenuVisible = false
    },
    // 禁用右键选择文本
    handlePreventSelect (index, event) {
      const nav = this.navList[index]
      if (!nav || nav.disabled || !nav.contextMenu) return

      event.preventDefault()
    },
    handleTabKeyNavigation (e) {
      if (e.keyCode !== 37 && e.keyCode !== 39) return
      const direction = e.keyCode === 39 ? 1 : -1
      const nextTab = getNextTab(this.navList, this.focusedKey, direction)
      this.focusedKey = nextTab.name
    },
    handleTabKeyboardSelect (init = false) {
      if (init) return
      const focused = this.focusedKey || 0
      const index = this.getTabIndex(focused)
      this.handleChange(index)
    },
    handleRemove (item, index) {
      if (!this.beforeRemove) {
        return this.handleRemoveTab(index)
      }

      const before = this.beforeRemove(item, index)

      if (before && before.then) {
        before.then(() => {
          this.handleRemoveTab(index)
        })
      } else {
        this.handleRemoveTab(index)
      }
    },
    handleRemoveTab (index) {
      const tabs = this.getTabs()
      const tab = tabs[index]
      tab.$destroy()

      if (tab.currentName === this.activeKey) {
        const newTabs = this.getTabs()
        let activeKey = -1

        if (newTabs.length) {
          const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index)
          const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index)

          if (rightNoDisabledTabs.length) {
            activeKey = rightNoDisabledTabs[0].currentName
          } else if (leftNoDisabledTabs.length) {
            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].currentName
          } else {
            activeKey = newTabs[0].currentName
          }
        }
        this.activeKey = activeKey
        this.$emit('input', activeKey)
      }
      this.$emit('on-tab-remove', tab.currentName)
      this.updateNav()
    },
    showClose (item) {
      if (this.type === 'card') {
        if (item.closable !== null) {
          return item.closable
        } else {
          return this.closable
        }
      } else {
        return false
      }
    },
    scrollPrev () {
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()

      if (!currentOffset) return

      const newOffset = currentOffset > containerWidth
        ? currentOffset - containerWidth
        : 0

      this.setOffset(newOffset)
    },
    scrollNext () {
      const navWidth = this.$refs.nav.offsetWidth
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()
      if (navWidth - currentOffset <= containerWidth) return

      const newOffset = navWidth - currentOffset > containerWidth * 2
        ? currentOffset + containerWidth
        : (navWidth - containerWidth)

      this.setOffset(newOffset)
    },
    getCurrentScrollOffset () {
      const { navStyle } = this
      return navStyle.transform
        ? Number(navStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
        : 0
    },
    getTabIndex (name) {
      return this.navList.findIndex(nav => nav.name === name)
    },
    setOffset (value) {
      this.navStyle.transform = `translateX(-${value}px)`
    },
    scrollToActiveTab () {
      if (!this.scrollable) return
      const nav = this.$refs.nav
      const activeTab = this.$el.querySelector(`.${prefixCls}-tab-active`)
      if (!activeTab) return

      const navScroll = this.$refs.navScroll
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const navBounding = nav.getBoundingClientRect()
      const currentOffset = this.getCurrentScrollOffset()
      let newOffset = currentOffset

      if (navBounding.right < navScrollBounding.right) {
        newOffset = nav.offsetWidth - navScrollBounding.width
      }

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
      } else if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
      }

      if (currentOffset !== newOffset) {
        this.setOffset(Math.max(newOffset, 0))
      }
    },
    updateNavScroll () {
      const navWidth = this.$refs.nav.offsetWidth
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()
      if (containerWidth < navWidth) {
        this.scrollable = true
        if (navWidth - currentOffset < containerWidth) {
          this.setOffset(navWidth - containerWidth)
        }
      } else {
        this.scrollable = false
        if (currentOffset > 0) {
          this.setOffset(0)
        }
      }
    },
    handleScroll (e) {
      e.preventDefault()
      e.stopPropagation()
      const type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      if (delta > 0) {
        this.scrollPrev()
      } else {
        this.scrollNext()
      }
    },
    handleResize () {
      this.updateNavScroll()
    },
    isInsideHiddenElement () {
      let parentNode = this.$el.parentNode
      while (parentNode && parentNode !== document.body) {
        if (parentNode.style && parentNode.style.display === 'none') {
          return parentNode
        }
        parentNode = parentNode.parentNode
      }
      return false
    },
    updateVisibility (index) {
      [...this.$refs.panes.querySelectorAll(`.${prefixCls}-tabpane`)].forEach((el, i) => {
        if (index === i) {
          [...el.children].filter(child => child && child.classList.contains(`${prefixCls}-tabpane`)).forEach(child => {
            if (child && child.style) {
              child.style.visibility = 'visible'
            }
          })
          if (this.captureFocus) setTimeout(() => focusFirst(el, el), transitionTime)
        } else {
          setTimeout(() => {
            [...el.children].filter(child => child && child.classList.contains(`${prefixCls}-tabpane`)).forEach(child => {
              if (child && child.style) {
                child.style.visibility = 'hidden'
              }
            })
          }, transitionTime)
        }
      })
    },
    // 拖拽
    handleDrag (index, event) {
      const nav = this.navList[index]
      if (nav) {
        event.dataTransfer.setData('tab-name', nav.name)
      }
    },
    handleDrop (index, event) {
      const nav = this.navList[index]
      if (nav) {
        const dragName = event.dataTransfer.getData('tab-name')
        event.preventDefault()

        const navNames = this.navList.map(item => item.name)
        const a = parseInt(navNames.findIndex(item => item === dragName))
        const b = parseInt(navNames.findIndex(item => item === nav.name))
        navNames.splice(b, 1, ...navNames.splice(a, 1, navNames[b]))
        this.$emit('on-drag-drop', dragName, nav.name, a, b, navNames)
      }
    }
  },
  watch: {
    value (val) {
      this.activeKey = val
      this.focusedKey = val
    },
    activeKey (val) {
      this.focusedKey = val
      this.updateBar()
      this.updateStatus()
      this.broadcast('Table', 'on-visible-change', true)
      this.$nextTick(() => {
        this.scrollToActiveTab()
      })

      // update visibility
      const nextIndex = Math.max(this.getTabIndex(this.focusedKey), 0)
      this.updateVisibility(nextIndex)
    }
  },
  mounted () {
    this.showSlot = this.$slots.extra !== undefined
    this.observer = elementResizeDetectorMaker()
    this.observer.listenTo(this.$refs.navWrap, this.handleResize)

    const hiddenParentNode = this.isInsideHiddenElement()
    if (hiddenParentNode) {
      this.mutationObserver = new MutationObserver(() => {
        if (hiddenParentNode.style.display !== 'none') {
          this.updateBar()
          this.mutationObserver.disconnect()
        }
      })

      this.mutationObserver.observe(hiddenParentNode, { attributes: true, childList: true, characterData: true, attributeFilter: ['style'] })
    }

    this.handleTabKeyboardSelect(true)
    this.updateVisibility(this.getTabIndex(this.activeKey))
  },
  beforeDestroy () {
    this.observer.removeListener(this.$refs.navWrap, this.handleResize)
    if (this.mutationObserver) this.mutationObserver.disconnect()
  }
}
</script>
