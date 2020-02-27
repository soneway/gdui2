# Steps 步骤条

## 基础用法
<source-block>
  <steps-base />
  <<< @/docs/.vuepress/components/steps/base.vue
</source-block>

## Parallel
<source-block>
  <steps-parallel />
  <<< @/docs/.vuepress/components/steps/parallel.vue
</source-block>

## 不同尺寸
<source-block>
  <steps-size />
  <<< @/docs/.vuepress/components/steps/size.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active   | 当前项 | Number | - | 0 |
| type   | 样式类型 | String | parallel | - |
| size   | 尺寸 | larger/large/small | - | - |

### Step props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title   | 标题 | String | - | - |
| desc   | 描述 | String | - | - |

### Step events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| click  | 点击事件  | this  |
