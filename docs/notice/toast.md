# Toast 弱提示

## 基础用法
<source-block>
  <toast-base />
  <<< @/docs/.vuepress/components/toast/base.vue
</source-block>

## 带辅助状态
<source-block>
  <toast-assist />
  <<< @/docs/.vuepress/components/toast/assist.vue
</source-block>

## 自定义内容
<source-block>
  <toast-render />
  <<< @/docs/.vuepress/components/toast/render.vue
</source-block>

## 属性配置
### Toast支持show, success, error, info, warning方法, 方法参数
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content| 消息正文	   | string / function    |  -  |    -    |
| timeout |  显示时长  | number |  -  |  3000 |
