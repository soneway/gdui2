# RegionPicker 地区选择器

## 基础用法
<source-block>
  <region-picker-base />
  <<< @/docs/.vuepress/components/region-picker/base.vue
</source-block>

## 禁用
<source-block>
  <region-picker-disabled />
  <<< @/docs/.vuepress/components/region-picker/disabled.vue
</source-block>

## 只读
<source-block>
  <region-picker-readonly />
  <<< @/docs/.vuepress/components/region-picker/readonly.vue
</source-block>

## 更多配置
<source-block>
  <region-picker-more />
  <<< @/docs/.vuepress/components/region-picker/more.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 值 | Array | - | - |
| size   | 尺寸 | String | larger/large/small | - |
| item-width   | 每个选项的宽度 | String | - | - |
| disabled   | 禁用状态   | Boolean    | - | false   |
| readonly |  只读状态  | Boolean   | - | false |
| pca-json   | 省市区数据源 | Object | - | {} [参考数据格式](https://github.com/modood/Administrative-divisions-of-China/blob/master/dist/pca.json) |
| province-hidden   | 省份隐藏 | Boolean | - | false |
| province-disabled   | 省份禁用 | Boolean | - | false |
| province-readonly   | 省份只读 | Boolean | - | false |
| city-hidden   | 城市隐藏 | Boolean | - | false |
| city-disabled   | 城市禁用 | Boolean | - | false |
| city-readonly   | 城市只读 | Boolean | - | false |
| county-hidden   | 区县隐藏 | Boolean | - | false |
| county-disabled   | 区县禁用 | Boolean | - | false |
| county-readonly   | 区县只读 | Boolean | - | false |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| change  | 值改变事件  | value  |
