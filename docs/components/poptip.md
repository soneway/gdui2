# Poptip 气泡提示

## 基础用法
<source-block>
  <poptip-base />
  <<< @/docs/.vuepress/components/poptip/base.vue
</source-block>

## 点击触发
<source-block>
  <poptip-click />
  <<< @/docs/.vuepress/components/poptip/click.vue
</source-block>

## 插槽
<source-block>
  <poptip-slot />
  <<< @/docs/.vuepress/components/poptip/slot.vue
</source-block>

- slot中的元素如有 **data-close-poptip** 属性可关闭气泡


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placement   | 气泡位置 | String | top/right/bottom/left | top |
| content   | 内容 | String | - | - |
| trigger   | 触发方式 | String | hover/click | hover |
| width   | 气泡宽度 | String | - | - |

### slots
| 参数 | 说明  |
|----- |----- |
| -  | 包裹元素  |
| content  | 气泡内容  |
