import Vue from 'vue';
import Toast from './toast';

const Instance = new Vue({
  render: h => h(Toast),
});

const component = Instance.$mount();
document.body.appendChild(component.$el);
const instance = Instance.$children[0];

export default instance;
