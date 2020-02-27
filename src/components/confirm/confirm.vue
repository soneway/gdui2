<template>
  <div :class="_class">
    <div
      v-if="withMask"
      :class="_maskClass">
    </div>

    <div :class="_boxClass">
      <h2
        :class="_titleClass"
        v-if="title">
        {{ title }}
      </h2>

      <RenderCell
        v-if="typeof content === 'function'"
        :render="content">
      </RenderCell>
      <div
        v-else
        :class="_contentClass">
        {{ content }}
      </div>

      <div :class="_footerClass">
        <Button
          type="primary"
          @click="onClick">
          {{ okText }}
        </Button>
        <Button
          v-if="!cancelHidden"
          @click="onBtnCancelClick">
          {{ cancelText }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '../button';
  import RenderCell from '../render-cell';

  const name = 'gd-confirm';

  const defaults = {
    // 标题
    title: '提示',
    // 内容
    content: '',
    // 确认按钮文字
    okText: '确认',
    // 取消按钮文字
    cancelText: '取消',
    // 是否有mask
    withMask: true,
    // 显示状态
    visible: false,
    // 确认按钮
    onOkClick: null,
    // 取消按钮
    onCancelClick: null,
  };

  export default {
    name,
    components: {
      Button,
      RenderCell,
    },
    props: {
      cancelHidden: Boolean,
    },
    data () {
      return {
        ...defaults,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            visible: this.visible,
          },
        ];
      },
      _maskClass () {
        return [
          `${name}-mask`,
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
        ];
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
      _boxClass () {
        return [
          `${name}-box`,
        ];
      },
      _footerClass () {
        return [
          `${name}-footer`,
        ];
      },
    },

    methods: {
      show (options = {}) {
        if (typeof options === 'string') {
          options = { content: options };
        }
        options = { ...defaults, ...options };
        const {
          title, content,
          okText, cancelText,
          onOkClick, onCancelClick,
          withMask,
        } = options;

        this.title = title;
        this.content = content;
        this.okText = okText;
        this.cancelText = cancelText;
        this.withMask = withMask;
        this.onOkClick = onOkClick;
        this.onCancelClick = onCancelClick;
        this.visible = true;
      },
      hide () {
        this.visible = false;
      },

      onClick () {
        this.hide();
        this.onOkClick && this.onOkClick();
      },
      onBtnCancelClick () {
        this.hide();
        this.onCancelClick && this.onCancelClick();
      },
    },
  };
</script>
