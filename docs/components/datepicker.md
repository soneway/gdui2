# Datepicker 日期选择器

## 基础用法
<source-block>
  <datepicker-base />
  <<< @/docs/.vuepress/components/datepicker/base.vue
</source-block>

## 不同尺寸
<source-block>
  <datepicker-size />
  <<< @/docs/.vuepress/components/datepicker/size.vue
</source-block>

## 时间段
<source-block>
  <datepicker-range />
  <<< @/docs/.vuepress/components/datepicker/range.vue
</source-block>

## 年份
<source-block>
  <datepicker-year />
  <<< @/docs/.vuepress/components/datepicker/year.vue
</source-block>

## 月份
<source-block>
  <datepicker-month />
  <<< @/docs/.vuepress/components/datepicker/month.vue
</source-block>

## 时间
<source-block>
  <datepicker-time />
  <<< @/docs/.vuepress/components/datepicker/time.vue
</source-block>

## 日期时间
<source-block>
  <datepicker-datetime />
  <<< @/docs/.vuepress/components/datepicker/datetime.vue
</source-block>

## 带确认按钮
<source-block>
  <datepicker-confirm />
  <<< @/docs/.vuepress/components/datepicker/confirm.vue
</source-block>

## 只读
<source-block>
  <datepicker-readonly />
  <<< @/docs/.vuepress/components/datepicker/readonly.vue
</source-block>

## 禁用
<source-block>
  <datepicker-disabled />
  <<< @/docs/.vuepress/components/datepicker/disabled.vue
</source-block>


## 属性配置
### props
| 参数  | 说明    | 类型  | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model  | 值   | String  | - |  - |
| size  | 尺寸   | String  | larger/large/small |  - |
| value-type  | 值类型   | String  | timestamp/date/format |  date |
| placeholder  | 占位符   | String  | - |  - |
| format  | 日期格式   | String  | - | YYYY-MM-DD |
| type  | 类型   | String  | date/datetime/time/year/month |  date |
| range  | 是否选择时间段   | Boolean  | - |  false |
| disabled   | 禁用状态   | Boolean    | - | false   |
| readonly |  只读状态  | Boolean   | - | false |
| confirm  | 是否确认按钮   | Boolean  | - |  false |
| clearable  | 内容可清除   | Boolean  | - |  true |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |---|
| change  | 值改变事件  | value |
| clear  | 值清除事件  | - |
| blur  | blur事件  | event |
| focus  | focus事件  | event |
