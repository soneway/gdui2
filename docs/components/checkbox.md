# Checkbox 复选框

## 基础用法
<source-block>
  <checkbox-base />
  <<< @/docs/.vuepress/components/checkbox/base.vue
</source-block>

## 不同尺寸
<source-block>
  <checkbox-size />
  <<< @/docs/.vuepress/components/checkbox/size.vue
</source-block>

## 设置label
<source-block>
  <checkbox-label />
  <<< @/docs/.vuepress/components/checkbox/label.vue
</source-block>

## 禁用
<source-block>
  <checkbox-disabled />
  <<< @/docs/.vuepress/components/checkbox/disabled.vue
</source-block>

## 只读
<source-block>
  <checkbox-readonly />
  <<< @/docs/.vuepress/components/checkbox/readonly.vue
</source-block>

## Checkbox Group
请参考[CheckList组件checkbox样式](check-list.html#checkbox样式)


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 是否选中 | Boolean | - | Boolean |
| size | 尺寸   | String  |  larger/large/small  |  -  |
| disabled   | 是否禁用状态   | Boolean    | - | false   |
| readonly |  是否只读状态  | Boolean   | - | false |
| indeterminate |  是否半选中  | Boolean   | - | false |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| click  | 点击事件  | event  |
| change | 值改变事件   | value |
