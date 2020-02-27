<template>
  <div :class="_class">
    <div
      v-if="withMask"
      :class="_maskClass"
      @click="onMaskClick">
    </div>

    <div :class="_boxClass">

      <slot name="header">
        <h2
          :class="_titleClass"
          v-if="title">{{ title }}
        </h2>
      </slot>

      <slot v-if="keepAlive || visible"></slot>

      <slot
        name="footer"
        v-if="!footerHidden">
        <div :class="_footerClass">
          <Button
            type="thin"
            :size="size"
            @click="onCancelClick">{{ cancelText }}
          </Button>
          <Button
            :size="size"
            type="primary"
            :loading="okLoading"
            @click="onOkClick">{{ okText }}
          </Button>
        </div>
      </slot>

      <Icon
        v-if="!closeHidden"
        :size="size"
        icon="close"
        :class="_closeClass"
        @click="onCancelClick">
      </Icon>

    </div>

  </div>
</template>

<script>
  import Button from '../button';
  import Icon from '../icon';

  const name = 'gd-modal';

  export default {
    name,
    components: {
      Button,
      Icon,
    },
    props: {
      value: Boolean,
      title: String,
      size: String,
      okText: {
        type: String,
        default: '确认',
      },
      okLoading: Boolean,
      cancelText: {
        type: String,
        default: '取消',
      },
      closeHidden: Boolean,
      withMask: {
        type: Boolean,
        default: true,
      },
      maskClosable: Boolean,
      footerHidden: Boolean,
      // modal内容是否缓存状态
      keepAlive: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        visible: this.value,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            visible: this.visible,
            [`${name}-${this.size}`]: this.size,
            [`${name}-dead`]: !this.keepAlive,
          },
        ];
      },
      _maskClass () {
        return [
          `${name}-mask`,
        ];
      },
      _boxClass () {
        return [
          `${name}-box`,
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
        ];
      },
      _footerClass () {
        return [
          `${name}-footer`,
        ];
      },
      _closeClass () {
        return [
          `${name}-close`,
        ];
      },
    },
    watch: {
      value (value) {
        this.setVisible(value);
      },
    },

    methods: {
      onOkClick () {
        this.$emit('okclick');
      },
      onCancelClick () {
        this.setVisible(false);
        this.$emit('cancelclick');
      },
      onMaskClick () {
        this.maskClosable && this.setVisible(false);
      },

      setVisible (value) {
        this.visible = value;
        // v-model
        this.$emit('input', value);
        // visiblechange事件
        this.$emit('visiblechange', value);
      },
    },
  };
</script>
