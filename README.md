## 介绍
gdui2是基于vue研发的UI组件库, 类似element-ui

## 进入开发

### 第1步: 安装依赖
```bash
npm i @soneway/gdui2
```

### 第2步: js中注册组件
```javascript
import Vue from 'vue';
import UI from '@soneway/gdui2';
Vue.use(UI);
```

### 第3步: less中引用样式
```less
@import "~@soneway/gdui2/dist/css/index.css";
```

### 第4步: html中使用组件
```html
<gd-icon></gd-icon>
```

详情请参考: [gdui2文档](https://soneway.github.io/gdui2/docs-dist/guide/start.html)
