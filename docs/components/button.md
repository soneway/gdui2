# Button 按钮

## 基础用法
<source-block>
  <button-base />
  <<< @/docs/.vuepress/components/button/base.vue
</source-block>

## 不同尺寸
<source-block>
  <button-size />
  <<< @/docs/.vuepress/components/button/size.vue
</source-block>

## 带辅助状态
<source-block>
  <button-assist />
  <<< @/docs/.vuepress/components/button/assist.vue
</source-block>

## 禁用状态
<source-block>
  <button-disabled />
  <<< @/docs/.vuepress/components/button/disabled.vue
</source-block>

## 带图标
<source-block>
  <button-icon />
  <<< @/docs/.vuepress/components/button/icon.vue
</source-block>

## 纯图标
<source-block>
  <button-icon-only />
  <<< @/docs/.vuepress/components/button/icon-only.vue
</source-block>

## loading状态
<source-block>
  <button-loading />
  <<< @/docs/.vuepress/components/button/loading.vue
</source-block>


## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型   | String  |   primary/thin/text, info/success/warning/error | - |
| size | 尺寸   | String  |  large / default / small / mini  |    default  |
| loading | 是否加载中状态 | Boolean | - | false   |
| disabled | 是否禁用状态 | Boolean | - | false   |
| icon-only | 是否为图标按钮 | Boolean  | - | false
| icon | Button前缀图标 | String  |  [Icon参考](icon.html)  |    -|
| suffix-icon | Button后缀图标  | String  |  [Icon参考](icon.html)  |    -|
| html-type | button原生type  | String  |  -  |   button  |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |---|
| click  |  点击事件  | event |
