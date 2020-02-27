import Vue from 'vue';
import Alert from './alert';

const Instance = new Vue({
  render: h => h(Alert),
});

const component = Instance.$mount();
document.body.appendChild(component.$el);
const instance = Instance.$children[0].$refs.confirm;

export default instance;
