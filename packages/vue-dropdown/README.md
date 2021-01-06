## Dropdown

### Dropdown props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
trigger | 触发方式，可选值为`hover`（悬停）`click`（点击）`contextMenu`（右键）`custom`（自定义），使用`custom`时，需配合`visible`一起使用 | String | hover
visible | 手动控制下拉框的显示，在`trigger = 'custom'`时使用 | Boolean | false
placement | 下拉菜单出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end` | String | bottom
transfer | 是否将弹层放置于`body`内，在`Tabs`、带有`fixed`的`Table`列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false
transfer-class-name | 开启`transfer`时，给浮层添加额外的`class`名称 | String | -
stop-propagation | 是否开启`stop-propagation` | Boolean | false

### Dropdown events

事件名 | 说明 | 返回值
--- | --- | ---
on-click | 点击菜单项时触发 | `DropdownItem`的`name`值
on-visible-change | 菜单显示状态改变时调用 | visible
on-clickoutside | 点击外部关闭下拉菜单时触发 | event

### Dropdown slot

名称 | 说明
--- | ---
无 | 主体内容
list | 列表内容，一般由`DropdownMenu`承担

### DropdownItem props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
name | 用来标识这一项 | String | -
disabled | 禁用该项 | Boolean | false
divided | 显示分割线 | Boolean | false
selected | 标记该项为选中状态 | Boolean | false
