import Vue from 'vue';
import PageLoading from './page-loading.vue';

const Instance = new Vue({
  render: h => h(PageLoading),
});

const component = Instance.$mount();
document.body.appendChild(component.$el);
const instance = Instance.$children[0];

export default instance;
