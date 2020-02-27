<template>
  <button
    :class="_class"
    :disabled="disabled"
    :type="htmlType"
    @click="onClick">
    <Loading v-if="loading"></Loading>

    <Icon
      :icon="icon"
      :class="_iconClass"
      v-if="icon && !loading">
    </Icon>

    <span v-if="!iconOnly"><slot></slot></span>

    <Icon
      :icon="suffixIcon"
      :class="_suffixIconClass"
      v-if="suffixIcon">
    </Icon>
  </button>
</template>

<script>
  import Icon from '../icon';
  import Loading from '../loading';
  import FormSize from '../../scripts/mixins/form-size';

  const name = 'gd-button';

  export default {
    name,
    components: {
      Icon,
      Loading,
    },
    mixins: [
      FormSize,
    ],
    props: {
      type: String,
      loading: Boolean,
      disabled: Boolean,
      icon: String,
      suffixIcon: String,
      // button的原生type
      htmlType: {
        type: String,
        default: 'button',
      },
      iconOnly: Boolean,
    },
    data () {
      return {};
    },
    computed: {
      _class () {
        return [
          `${name}`,
          {
            [`${name}-${this.type}`]: this.type,
            [`${name}-${this.curSize}`]: this.curSize,
            [`${name}-icon-only`]: this.iconOnly,
            [`${name}-loading`]: this.loading,
          },
        ];
      },
      _iconClass () {
        return [
          `${name}-icon`,
        ];
      },
      _suffixIconClass () {
        return [
          `${name}-suffix-icon`,
        ];
      },
    },

    methods: {
      onClick (event) {
        this.$emit('click', event);
      },
    },
  };
</script>
