# 快速上手

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

## 按需引入

借助 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

### 第1步: 安装 `babel-plugin-component`
```bash
npm install babel-plugin-component -D
```

### 第2步: 添加 babel.config/babelrc 配置：
```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "@soneway/gdui2",
        "libDir": "dist",
        "styleLibrary": {
          "base": false, 
          "name": "css"
        }
      }
    ]
  ]
}
```

### 第3步: 在less引入基础样式(不需要引用所有样式)
```less
@import "~@soneway/gdui2/dist/css/base.css";
```

### 第4步: 在js中引入部分需要用到的组件, 如：
```js
import Vue from 'vue';
import '@soneway/gdui2/dist/utils/ie';  // 引入 ie 兼容 js，不需兼容可无需引入
import {
  Alert,
  PageLoading,
  Confirm,
  Toast,
  
  Button,
  CheckItem,
  CheckList,
  Checkbox,
  ConfirmPoptip,
  Col,
  Datepicker,
  FormItem,
  Form,
  Header,
  Icon,
  Input,
  Loading,
  Modal,
  Option,
  Pagination,
  Poptip,
  Radio,
  Row,
  Select,
  Table,
  TabsPane,
  Tabs,
  Tag,
  Tree,
  Upload,
} from '@soneway/gdui2';

Vue.prototype.$alert = Alert.show;
Vue.prototype.$loading = PageLoading;
Vue.prototype.$confirm = Confirm.show;
Vue.prototype.$toast = Toast;

Vue.use(Button);
Vue.use(CheckItem);
Vue.use(CheckList);
Vue.use(Checkbox);
Vue.use(ConfirmPoptip);
Vue.use(Datepicker);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Modal);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Poptip);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Table);
Vue.use(TabsPane);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Upload);

```

> 注: 如按需引入的组件较多, 打包输出文件的体积可能会比总包引入方式的大
