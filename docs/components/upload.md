# Upload 文件上传

## 基础用法
<source-block>
  <upload-base />
  <<< @/docs/.vuepress/components/upload/base.vue
</source-block>

## 已上传文件列表
<source-block>
  <upload-file-list />
  <<< @/docs/.vuepress/components/upload/file-list.vue
</source-block>

## before-upload
- 使用before-upload的特性，`return false`则停止该文件，`return Promise.resolve(file)`则继续上传

<source-block>
  <upload-before-upload />
  <<< @/docs/.vuepress/components/upload/before-upload.vue
</source-block>

## 单个文件上传
<source-block>
  <upload-single />
  <<< @/docs/.vuepress/components/upload/single.vue
</source-block>

## 属性配置
### Upload props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action     | 上传的地址，必填  | String  |  -  |   - |
| headers     | 设置上传的请求头部  | Object  |  -  |   {} |
| text     | 上传组件点击区域文字  | String  |  -  |   点击选择本地文件 |
| multiple     | 是否支持多选文件  | Boolean  |  -  |   true |
| data     | 上传时附带的额外参数  | Object  |  -  |   {} |
| name     | 上传的文件字段名  | String  |  -  |   file |
| with-credentials     | 支持发送 cookie 凭证信息  | Boolean  |  -  |   false |
| max-size     | 文件大小限制，单位 kb  | number  |  -  |   - |
| accept     | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)  | String  | - | -  |
| format     | 支持的文件类型，识别文件的后缀名  | Array  |  -  |   [] |
| on-exceeded-size |  文件超出指定大小限制时的钩子，返回字段为 file, filesList  | Function |  -  |  -  |
| on-format-error |  文件格式验证失败时的钩子，返回字段为 file, fileList  | Function |  -  |  -  |
| before-upload |  上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传  | Function  |  -  |  -  |
| on-progress |  文件上传时的钩子，返回字段为 e, file  | Function |  -  |  -  |
| on-success |  文件上成功传时的钩子，返回字段为 res, file, filesList，可返回 Promise   | Function |  -  |  -  |
| on-error |  文件失败时的钩子，返回字段为 err, response, file  | Function |  -  |  -  |
| on-remove |  文件列表移除文件时的钩子，返回字段为 file, filesList，可返回 Promise  | Function |  -  |  -  |


### slots
| 参数      | 说明    |
|----- |----- |
| tip      | 上传组件说明文字  |

### events
| 事件名 | 说明  | 返回值 |
|----- |----- |----- |
| on-change-handler  | 发生改变时触发 | files  |
