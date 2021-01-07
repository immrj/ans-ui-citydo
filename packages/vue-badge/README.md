## Badge

### Badge props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
count | 显示的数字，大于`overflowCount`时，显示`${overflowCount}+`，为 0 时隐藏 | Number | -
overflow-count | 展示封顶的数字值 | Number / String | 99
dot | 不展示数字，只有一个小红点，如需隐藏`dot` ，需要设置`count`为 0 | Boolean | false
class-name | 自定义的class名称，dot 模式下无效 | String | -
type | 使用预设的颜色，可选值为`success、primary、normal、error、warning、info` | String | -
show-zero | 当数值为 0 时，是否展示`Badge` | Boolean | false
status | 设置`Badge`为状态点，可选值为`success`、`processing`、`default`、`error`、`warning` | String | -
text | 自定义内容，如果设置了 status，则为状态点的文本 | String | -
offset | 设置状态点的位置偏移，格式为 `[x, y]` | Array | -
color | 设置更多状态点的颜色或自定义颜色 | String | -


### Badge slot

名称 | 说明
--- | ---
count | 自定义角标显示内容（去角标背景），数值 count 将无效。
text | 自定义角标显示内容（带角标背景），数值 count 将无效。亦可自定义状态点模式下的 text 内容。
