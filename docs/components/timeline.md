# Timeline 时间轴

## 基础用法
<source-block>
  <timeline-base />
  <<< @/docs/.vuepress/components/timeline/base.vue
</source-block>

## 时间左侧展示
<source-block>
  <timeline-placement />
  <<< @/docs/.vuepress/components/timeline/placement.vue
</source-block>


## 属性配置
### Timeline props

| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placement   | 时间展示位置  | String |   'left' 'right' |  right |
| time-width   | 左侧时间宽度(placement : 'left'有效)  | Number |   - |  150 |

### TimelineItem props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active   | 是否选中  | Boolean |   - |  false |

### TimelineItem slots
| 名称 | 说明  |
|----- |----- |
| time  | 时间  |
| content  | 内容  |
| detail  | 详情  |
| dot  | 自定义时间轴节点  |

