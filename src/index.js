import { xMessage, xModal, xNotice } from '../packages/vue-box/src'
import { xRadio, xRadioGroup } from '../packages/vue-radio/src'
import { xButton, xButtonGroup } from '../packages/vue-button/src'
import { xCheckbox, xCheckboxGroup } from '../packages/vue-checkbox/src'
import { xSpin } from '../packages/vue-spin/src'
import { xPage } from '../packages/vue-pagination/src'
import { xTooltip } from '../packages/vue-tooltip/src'
import { xInput } from '../packages/vue-input/src'
import { xCascader } from '../packages/vue-cascader/src'
import { xSwitch } from '../packages/vue-switch/src'
import { xDatepicker } from '../packages/vue-datepicker/src'
import { xTimepicker } from '../packages/vue-timepicker/src'
import { xSelect, xOption, xOptionGroup } from '../packages/vue-select/src'
import { xPoptip } from '../packages/vue-poptip/src'
import { xProgress } from '../packages/vue-progress/src'
import { xDrawer } from '../packages/vue-drawer/src'
import { xTable, xTableColumn } from '../packages/vue-table/src'
import { xForm, xFormItem } from '../packages/vue-form/src'
import { xSteps, xStep } from '../packages/vue-steps/src'
import { xDropdown, xDropdownMenu, xDropdownItem } from '../packages/vue-dropdown/src'
import { xTabs, xTabPane } from '../packages/vue-tabs/src'
import { xBadge } from '../packages/vue-badge/src'
import { xSplit } from '../packages/vue-split/src'
import { xRow, xCol } from '../packages/vue-grid/src'
import { xTree } from '../packages/vue-tree/src'
import locale from './locale'

import './style/index.scss'

const install = (Vue, config = {}) => {
  if (install.installed) return

  locale.use(config.locale)
  locale.i18n(config.i18n)

  Vue.component(xRadio.name, xRadio)
  Vue.component(xRadioGroup.name, xRadioGroup)
  Vue.component(xButton.name, xButton)
  Vue.component(xButtonGroup.name, xButtonGroup)
  Vue.component(xCheckbox.name, xCheckbox)
  Vue.component(xCheckboxGroup.name, xCheckboxGroup)
  Vue.component(xPage.name, xPage)
  Vue.component(xInput.name, xInput)
  Vue.component(xCascader.name, xCascader)
  Vue.component(xSwitch.name, xSwitch)
  Vue.component(xDatepicker.name, xDatepicker)
  Vue.component(xTimepicker.name, xTimepicker)
  Vue.component(xSelect.name, xSelect)
  Vue.component(xOption.name, xOption)
  Vue.component(xOptionGroup.name, xOptionGroup)
  Vue.component(xPoptip.name, xPoptip)
  Vue.component(xProgress.name, xProgress)
  Vue.component(xTable.name, xTable)
  Vue.component(xTableColumn.name, xTableColumn)
  Vue.component(xForm.name, xForm)
  Vue.component(xFormItem.name, xFormItem)
  Vue.component(xSteps.name, xSteps)
  Vue.component(xStep.name, xStep)
  Vue.component(xDropdown.name, xDropdown)
  Vue.component(xDropdownMenu.name, xDropdownMenu)
  Vue.component(xDropdownItem.name, xDropdownItem)
  Vue.component(xTabPane.name, xTabPane)
  Vue.component(xTabs.name, xTabs)
  Vue.component(xBadge.name, xBadge)
  Vue.component(xSplit.name, xSplit)
  Vue.component(xRow.name, xRow)
  Vue.component(xCol.name, xCol)
  Vue.component(xTree.name, xTree)

  let { message, notice, modal, spin = {}, slotI18n } = config

  if (slotI18n) {
    message = Object.assign({}, message, { i18n: slotI18n })
    notice = Object.assign({}, notice, { i18n: slotI18n })
    modal = Object.assign({}, modal, { i18n: slotI18n })
  }

  xMessage.config(message)
  xNotice.config(notice)
  xModal.config(modal)

  Vue.$message = Vue.prototype.$message = xMessage
  Vue.$modal = Vue.prototype.$modal = xModal
  Vue.$notice = Vue.prototype.$notice = xNotice
  Vue.$drawer = Vue.prototype.$drawer = xDrawer

  Vue.directive('poptip', xPoptip.directive)
  Vue.use(xTooltip)
  Vue.use(xSpin, spin)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  locale: locale.use,
  i18n: locale.i18n,
  install,
  xRadio,
  xRadioGroup,
  xButton,
  xButtonGroup,
  xCheckbox,
  xCheckboxGroup,
  xSpin,
  xPage,
  xTooltip,
  xInput,
  xCascader,
  xSwitch,
  xDatepicker,
  xTimepicker,
  xSelect,
  xOption,
  xOptionGroup,
  xMessage,
  xNotice,
  xModal,
  xDrawer,
  xPoptip,
  xProgress,
  xTable,
  xTableColumn,
  xForm,
  xFormItem,
  xSteps,
  xStep,
  xDropdown,
  xDropdownMenu,
  xDropdownItem,
  xTabs,
  xTabPane,
  xBadge,
  xSplit,
  xRow,
  xCol,
  xTree
}
