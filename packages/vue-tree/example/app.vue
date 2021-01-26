<template>
  <div>
    <section class="demo-section">
      <h4>自定义节点内容 </h4>
      <h5>使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。<br/>
        Render 函数的第二个参数，包含三个字段：<br/>
        root &lt;Array&gt;：树的根节点<br/>
        node &lt;Object&gt;：当前节点<br/>
        data &lt;Object&gt;：当前节点的数据<br/>
        通过合理地使用 root、node 和 data 可以实现各种效果，其中，iView 给每个节点都设置了一个 nodeKey 字段，用来标识节点的 id。<br/>
        Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 render 传递；另一种是单独给某个节点设置，在该节点的 render
        字段内设置；同时设置时，会优先使用当前节点的 Render 函数。</h5>
      <div>
        <x-tree :data="data5" class="demo-tree-render" @on-contextmenu="handleContextMenu">
          <template slot="contextMenu">
            <x-dropdown-item @click.native="handleContextMenuEdit">编辑</x-dropdown-item>
            <x-dropdown-item @click.native="handleContextMenuDelete" style="color: #ed4014">删除</x-dropdown-item>
          </template>
        </x-tree>
      </div>
    </section>
  </div>
</template>

<script>
import { xTree } from '../src/index'
import { xDropdownItem } from '../../vue-dropdown/src/index'

