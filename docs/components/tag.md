# Tag 标签页

## 基础用法
<source-block>
  <tag-base />
  <<< @/docs/.vuepress/components/tag/base.vue
</source-block>

## 带辅助状态
<source-block>
  <tag-assist />
  <<< @/docs/.vuepress/components/tag/assist.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size   | 尺寸 | String | larger/large/default/small | default |
| type   | 状态类型 | String | info/success/warning/error | - |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| close  | 标签点击事件  | tagText  |

