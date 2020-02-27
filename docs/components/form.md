# Form 表单

## 基础用法
<source-block>
  <form-base />
  <<< @/docs/.vuepress/components/form/base.vue
</source-block>

## 多列显示
<source-block>
  <form-multicol />
  <<< @/docs/.vuepress/components/form/multicol.vue
</source-block>

### 表单引擎
通过配置方式实现表单, 详情参考: [表单引擎文档](http://developers.soneway.com.cn/gyzwfw/form-engine/guide/start.html)


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model   | 表单数据对象 | Object | - | - |
| rules   | 表单校验规则, 规则参考[async-validator](https://github.com/yiminghe/async-validator) | Object | - | - |
| error-location   | 页面是否定位到校验出错的位置 | Boolean | - | false |
| size   | 表单元素尺寸 | String | larger/large/small | - |
| autocomplete   | autocomplete | Boolean | - | false |
| type   | 表单样式类型 | String | vertical | - |
| colcount   | 表单显示列数 | Number | 1, 2, 3, 4, 6, 12 | - |
| gutter   | col之间的间距 | Number | - | 30 |
| label-width   | label的宽度 | String | - | - |
| label-align   | label的文字对齐试 | String | - | - |

### methods
| 事件名 | 说明  | 返回值 | 参数 |
|----- |----- |----- |---|
| validate  | 表单校验函数  | -  | callback(isValid) |
| validateField  | 表单某字段校验函数  | -  | fieldProp, callback(isValid) |

### FormItem props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label   | 标签 | String | - | - |
| prop   | 对应的数据对象中的key | String | - | - |
| required   | 是否必填 | Boolean | - | false |
| rules   | 校验规则, 规则参考[async-validator](https://github.com/yiminghe/async-validator) | Object, Array | - | - |
| error   | 出错信息 | String | - | - |
| validate-status   | 校验状态 | String | - | - |
| label-for   | 标签for属性 | String | - | - |
| span   | 所占的横向格数(总数12) | Number | - | 12 / colcount |
| label-width   | label的宽度 | String | - | - |
| label-align   | label的文字对齐方式 | String | - | - |