export default {
  name: 'app',
  components: { xTree, xDropdownItem },
  data () {
    return {
      data5: [{
        children: [{ children: [], id: 2, type: 'FOLDER', title: '热销商品' }, {
          children: [],
          id: 3,
          type: 'FOLDER',
          title: '滞销商品'
        }, {
          children: [{
            children: [{ taskType: 'SHELL', id: 1, type: 'NODE', title: '测试节点' }, {
              taskType: 'SHELL',
              id: 2,
              type: 'NODE',
              title: 'shell'
            }, { taskType: 'PYTHON', id: 3, type: 'NODE', title: 'python测试' }, {
              taskType: 'SQL',
              id: 4,
              type: 'NODE',
              title: 'sql查询'
            }],
            id: 1,
            type: 'DEFINE',
            title: '超级菜单-营收分析'
          }, { id: 3, type: 'DEFINE', title: 'rrrrrrrrrrrr(1)_import_1610776020387' }, {
            id: 19,
            type: 'DEFINE',
            title: 'zyp商户表导入'
          }, { id: 20, type: 'DEFINE', title: '开麦报损单导入' }, { id: 21, type: 'DEFINE', title: '开麦报损单商品明细导入' }, {
            id: 22,
            type: 'DEFINE',
            title: '开麦采退出库单导入'
          }, { id: 23, type: 'DEFINE', title: 'zyp商户签约信息导入' }, {
            id: 24,
            type: 'DEFINE',
            title: '开麦采退出库商品明细导入'
          }, { id: 25, type: 'DEFINE', title: 'tc支付参数表导入' }, { id: 26, type: 'DEFINE', title: '开麦调出单导入' }, {
            id: 27,
            type: 'DEFINE',
            title: '开麦调出单商品明细导入'
          }, { id: 28, type: 'DEFINE', title: '开麦调入单导入' }, { id: 29, type: 'DEFINE', title: 'tc商户表导入' }, {
            id: 30,
            type: 'DEFINE',
            title: '开麦调入单商品明细导入'
          }, { id: 31, type: 'DEFINE', title: '商城门店商品导入' }, { id: 32, type: 'DEFINE', title: '开麦订单导入' }, {
            id: 33,
            type: 'DEFINE',
            title: '每日hs商户导入'
          }, { id: 34, type: 'DEFINE', title: '开麦服务商导入' }, { id: 35, type: 'DEFINE', title: '开麦供应商结算方式导入' }, {
            id: 36,
            type: 'DEFINE',
            title: '开麦门店商品表导入'
          }, { id: 37, type: 'DEFINE', title: '开麦门店数据导入' }, { id: 38, type: 'DEFINE', title: '每日hs门店导入' }, {
            id: 39,
            type: 'DEFINE',
            title: '开麦盘点单导入'
          }, { id: 40, type: 'DEFINE', title: '开麦总部商品导入' }, { id: 41, type: 'DEFINE', title: '开麦盘点商品明细导入' }, {
            id: 42,
            type: 'DEFINE',
            title: '开麦入库单导入'
          }, { id: 43, type: 'DEFINE', title: '开麦业务经理导入' }, { id: 44, type: 'DEFINE', title: '开麦入库商品明细导入' }, {
            id: 45,
            type: 'DEFINE',
            title: '开麦商品类目关系表导入'
          }, { id: 46, type: 'DEFINE', title: '开麦商户表导入' }, { id: 47, type: 'DEFINE', title: '开麦商品变更表导入' }, {
            id: 48,
            type: 'DEFINE',
            title: '开麦商品订单导入'
          }, { id: 49, type: 'DEFINE', title: '开麦商品库存表导入' }, { id: 50, type: 'DEFINE', title: '导入统计数据信息' }, {
            id: 51,
            type: 'DEFINE',
            title: '开麦商品类目表导入'
          }, { id: 52, type: 'DEFINE', title: '门店表导入' }, { id: 53, type: 'DEFINE', title: '收银员表导入' }, {
            id: 54,
            type: 'DEFINE',
            title: '子商户表导入'
          }, { id: 55, type: 'DEFINE', title: '供应商采购统计每日汇总_all' }, {
            id: 56,
            type: 'DEFINE',
            title: '每日tc交易订单导入'
          }, { id: 61, type: 'DEFINE', title: '创建临时表' }, {
            id: 62,
            type: 'DEFINE',
            title: '商城商品每日精选统计导出_test'
          }, { id: 64, type: 'DEFINE', title: '商户每日汇总' }, { id: 65, type: 'DEFINE', title: '服务商每日汇总' }, {
            id: 66,
            type: 'DEFINE',
            title: '进销存变更每日汇总_all'
          }, { id: 67, type: 'DEFINE', title: '商户每周汇总' }, { id: 68, type: 'DEFINE', title: 'rrrrrrrrrrrr' }, {
            id: 69,
            type: 'DEFINE',
            title: '商户每月汇总'
          }, { id: 70, type: 'DEFINE', title: '服务商每日趋势' }, { id: 71, type: 'DEFINE', title: '门店每日汇总_all' }, {
            id: 72,
            type: 'DEFINE',
            title: '服务商每月趋势'
          }, { id: 73, type: 'DEFINE', title: '服务商每月汇总' }, { id: 74, type: 'DEFINE', title: '服务商每周汇总' }, {
            id: 75,
            type: 'DEFINE',
            title: '门店每周汇总'
          }, { id: 77, type: 'DEFINE', title: '门店每月汇总' }, { id: 78, type: 'DEFINE', title: '门店商品日汇总' }, {
            id: 80,
            type: 'DEFINE',
            title: '服务商每周趋势'
          }, { id: 81, type: 'DEFINE', title: '门店商品维度统计近30天计算' }, {
            id: 82,
            type: 'DEFINE',
            title: '门店每日趋势'
          }, { id: 83, type: 'DEFINE', title: '门店商品维度统计近7天计算' }, {
            id: 84,
            type: 'DEFINE',
            title: '门店商品维度统计日表计算'
          }, { id: 85, type: 'DEFINE', title: '门店商品维度统计月表计算' }, {
            id: 86,
            type: 'DEFINE',
            title: '门店商品维度统计周表计算'
          }, { id: 87, type: 'DEFINE', title: '门店类目商品日汇总' }, { id: 88, type: 'DEFINE', title: '门店类目日汇总' }, {
            id: 90,
            type: 'DEFINE',
            title: '门店类目近7日汇总'
          }, { id: 91, type: 'DEFINE', title: '门店类目近30日汇总' }, { id: 92, type: 'DEFINE', title: '门店每月趋势' }, {
            id: 93,
            type: 'DEFINE',
            title: '门店类目月汇总'
          }, { id: 94, type: 'DEFINE', title: '门店类目周汇总' }, { id: 95, type: 'DEFINE', title: '门店每周趋势' }, {
            id: 99,
            type: 'DEFINE',
            title: '门店类目商品近30日汇总'
          }, { id: 100, type: 'DEFINE', title: '门店类目商品近7日汇总' }, {
            id: 102,
            type: 'DEFINE',
            title: '门店商品维度趋势近30天'
          }, { id: 103, type: 'DEFINE', title: '门店类目商品月汇总' }, {
            id: 104,
            type: 'DEFINE',
            title: '门店类目商品周汇总'
          }, { id: 105, type: 'DEFINE', title: '门店商品近30日汇总' }, {
            id: 107,
            type: 'DEFINE',
            title: '门店商品近7日汇总'
          }, { id: 108, type: 'DEFINE', title: '门店商品维度趋势日表' }, {
            id: 109,
            type: 'DEFINE',
            title: '门店商品月汇总'
          }, { id: 110, type: 'DEFINE', title: '门店商品维度趋势月表' }, {
            id: 111,
            type: 'DEFINE',
            title: '门店商品周汇总'
          }, { id: 112, type: 'DEFINE', title: '缺货商品获取_all' }, {
            id: 113,
            type: 'DEFINE',
            title: '门店商品维度趋势周表'
          }, { id: 114, type: 'DEFINE', title: '门店商品近7日趋势' }, {
            id: 115,
            type: 'DEFINE',
            title: '门店类目近30日趋势'
          }, { id: 116, type: 'DEFINE', title: '商城商品每日精选统计' }, {
            id: 117,
            type: 'DEFINE',
            title: '门店类目近7日趋势'
          }, { id: 118, type: 'DEFINE', title: '门店类目日趋势' }, { id: 119, type: 'DEFINE', title: '滞销商品近30天' }, {
            id: 120,
            type: 'DEFINE',
            title: '门店类目月趋势'
          }, { id: 121, type: 'DEFINE', title: '滞销商品近7天' }, { id: 122, type: 'DEFINE', title: '滞销商品日表' }, {
            id: 123,
            type: 'DEFINE',
            title: '门店类目周趋势'
          }, { id: 124, type: 'DEFINE', title: '滞销商品月表' }, { id: 125, type: 'DEFINE', title: '滞销商品周表' }, {
            id: 126,
            type: 'DEFINE',
            title: '门店类目商品近30日趋势'
          }, { id: 127, type: 'DEFINE', title: '业务经理每日汇总' }, {
            id: 128,
            type: 'DEFINE',
            title: '业务经理每月汇总'
          }, { id: 129, type: 'DEFINE', title: '门店类目商品近7日趋势' }, {
            id: 130,
            type: 'DEFINE',
            title: '业务经理每周汇总'
          }, { id: 131, type: 'DEFINE', title: '商户商品维度统计近30天' }, {
            id: 132,
            type: 'DEFINE',
            title: '商户商品维度统计近7天'
          }, { id: 133, type: 'DEFINE', title: '商户商品维度统计日表' }, {
            id: 134,
            type: 'DEFINE',
            title: '商户商品维度统计月表'
          }, { id: 135, type: 'DEFINE', title: '门店类目商品日趋势' }, {
            id: 136,
            type: 'DEFINE',
            title: '商户商品维度统计周表'
          }, { id: 137, type: 'DEFINE', title: '门店类目商品周趋势' }, {
            id: 138,
            type: 'DEFINE',
            title: 'hs商户官方通道账单结算'
          }, { id: 139, type: 'DEFINE', title: 'hs商户每日交易数据汇总' }, {
            id: 140,
            type: 'DEFINE',
            title: '门店类目商品月趋势'
          }, { id: 141, type: 'DEFINE', title: '门店商品近30日趋势' }, {
            id: 143,
            type: 'DEFINE',
            title: '日表数据_all'
          }, { id: 144, type: 'DEFINE', title: '门店商品日趋势' }, { id: 145, type: 'DEFINE', title: '门店商品周趋势' }, {
            id: 146,
            type: 'DEFINE',
            title: '门店商品月趋势'
          }, { id: 147, type: 'DEFINE', title: '业务经理每日趋势' }, { id: 149, type: 'DEFINE', title: '月表数据' }, {
            id: 151,
            type: 'DEFINE',
            title: '周表数据'
          }, { id: 153, type: 'DEFINE', title: '创建汇总临时表数据_用于回流' }, {
            id: 154,
            type: 'DEFINE',
            title: '商户每日趋势'
          }, { id: 155, type: 'DEFINE', title: '商户每月趋势' }, { id: 156, type: 'DEFINE', title: '商户每周趋势' }, {
            id: 157,
            type: 'DEFINE',
            title: '商户商品维度的趋势近30天'
          }, { id: 158, type: 'DEFINE', title: '商户商品维度的趋势近7天' }, {
            id: 159,
            type: 'DEFINE',
            title: '商户商品维度的趋势日表'
          }, { id: 160, type: 'DEFINE', title: '商户商品维度的趋势月表' }, {
            id: 161,
            type: 'DEFINE',
            title: '商户商品维度的趋势周表'
          }, { id: 162, type: 'DEFINE', title: '供应商门店采购统计日表导出' }, {
            id: 163,
            type: 'DEFINE',
            title: '门店商品维度趋势近7天'
          }, { id: 165, type: 'DEFINE', title: '业务经理每周趋势' }, {
            id: 166,
            type: 'DEFINE',
            title: '业务经理每月趋势汇总'
          }, { id: 170, type: 'DEFINE', title: '测试导出111' }, {
            id: 172,
            type: 'DEFINE',
            title: '服务商每日趋势导出'
          }, { id: 173, type: 'DEFINE', title: '供应商门店商品采购统计日表导出' }, {
            id: 175,
            type: 'DEFINE',
            title: '商户供应商采购统计日表导出'
          }, { id: 176, type: 'DEFINE', title: '服务商每日汇总导出' }, {
            id: 177,
            type: 'DEFINE',
            title: '服务商每月汇总导出'
          }, { id: 180, type: 'DEFINE', title: '服务商每月趋势导出' }, {
            id: 181,
            type: 'DEFINE',
            title: '服务商每周汇总导出'
          }, { id: 182, type: 'DEFINE', title: '门店每日汇总导出' }, {
            id: 183,
            type: 'DEFINE',
            title: '服务商每周趋势导出'
          }, { id: 184, type: 'DEFINE', title: '门店每日趋势导出' }, {
            id: 185,
            type: 'DEFINE',
            title: '门店每月汇总导出'
          }, { id: 186, type: 'DEFINE', title: '门店每月趋势导出' }, {
            id: 188,
            type: 'DEFINE',
            title: '门店每周趋势导出'
          }, { id: 189, type: 'DEFINE', title: '门店每周汇总导出' }, {
            id: 190,
            type: 'DEFINE',
            title: '门店商品维度汇总近30天回流'
          }, { id: 192, type: 'DEFINE', title: '门店商品维度汇总近7天回流' }, {
            id: 193,
            type: 'DEFINE',
            title: '门店商品维度汇总日表回流'
          }, { id: 194, type: 'DEFINE', title: '门店商品维度趋势近30天回流' }, {
            id: 195,
            type: 'DEFINE',
            title: '门店商品维度趋势近7天回流'
          }, { id: 196, type: 'DEFINE', title: '门店商品维度汇总月表回流' }, {
            id: 197,
            type: 'DEFINE',
            title: '门店商品维度汇总周表回流'
          }, { id: 198, type: 'DEFINE', title: '门店类目近30日汇总导出' }, {
            id: 199,
            type: 'DEFINE',
            title: '门店类目近7日汇总导出'
          }, { id: 200, type: 'DEFINE', title: '门店类目日汇总导出' }, {
            id: 201,
            type: 'DEFINE',
            title: '门店商品维度趋势日表回流'
          }, { id: 202, type: 'DEFINE', title: '门店商品维度趋势月表回流' }, {
            id: 203,
            type: 'DEFINE',
            title: '门店类目月汇总导出'
          }, { id: 204, type: 'DEFINE', title: '门店类目周汇总导出' }, {
            id: 205,
            type: 'DEFINE',
            title: '门店商品维度趋势周表回流'
          }, { id: 206, type: 'DEFINE', title: '门店类目商品近30日汇总导出' }, {
            id: 207,
            type: 'DEFINE',
            title: '门店类目商品近7日汇总导出'
          }, { id: 208, type: 'DEFINE', title: '门店类目商品日汇总导出' }, {
            id: 209,
            type: 'DEFINE',
            title: '门店类目商品月汇总导出'
          }, { id: 210, type: 'DEFINE', title: '门店类目近30日趋势导出' }, {
            id: 211,
            type: 'DEFINE',
            title: '门店类目商品周汇总导出'
          }, { id: 212, type: 'DEFINE', title: '门店类目近7日趋势导出' }, {
            id: 213,
            type: 'DEFINE',
            title: '门店商品近30日汇总导出'
          }, { id: 214, type: 'DEFINE', title: '门店类目日趋势导出' }, {
            id: 215,
            type: 'DEFINE',
            title: '门店商品近7日汇总导出'
          }, { id: 216, type: 'DEFINE', title: '门店类目月趋势导出' }, {
            id: 217,
            type: 'DEFINE',
            title: '门店商品日汇总导出'
          }, { id: 218, type: 'DEFINE', title: '门店类目周趋势导出' }, {
            id: 219,
            type: 'DEFINE',
            title: '门店商品月汇总导出'
          }, { id: 220, type: 'DEFINE', title: '门店商品周汇总导出' }, { id: 221, type: 'DEFINE', title: '缺货商品回流' }, {
            id: 222,
            type: 'DEFINE',
            title: '商城商品每日精选统计导出'
          }, { id: 223, type: 'DEFINE', title: '滞销商品近30天表回流' }, {
            id: 225,
            type: 'DEFINE',
            title: '滞销商品近7天表回流'
          }, { id: 226, type: 'DEFINE', title: '滞销商品日表回流' }, {
            id: 227,
            type: 'DEFINE',
            title: '滞销商品月表回流'
          }, { id: 228, type: 'DEFINE', title: '门店类目商品近30日趋势导出' }, {
            id: 229,
            type: 'DEFINE',
            title: '滞销商品周表回流'
          }, { id: 230, type: 'DEFINE', title: '门店类目商品近7日趋势导出' }, {
            id: 231,
            type: 'DEFINE',
            title: '商户每日汇总导出'
          }, { id: 232, type: 'DEFINE', title: '门店类目商品近周趋势导出' }, {
            id: 233,
            type: 'DEFINE',
            title: '门店类目商品日趋势导出'
          }, { id: 234, type: 'DEFINE', title: '商户每月汇总导出' }, {
            id: 235,
            type: 'DEFINE',
            title: '商户每周汇总导出'
          }, { id: 236, type: 'DEFINE', title: '门店类目商品月趋势导出' }, {
            id: 237,
            type: 'DEFINE',
            title: '门店商品近30日趋势导出'
          }, { id: 238, type: 'DEFINE', title: '门店商品近7日趋势导出' }, {
            id: 239,
            type: 'DEFINE',
            title: '商户商品维度统计近30天表回流'
          }, { id: 240, type: 'DEFINE', title: '门店商品日趋势导出' }, {
            id: 241,
            type: 'DEFINE',
            title: '门店商品月趋势导出'
          }, { id: 242, type: 'DEFINE', title: '门店商品周趋势导出' }, {
            id: 243,
            type: 'DEFINE',
            title: '商户商品维度统计近7天表回流'
          }, { id: 244, type: 'DEFINE', title: '商户商品维度统计日表回流' }, {
            id: 245,
            type: 'DEFINE',
            title: '业务经理每日趋势导出'
          }, { id: 246, type: 'DEFINE', title: '商户商品维度统计月表回流' }, {
            id: 247,
            type: 'DEFINE',
            title: '业务经理每月趋势汇总导出'
          }, { id: 248, type: 'DEFINE', title: '商户商品维度统计周表回流' }, {
            id: 249,
            type: 'DEFINE',
            title: '业务经理每周趋势导出'
          }, { id: 250, type: 'DEFINE', title: 'hs商户官方通道账单结算回流' }, {
            id: 251,
            type: 'DEFINE',
            title: '商户每日趋势导出'
          }, { id: 252, type: 'DEFINE', title: 'hs商户每日交易数据汇总回流' }, {
            id: 253,
            type: 'DEFINE',
            title: '业务经理每日汇总导出'
          }, { id: 254, type: 'DEFINE', title: '业务经理每月汇总导出' }, {
            id: 255,
            type: 'DEFINE',
            title: '业务经理每周汇总导出'
          }, { id: 256, type: 'DEFINE', title: '门店分类进销存变更汇总日表导出' }, {
            id: 257,
            type: 'DEFINE',
            title: '门店进销存变更汇总日表导出'
          }, { id: 258, type: 'DEFINE', title: '门店商品进销存变更汇总日表导出' }, {
            id: 259,
            type: 'DEFINE',
            title: '商户分类进销存变更汇总日表导出'
          }, { id: 260, type: 'DEFINE', title: '商户商品进销存变更汇总日表导出' }, {
            id: 261,
            type: 'DEFINE',
            title: '商户每月趋势导出'
          }, { id: 262, type: 'DEFINE', title: '商户每周趋势导出' }, { id: 263, type: 'DEFINE', title: '交易日统计回流' }, {
            id: 264,
            type: 'DEFINE',
            title: '商户商品维度趋势近30天表回流'
          }, { id: 265, type: 'DEFINE', title: '商户商品维度趋势近7天表回流' }, {
            id: 266,
            type: 'DEFINE',
            title: '商户商品维度趋势近月表回流'
          }, { id: 267, type: 'DEFINE', title: 'bbbbbb' }, {
            id: 268,
            type: 'DEFINE',
            title: '商户商品维度趋势近周表回流'
          }, { id: 269, type: 'DEFINE', title: '商户商品维度趋势日表回流' }, {
            id: 270,
            type: 'DEFINE',
            title: '交易月统计回流'
          }, { id: 271, type: 'DEFINE', title: '交易周统计回流' }, {
            id: 272,
            type: 'DEFINE',
            title: '日表数据回流_门店'
          }, { id: 273, type: 'DEFINE', title: '日表数据回流_其他角色' }, {
            id: 274,
            type: 'DEFINE',
            title: '日表数据回流_收银员'
          }, { id: 275, type: 'DEFINE', title: '日表数据回流_商户' }, {
            id: 276,
            type: 'DEFINE',
            title: '日表数据回流_区域经理'
          }, { id: 277, type: 'DEFINE', title: 'aaaaaa' }, {
            id: 278,
            type: 'DEFINE',
            title: '11111111111'
          }, { id: 279, type: 'DEFINE', title: '滞销商品周表_copy_1608789443585' }, {
            id: 282,
            type: 'DEFINE',
            title: '超级菜场导入表归集'
          }, { id: 283, type: 'DEFINE', title: '门店商品日汇总_all' }, {
            id: 284,
            type: 'DEFINE',
            title: 'hs商户每日交易数据汇总_all'
          }, { id: 285, type: 'DEFINE', title: 'hs商户官方通道账单结算_all' }, {
            id: 291,
            type: 'DEFINE',
            title: '超级菜场'
          }, { id: 311, type: 'DEFINE', title: 'meta_test_import_1610692391582' }],
          id: 4,
          type: 'FOLDER',
          title: '营收分析'
        }, { children: [], id: 5, type: 'FOLDER', title: '亏损分析' }, { id: 2, type: 'DEFINE', title: 'rrr' }],
        id: 1,
        type: 'FOLDER',
        title: '数据开发'
      }]
    }
  },
  methods: {
    handleContextMenu (data) {
      this.contextData = data
    },
    handleContextMenuEdit () {
      this.$message.info('Click edit of' + this.contextData.title)
    },
    handleContextMenuDelete () {
      this.$message.info('Click delete of' + this.contextData.title)
    },
    renderTree (h, { root, node, data }) {
      switch (data.type) {
        case 'FOLDER':
          break
        case 'DEFINE':
          break
        case 'NODE':
          break
      }
      if (data.type === 'NODE') {
        return h('span', {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, [
          h('span', {
            on: {
              dblclick: () => {
                console.log('双击 ' + data.type)
              }
            }
          }, [
            h('span', {
              class: `node-icon icon-${data.taskType}`,
              style: {
                marginRight: '8px'
              }
            }),
            h('span', {
              class: 'node-title'
            }, data.title)
          ])
        ])
      } else {
        return h('span', {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, [
          h('span', [
            h('i', {
              class: data.type === 'FOLDER' ? 'ans-icon-folder-empty' : 'ans-icon-node',
              style: {
                marginRight: '8px'
              }
            }),
            h('span', {
              class: 'node-title'
            }, data.title)
          ])
        ])
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss"></style>
