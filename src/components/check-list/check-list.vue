<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from 'utils-lib/dist/emitter';
  import GetListCurValue from '../../scripts/mixins/get-list-cur-value';
  import WatchCurValue from '../../scripts/mixins/watch-cur-value';
  import FormSize from '../../scripts/mixins/form-size';

  const name = 'gd-check-list';

  export default {
    name,
    mixins: [
      Emitter,
      GetListCurValue,
      WatchCurValue,
      FormSize,
    ],
    props: {
      value: [String, Number, Array, Boolean],
      multiple: Boolean,
      itemType: String,
      disabled: Boolean,
      readonly: Boolean,
    },
    provide () {
      return {
        checkList: this,
      };
    },
    data () {
      return {
        curValue: this.value,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-${this.itemType}`]: this.itemType,
            [`${name}-disabled`]: this.disabled,
            [`${name}-readonly`]: this.readonly,
            [`${name}-${this.curSize}`]: this.curSize,
          },
        ];
      },
    },
    watch: {
      value (value) {
        this.curValue = value;
      },
    },

    mounted () {
      this.$on('item.click', this.onItemClick);
    },

    methods: {
      // 选项点击
      onItemClick (target = {}) {
        const oldValue = this.curValue;
        const value = this.getListCurValue(target);

        // 设置值
        this.curValue = value;

        // 选项点击事件
        this.$emit('itemclick', value, oldValue);
        // change事件
        JSON.stringify(oldValue) !== JSON.stringify(value) && this.$emit('change', value);
      },
    },
  };
</script>
