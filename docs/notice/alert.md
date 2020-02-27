# Alert 警示框

## 基础用法
<source-block>
  <alert-base />
  <<< @/docs/.vuepress/components/alert/base.vue
</source-block>

## 自定义内容
<source-block>
  <alert-render />
  <<< @/docs/.vuepress/components/alert/render.vue
</source-block>

## 属性配置
### Alert.show方法参数
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title| 弹框标题   | string / function  |    —    |  -  |
| content| 弹框消息正文	   | string    |  -  |    -    |
| okText | 确定按钮文字内容 | string |  -  | '确定' |
| withMask  | 是否带遮罩层  |  boolean  |  -  |  true  |
| onOkClick | 点击确定按钮的回调  | function |  -  |  -  |
