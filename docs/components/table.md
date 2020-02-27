# Table 表格

## 基础用法
<source-block>
  <table-base />
  <<< @/docs/.vuepress/components/table/base.vue
</source-block>

## 带边框
<source-block>
  <table-border />
  <<< @/docs/.vuepress/components/table/border.vue
</source-block>

## 带斑马纹
<source-block>
  <table-stripe />
  <<< @/docs/.vuepress/components/table/stripe.vue
</source-block>

## Larger
<source-block>
  <table-larger />
  <<< @/docs/.vuepress/components/table/larger.vue
</source-block>

## Large
<source-block>
  <table-large />
  <<< @/docs/.vuepress/components/table/large.vue
</source-block>

## Small
<source-block>
  <table-small />
  <<< @/docs/.vuepress/components/table/small.vue
</source-block>


## 固定表头
#### 固定头
方便一页内展示大量数据。

需要指定 column 的 width 属性，否则列头和内容可能不对齐。如果指定 width 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。

#### 固定列
对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.x 配合使用。

若列头与内容不对齐或出现列重复，请指定固定列的宽度 width。如果指定 width 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。

建议指定 scroll.x 为大于表格宽度的固定值。注意，且非固定列宽度之和不要超过 scroll.x。

<source-block>
  <table-scroll />
  <<< @/docs/.vuepress/components/table/scroll.vue
</source-block>


## 合并单元格
 表格支持行/列合并，使用 colSpan/rowSpan 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会显示。

<source-block>
  <table-combine />
  <<< @/docs/.vuepress/components/table/combine.vue
</source-block>



## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| columns   | 表格列配置  | Array |   - |  - |
| data | 数据 | Array |  - | - |
| scroll | 表头固定 | Object |  {x: String, y: String} | null |
| border    | 是否带边框  | Boolean   |   -   | false |
| stripe    | 是否带斑马线    | Boolean   |   -    | false |
| size | 表格尺寸  | String| small/large/larger | - |
| empty-text | 空数据文案 | String   |  -  | 暂无数据 |
