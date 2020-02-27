import { getValueByPath } from 'utils-lib/dist/object';
import { findParentComponent } from 'utils-lib/dist/vue';

export default {
  props: {
    size: String,
  },
  computed: {
    // 父级表单
    parentForm () {
      return findParentComponent(this, 'gd-form');
    },

    // 尺寸
    curSize () {
      return this.size || getValueByPath(this.parentForm, 'size');
    },
  },
};
