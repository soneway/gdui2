import Vue from 'vue';
import Confirm from './confirm';

const Instance = new Vue({
  render: h => h(Confirm),
});

const component = Instance.$mount();
document.body.appendChild(component.$el);
const instance = Instance.$children[0];

export default instance;
