# Rate 评分

## 基础用法

<source-block>
  <rate-base />
  <<< @/docs/.vuepress/components/rate/base.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value|  评分值   |  Number |    -   |   0  |
| count|  评分总数   |  Number |    -   |   5  |
| title|  标题   |  String |    -   |   -  |
| text-map|  信息字典   |  Array |    -   |   -  |
| happy-threshold|  评分良好阈值   |  Number |    -   |   0  |
| disabled|  是否禁用(只读状态)   |  Boolean |    -   |   false  |
| icon|  图标类型   |  String |    -   |   star  |


### events
| 参数 | 说明    | 返回值 |
|---------- |-------- |---|
| change|   点击事件  | index |
