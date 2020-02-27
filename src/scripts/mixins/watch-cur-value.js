import Emitter from 'utils-lib/dist/emitter';

export default {
  props: {
    // 禁止dispatch form.change
    dispatchChangeDisabled: Boolean,
  },
  mixins: [
    Emitter,
  ],
  watch: {
    curValue (value, oldValue) {
      // 值发生改变
      if (JSON.stringify(oldValue) !== JSON.stringify(value)) {
        // 双向绑定
        this.$emit('input', value);

        // 触发form中的change事件
        if (!this.dispatchChangeDisabled) {
          this.dispatch('gd-form-item', 'form.change', value);
        }
      }
    },
  },
};
