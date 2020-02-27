# TreeX 树形组件增强版

## 基础用法
<source-block>
  <tree-x-base />
  <<< @/docs/.vuepress/components/tree-x/base.vue
</source-block>

## 异步加载
<source-block>
  <tree-x-async />
  <<< @/docs/.vuepress/components/tree-x/async.vue
</source-block>

## 自定义渲染
<source-block>
  <tree-x-render />
  <<< @/docs/.vuepress/components/tree-x/render.vue
</source-block>


## 属性配置
### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 数据 | Array  |  -  | - |
| dataProps | 数据配置，具体看下方 | Object  |  -  | - |
| multiple | 是否可多选 | Boolean  |  -  | false |
| selective | 是否可选 | Boolean  |  -  | true |
| checkedKeys | 当前勾选的 keys | Array  |  -  | [] |
| defaultCheckedKeys | 默认勾选的 keys | Array  |  -  | [] |
| selectedKeys | 当前选择的 keys | Array  |  -  | [] |
| filterName | 过滤，高亮节点 | String  |  -  | - |
| accordion | 手风琴模式 | Boolean  |  true/false  | false |
| combine | 是否合并节点输出 | Boolean  |  true/false  | false |
| show-checkbox | 是否显示筛选框 | Boolean  |  -  | false |
| branch-icon | 树枝节点图标[Icon](icon.html) | String  |  -  | - |
| switcher-icon | 树枝节点展开图标[Icon](icon.html) | String  |  -  | - |
| leaf-icon | 喷子节点图标[Icon](icon.html) | String  |  -  | - |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法 | Boolean  |  -  | false |
| check-directly | 开启后，在 show-checkbox 模式下，select 的交互也将转为 check | Boolean  |  -  | false |
| empty-text | 数据为空占位符 | String  |  -  | 暂无数据 |
| load-data | 异步加载数据函数 | Function  |  -  | - |
| render-content | 自定义渲染节点内容 | Function(h, {node, data})  |  -  | - |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- | --- |
| toggle  | 节点展开收缩事件  | node |
| selectchange  | 节点选中改变事件  | selectedNodes, node |
| checkchange  | 节点复选状态改变事件  | checkedNodes, checkedNodeKeys, Node |

### dataProps 
| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 指定节点展示名称 | String/Function | node => node.title | - |
| expand | 指定节点是否展开 | String/Function | node => node.expand |
| disabled | 指定节点是否禁用 | String/Function | node => node.disabled |
| leaf | 指定节点是否为叶子 | String/Function | node => node.leaf |
| id | 指定节点唯一key | String/Function | node => node.id |
| hidden | 指定节点是否隐藏 | String/Function | node => node.hidden |
| children | 指定节点子节点key | String/Function | node => node.children |
