# Tree 树形组件

## 基础用法
<source-block>
  <tree-base />
  <<< @/docs/.vuepress/components/tree/base.vue
</source-block>

## 异步加载
<source-block>
  <tree-async />
  <<< @/docs/.vuepress/components/tree/async.vue
</source-block>

## 自定义渲染
<source-block>
  <tree-render />
  <<< @/docs/.vuepress/components/tree/render.vue
</source-block>


## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 数据 | Array  |  -  | - |
| multiple | 是否可多选 | Boolean  |  -  | false |
| children-key | 数据子数据的key | String  |  -  | children |
| show-checkbox | 是否显示筛选框 | Boolean  |  -  | false |
| branch-icon | 树枝节点图标[Icon](icon.html) | String  |  -  | - |
| leaf-icon | 喷子节点图标[Icon](icon.html) | String  |  -  | - |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法 | Boolean  |  -  | false |
| check-directly | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | Boolean  |  -  | false |
| empty-text | 数据为空占位符 | String  |  -  | 暂无数据 |
| load-data | 异步加载数据函数 | Function  |  -  | - |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- | --- |
| toggle  | 节点展开收缩事件  | node |
| selectchange  | 节点选中改变事件  | selectedNodes, node |
| checkchange  | 节点复选状态改变事件  | selectedNodes, node |

### methods
| 事件名 | 说明  | 参数 |
|----- |----- | --- |
| getSelectedNodes  | 获取选中节点  | - |
| getCheckedNodes  | 获取复选中节点  | - |

### children
| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 标题 | String | String | - |
| expand | 是否展开直子节点 | Boolean | false |
| disabled | 禁掉响应 | Boolean | false |
| disableCheckbox | 禁掉checkbox | Boolean | false |
| selected | 是否选中子节点 | Boolean | false |
| checked | 是否勾选(如果勾选，子节点也会全部勾选) | Boolean | false |
| children | 子节点属性数组 | Array | - |
| render | 自定义当前节点渲染内容，见示例 | Function | - |
