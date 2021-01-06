## Tabs

### Tabs props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
value | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 | String | 默认为第一项的 name
type | 页签的基本样式，可选值为`line`和`card` | String | line
size | 尺寸，可选值为`default`和`small`，仅在`type="line"`时有效 | String | default
closable | 是否可以关闭页签，仅在`type="card"`时有效 | Boolean | false
animated | 是否使用 CSS3 动画 | Boolean | true
capture-focus | Tabs 内的表单类组件是否自动获得焦点 | Boolean | false
before-remove | 关闭前的函数，返回 Promise 可阻止标签关闭 | Function | -
name | 当嵌套使用 Tabs，指定 name 区分层级 | String | -
draggable | 开启可配合事件 @on-drag-drop 实现拖拽调整页签顺序，详见示例 | Boolean | false

### Tabs events

事件名 | 说明 | 返回值
--- | --- | ---
on-click | tab 被点击时触发 | name
on-tab-remove | tab 被关闭时触发 | name
on-contextmenu | 当前页签点击右键时触发 | data, event, position
on-drag-drop | 拖拽调整页签顺序时触发 | name1, name2, index1, index2, names

### Tabs slot

名称 | 说明
--- | ---
extra | 附加内容
contextMenu | 右键菜单，详见示例

### TabPane props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
name | 用于标识当前面板，对应 value，默认为其索引值 | String | -
label | 选项卡头显示文字，支持 Render 函数。 学习 Render 函数的内容 | String ｜ Function | 空
icon | 选项卡图标 | String | -
disabled | 是否禁用该选项卡 | Boolean | false
closable | 是否可以关闭页签，仅在`type="card"`时有效 | Boolean | null
tab | 当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段 | String | -
index | 在`TabPane`使用`v-if`时，并不会按照预先的顺序渲染，这时可设置`index`，并从小到大排序(需大于 0) | Number | -
context-menu | 是否支持右键菜单 | Boolean | false
