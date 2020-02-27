# Radio 单选框

## 基础用法
<source-block>
  <radio-base />
  <<< @/docs/.vuepress/components/radio/base.vue
</source-block>

## 不同尺寸
<source-block>
  <radio-size />
  <<< @/docs/.vuepress/components/radio/size.vue
</source-block>

## name组
<source-block>
  <radio-name />
  <<< @/docs/.vuepress/components/radio/name.vue
</source-block>

## 设置label
<source-block>
  <radio-label />
  <<< @/docs/.vuepress/components/radio/label.vue
</source-block>

## 禁用
<source-block>
  <radio-disabled />
  <<< @/docs/.vuepress/components/radio/disabled.vue
</source-block>

## 只读
<source-block>
  <radio-readonly />
  <<< @/docs/.vuepress/components/radio/readonly.vue
</source-block>

## Radio Group
请参考[CheckList组件radio样式](check-list.html#radio样式)


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 是否选中 | Boolean | - | false |
| size | 尺寸   | String  |  larger/large/small  |  -  |
| disabled   | 是否禁用状态   | Boolean    | - | false   |
| readonly |  是否只读状态  | Boolean   | - | false |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| click  | 点击事件  | event  |
| change | 值改变事件   | value |
