<template>
  <a
    :class="_class"
    v-show="visible"
    @click.stop="onClick">
    {{ label || value }}
  </a>
</template>

<script>
  import Emitter from 'utils-lib/dist/emitter';
  import GetItemChecked from '../../scripts/mixins/get-item-checked';

  const name = 'gd-option';

  export default {
    name,
    mixins: [
      Emitter,
      GetItemChecked,
    ],
    inject: [
      'select',
    ],
    props: {
      value: [String, Number],
      label: String,
      disabled: Boolean,
    },
    computed: {
      _class () {
        return [
          name,
          {
            checked: this.checked,
            [`${name}-disabled`]: this.disabled,
          },
        ];
      },

      checked () {
        return this.getItemChecked(this.select);
      },

      visible () {
        if (!this.select.filterable) return true;

        const query = this.select.query === undefined ? '' : this.select.query;
        return (this.label || '').includes(query);
      },
    },

    created () {
      this.updateOptions();
    },

    updated () {
      this.updateOptions();
    },

    methods: {
      updateOptions () {
        if (!this.select.curDataSource) {
          const fn = this.select.generateOptions;
          typeof fn === 'function' && fn();
        }
      },

      onClick () {
        this.dispatch('gd-select', 'option.click', this);
        this.$emit('click', this);
      },
    },
  };
</script>
