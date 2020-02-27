# ConfirmPoptip 确认气泡提示

## 基础用法
<source-block>
  <confirm-poptip-base />
  <<< @/docs/.vuepress/components/confirm-poptip/base.vue
</source-block>

## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger | 触发方式   | String  |   hover/click   |  click |
| width | 气泡宽度   | String  |   -   |  200px |
| placement | 气泡位置   | String  |   top/right/bottom/left   |  top |
| content | 提示信息   | String, Function  |   -   |  是否确认? |
| pass-data | 透传参数   | Number, String, Object, Array  |   -  |  - |
| confirm-text | 确定按钮文本  | String  |   -   |  确认 |
| confirm-closable | 确定按钮可关闭   | Boolean  |   -   |  true |
| cancel-text | 取消按钮文本   | String  |   -   |  取消 |
| cancel-closable | 取消按钮可关闭   | Boolean  |   -   |  true |

### events
| 参数 | 说明    | 返回值 |
|---------- |-------- |---------- |
| confirm | 确认按钮点击事件   | 透传参数  |
| cancel | 取消按钮点击事件   | 透传参数  |
