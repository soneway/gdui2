# Icon 图标

## 基础用法
<source-block>
  <icon-base />
  <<< @/docs/.vuepress/components/icon/base.vue
</source-block>

## 不同尺寸
<source-block>
  <icon-size />
  <<< @/docs/.vuepress/components/icon/size.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon|  图标类型   |  string |    -   |   -  |
| size|   图标尺寸  |  string  |    larger/large/small   |   -  |


### events
| 参数 | 说明    |
|---------- |-------- |
| click|   点击事件  |

### slots
| 参数 | 说明    |
|----- |----- |
| - | 图标文字 |
