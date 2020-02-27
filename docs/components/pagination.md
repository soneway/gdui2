# Pagination 分页

## 基础用法
<source-block>
  <pagination-base />
  <<< @/docs/.vuepress/components/pagination/base.vue
</source-block>

## 不同尺寸
<source-block>
  <pagination-size />
  <<< @/docs/.vuepress/components/pagination/size.vue
</source-block>

## 简洁模式
<source-block>
  <pagination-simple />
  <<< @/docs/.vuepress/components/pagination/simple.vue
</source-block>


## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size  | 尺寸   | String  | larger/large/small |  - |
| index  | 当前页 | Number  |   -  |  1 |
| page-size  | 分页大小 | Number  | - |  10 |
| total  | 总记录数 | Number  | - |  - |
| simple  | 简洁模式 | Boolean  | - |  false |
| show-total  | 显示总记录数 | Boolean  | - |  true |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- | --- |
| change  | 翻页事件  | value |
