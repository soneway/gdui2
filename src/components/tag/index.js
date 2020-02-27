import Tag from './tag';

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
