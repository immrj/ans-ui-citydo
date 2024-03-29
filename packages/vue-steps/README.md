## Steps

拆分某项流程的步骤，引导用户按流程完成任务。

### Steps props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
current | 当前步骤，从 0 开始计数 | Number | 0
status | 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error` | String | process
size | 步骤条的尺寸，可选值为`small`或者不写 | String | -
direction | 步骤条的方向，可选值为`horizontal`（水平）或`vertical`（垂直） | String | horizontal

### Step props

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
status | 步骤的状态，可选值为`wait`、`process`、`finish`、`error`，不设置时自动判断 | String | process
title | 标题 | String | 空
content | 步骤的详细描述，可选 | String | -
icon | 步骤的图标，可选 | String | -

### Step slot

名称 | 说明
--- | ---
title | 自定义 title
content | 自定义 content
icon | 自定义 icon
