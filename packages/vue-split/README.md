## Split

### Split props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
value | 面板位置，可以是`0~1`代表百分比，或具体数值的像素，可用`v-model`双向绑定 | Number / String | 0.5
mode | 类型，可选值为`horizontal`或`vertical` | String | horizontal
min | 最小阈值 | Number / String | 40px
max | 最大阈值 | Number / String | 40px

### Split events

事件名 | 说明 | 返回值
--- | --- | ---
on-move-start | 拖拽开始 | -
on-moving | 拖拽中 | event
on-move-end | 拖拽结束 | -

### Split slot

名称 | 说明
--- | ---
left | mode 为 horizontal 时可用，左边面板
right | mode 为 horizontal 时可用，右边面板
top | mode 为 vertical 时可用，上边面板
bottom | mode 为 vertical 时可用，下边面板
trigger | 自定义分割拖拽节点
