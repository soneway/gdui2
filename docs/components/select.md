# Select 选择器

## 基础用法
<source-block>
  <select-base />
  <<< @/docs/.vuepress/components/select/base.vue
</source-block>

## 不同尺寸
<source-block>
  <select-size />
  <<< @/docs/.vuepress/components/select/size.vue
</source-block>

## 多选
<source-block>
  <select-multiple />
  <<< @/docs/.vuepress/components/select/multiple.vue
</source-block>

## 禁用
<source-block>
  <select-disabled />
  <<< @/docs/.vuepress/components/select/disabled.vue
</source-block>

## 只读
<source-block>
  <select-readonly />
  <<< @/docs/.vuepress/components/select/readonly.vue
</source-block>

## 民族选择
<source-block>
  <select-nation />
  <<< @/docs/.vuepress/components/select/nation.vue
</source-block>

## 数据源
<source-block>
  <select-data-source />
  <<< @/docs/.vuepress/components/select/data-source.vue
</source-block>

## 数据过滤
<source-block>
  <select-filterable />
  <<< @/docs/.vuepress/components/select/filterable.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model   | 选项值 | String, Number, Array | - | - |
| size | 尺寸   | String  |  larger/large/small  |    -  |
| placeholder   | 占位符 | String | - | - |
| disabled   | 禁用状态 | Boolean | - | false |
| readonly   | 只读状态 | Boolean | - | false |
| multiple   | 是否多选 | Boolean | - | false |
| type   | 选择器类型 | String | nation | - |
| filterable   | 是否开启筛选 | Boolean | true/false | false |
| data-source   | 选项数据源, 支持{label, value}对象数组, 也支持字符串数组 | Array | - | - |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| click  | 点击事件  | this  |
| optionclick  | 选项点击事件  | value, oldValue  |
| change  | 值改变事件  | value  |

### Option props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 选项值 | String, Number | - | - |
| label   | 选项文本 | String | - | - |
| disabled   | 禁用状态 | Boolean | - | false |
