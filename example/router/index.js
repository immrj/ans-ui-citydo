import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/icon', name: 'icon', component: () => import('../pages/icon/icon') },
    { path: '/spin', name: 'spin', component: () => import('../pages/spin/spin') },
    { path: '/switch', name: 'switch', component: () => import('../pages/switch/switch') },
    { path: '/radio', name: 'radio', component: () => import('../pages/radio/radio') },
    { path: '/pagination', name: 'pagination', component: () => import('../pages/pagination/pagination') },
    { path: '/checkbox', name: 'checkbox', component: () => import('../pages/checkbox/checkbox') },
    { path: '/button', name: 'button', component: () => import('../pages/button/button') },
    { path: '/tooltip', name: 'tooltip', component: () => import('../pages/tooltip/tooltip') },
    { path: '/input', name: 'input', component: () => import('../pages/input/input') },
    { path: '/select', name: 'select', component: () => import('../pages/select/select') },
    { path: '/box', name: 'box', component: () => import('../pages/box/box') },
    { path: '/datepicker', name: 'datepicker', component: () => import('../pages/datepicker/datepicker') },
    { path: '/timepicker', name: 'timepicker', component: () => import('../pages/timepicker/timepicker') },
    { path: '/poptip', name: 'poptip', component: () => import('../pages/poptip/poptip') },
    { path: '/progress', name: 'progress', component: () => import('../pages/progress/progress') },
    { path: '/cascader', name: 'cascader', component: () => import('../pages/cascader/cascader') },
    { path: '/drawer', name: 'drawer', component: () => import('../pages/drawer/drawer') },
    { path: '/table', name: 'table', component: () => import('../pages/table/table') },
    { path: '/form', name: 'form', component: () => import('../pages/form/form') },
    { path: '/steps', name: 'steps', component: () => import('../pages/steps/steps') },
    { path: '/dropdown', name: 'dropdown', component: () => import('../pages/dropdown/dropdown') },
    { path: '/tabs', name: 'tabs', component: () => import('../pages/tabs/tabs') },
    { path: '/badge', name: 'badge', component: () => import('../pages/badge/badge') },
    { path: '/split', name: 'split', component: () => import('../pages/split/split') },
    { path: '/grid', name: 'grid', component: () => import('../pages/grid/grid') },
    { path: '/tree', name: 'tree', component: () => import('../pages/tree/tree') },
    { path: '/collapse', name: 'collapse', component: () => import('../pages/collapse/collapse') },
    { path: '/tree-pro', name: 'collapse', component: () => import('../pages/tree-pro/tree') },

  ]
})

export default router
