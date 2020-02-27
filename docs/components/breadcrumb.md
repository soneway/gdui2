# Breadcrumb 面包屑

## 基础用法
<source-block>
  <breadcrumb-base />
  <<< @/docs/.vuepress/components/breadcrumb/base.vue
</source-block>

## 带图标和边框
<source-block>
  <breadcrumb-icon />
  <<< @/docs/.vuepress/components/breadcrumb/icon.vue
</source-block>

## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| separator | 自定义分隔符   | String  |   -   |  / |
| border | 是否带边框   | Boolean  |   -   |  false |

### BreadcrumbItem props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| to | 链接，支持 vue-router 对象   | String/Object  |   -   |  - |
| replace | 是否替换(history无记录)   | Boolean  |   true/false  |  false |
| target | 跳转目标   | String  |   a标签target所有属性   |  - |
