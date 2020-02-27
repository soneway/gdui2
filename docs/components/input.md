# Input 输入框

## 基础用法
<source-block>
  <input-base />
  <<< @/docs/.vuepress/components/input/base.vue
</source-block>

## 不同尺寸
<source-block>
  <input-size />
  <<< @/docs/.vuepress/components/input/size.vue
</source-block>

## 可清除
<source-block>
  <input-clear />
  <<< @/docs/.vuepress/components/input/clear.vue
</source-block>

## 带图标
<source-block>
  <input-icon />
  <<< @/docs/.vuepress/components/input/icon.vue
</source-block>

## 禁用
<source-block>
  <input-disabled />
  <<< @/docs/.vuepress/components/input/disabled.vue
</source-block>

## 只读
<source-block>
  <input-readonly />
  <<< @/docs/.vuepress/components/input/readonly.vue
</source-block>

## 带选项
<source-block>
  <input-select />
  <<< @/docs/.vuepress/components/input/select.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 值 | String, Number, Array | - | - |
| type    | 类型   | String  |   text/textarea待原生input的type   |  text |
| size | 尺寸   | String  |  larger/large/small  |    -  |
| disabled   | 禁用状态   | Boolean    | - | false   |
| readonly |  只读状态  | Boolean   | - | false |
| placeholder | 输入框占位符  | String |    -   |  -   |
| rows  |  输入框行数，只对`type="textarea"`有效  | Number, String | - | 3  |
| icon | 输入框前缀图标 | String  |  [Icon参考](icon.html)  |    -|
| suffix-icon | 输入框后缀图标  | String  |  [Icon参考](icon.html)  |    -|
| allow-clear |  可清除内容  | Boolean   | - | false |
| maxlength |  最大字数  | Number   | - | - |
| maxlength-hidden |  隐藏最大字数信息  | Boolean   | - | false |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| click  | 输入框被点击时触发  | event  |
| focus  | 输入框获得焦点时触发 | event |
| blur   | 输入框失去焦点时触发 | event |
| change | 输入框改变时触发   | value |
| iconclick | 输入框的前缀图标被点击时触发 | event |
| suffixiconclick | 输入框的后缀图标被点击时触发 | event |
