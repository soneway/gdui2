import Pane from '../tabs/pane';

Pane.install = function (Vue) {
  Vue.component(Pane.name, Pane);
};

export default Pane;
