<template>
  <label :class="_class">
    <input
      type="radio"
      @change="onChange"
      :checked="curValue"
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

  const name = 'gd-radio';

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
    },
    data () {
      return {
        curValue: this.value,
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
      // 响应选中状态
      value (value) {
        this.curValue = value;
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
