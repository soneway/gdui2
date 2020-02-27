# Tabs 标签页

## 基础用法
<source-block>
  <tabs-base />
  <<< @/docs/.vuepress/components/tabs/base.vue
</source-block>

## 不同尺寸
<source-block>
  <tabs-size />
  <<< @/docs/.vuepress/components/tabs/size.vue
</source-block>

## label自定义渲染
<source-block>
  <tabs-render />
  <<< @/docs/.vuepress/components/tabs/render.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | tab选中值 | String, Number | - | - |
| size   | 尺寸 | String | larger/large/small | - |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| tabclick  | 标签点击事件  | value  |

### TabsPane props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label   | 标签文本 | String | - | - |
| value   | tab值 | String, Number | - | - |
| icon   | 图标 [Icon](icon.html) | String | - | - |
| disabled   | 禁用状态 | Boolean | - | false |
