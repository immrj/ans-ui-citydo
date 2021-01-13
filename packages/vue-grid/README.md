## Grid

基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。

### Row props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
gutter | 栅格间距，单位 px，左右平分 | Number | 0
type | 布局模式，可选值为`flex`或不选，在现代浏览器下有效 | -
align | flex 布局下的垂直对齐方式，可选值为`top`、`middle`、`bottom` | String | -
justify | flex 布局下的水平排列方式，可选值为`start`、`end`、`center`、`space-around`、`space-between` | String | -
class-name | 自定义的class名称 | String | -

### Col props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
span | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于`display:none` | Number / String | -
order | 栅格的顺序，在`flex`布局模式下有效 | Number / String | -
offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | Number / String | -
push | 栅格向右移动格数 | Number / String | -
pull | 栅格向左移动格数 | Number / String | -
class-name | 自定义的class名称 | String | -
xs | `<576px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
sm | `≥576px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
md | `≥768px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
lg | `≥992px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
xl | `≥1200px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
xxl | `≥1600px`响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -
