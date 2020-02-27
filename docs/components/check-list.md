# CheckList 选项列表

## 基础用法
<source-block>
  <check-list-base />
  <<< @/docs/.vuepress/components/check-list/base.vue
</source-block>

## 按钮样式
<source-block>
  <check-list-button />
  <<< @/docs/.vuepress/components/check-list/button.vue
</source-block>

## checkbox样式
<source-block>
  <check-list-checkbox />
  <<< @/docs/.vuepress/components/check-list/checkbox.vue
</source-block>

- 注: checkbox样式需用于多选模式(multiple=true); 如需单选, 请使用radio样式

## radio样式
<source-block>
  <check-list-radio />
  <<< @/docs/.vuepress/components/check-list/radio.vue
</source-block>

## 禁用
<source-block>
  <check-list-disabled />
  <<< @/docs/.vuepress/components/check-list/disabled.vue
</source-block>

## 只读
<source-block>
  <check-list-readonly />
  <<< @/docs/.vuepress/components/check-list/readonly.vue
</source-block>

## 多选
<source-block>
  <check-list-multiple />
  <<< @/docs/.vuepress/components/check-list/multiple.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 选项值 | String, Number, Array, Boolean | - | - |
| size | 尺寸   | String  |  larger/large/small  |    -  |
| multiple   | 是否多选 | Boolean | - | false |
| item-type   | 选项样式类型 | String | button/radio/checkbox | - |
| disabled   | 禁用状态   | Boolean    | - | false   |
| readonly |  只读状态  | Boolean   | - | false |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| itemclick  | 选项点击事件  | value, oldValue  |
| change  | 值改变事件  | value  |

### CheckItem props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 选项值 | String, Number, Boolean | - | - |
| label | 选项文本   | String, Number, Boolean | - | - |
