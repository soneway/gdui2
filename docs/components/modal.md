# Modal 模态框

## 基础用法

<source-block>
  <modal-base />
  <<< @/docs/.vuepress/components/modal/base.vue
</source-block>


## 属性配置

### props
| 参数 | 说明    | 类型 | 可选值  | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model | 是否显示 | Boolean | - | false |
| size | 尺寸   | String  |  larger/large/small  |  -  |
| title| 模态窗标题   | String  |    —    |  -  |
| ok-text | 确定按钮文字内容 | String |  -  | 确认 |
| cancel-text |  取消按钮文字内容 | String |  -  | 取消 |
| close-hidden  | 右上色关闭按钮隐藏  |  Boolean  |  -  |  false  |
| mask-closable  | 点击遮罩层是否关闭模态框  |  Boolean  |  -  |  false  |
| footer-hidden  | 是否隐藏footer  |  Boolean  |  -  |  false  |
| with-mask  | 是否带蒙层  |  Boolean  |  -  |  true  |
| ok-loading  | 确定按钮loading状态  |  Boolean  |  -  |  false  |
| keep-alive  | modal内容是否缓存  |  Boolean  |  -  |  true  |

### events
| 名称 | 说明  | 返回值 |
|----- |----- |----- |
| okclick  | 确定点击事件  | event  |
| cancelclick| 取消点击事件   | event |
| visiblechange| 显示状态变化事件   | visible |

### slots
| 名称 | 说明  |
|----- |----- |
| -  | 内容  |
| header | 头部   |
| footer | 脚部   |
