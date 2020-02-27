<template>
  <label :class="_class">
    <input
      type="checkbox"
      @change="onChange"
      :checked="curValue"
      :indeterminate="curIndeterminate"
      v-bind="$attrs"
      @click="onClick"
    />
    <span></span>
    <slot></slot>
  </label>
</template>

<script>
  import FormSize from '../../scripts/mixins/form-size';
  import WatchCurValue from '../../scripts/mixins/watch-cur-value';

  const name = 'gd-checkbox';

  export default {
    name,
    mixins: [
      FormSize,
      WatchCurValue,
    ],
    props: {
      disabled: Boolean,
      readonly: Boolean,
      value: Boolean,
      indeterminate: Boolean,
    },
    data () {
      return {
        curValue: this.value,
        curIndeterminate: this.indeterminate,
      };
    },
    computed: {
      _class () {
        return [
          `${name}`,
          {
            [`${name}-disabled`]: this.disabled,
            [`${name}-readonly`]: this.readonly,
            [`${name}-${this.curSize}`]: this.curSize,
          },
        ];
      },
    },
    watch: {
      // 响应半选中状态
      indeterminate (value) {
        this.curIndeterminate = value;

        // 半选中为true时, 选中为false
        if (value) {
          this.curValue = false;
        }
      },

      // 响应选中状态
      value (value) {
        this.curValue = value;
      },

      curValue (value) {
        // 选中为true时, 半选中为false
        if (value) {
          this.curIndeterminate = false;
        }
      },
    },

    methods: {
      onChange (event) {
        const { checked } = event.target;
        this.$emit('change', checked);
        this.curValue = checked;
      },

      onClick (event) {
        this.$emit('click', event);
      },
    },
  };
</script>
