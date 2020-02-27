<template>
  <div
    :class="_class"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    v-clickoutside="onClickOutSide">

    <div
      :class="_slotClass"
      @click="onSlotClick">
      <slot></slot>
    </div>

    <div
      :class="_popClass"
      :style="_popStyle">
      <div
        :class="_contentClass"
        @click="onContentClick">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
      <div :class="_arrowClass"></div>
    </div>

  </div>
</template>

<script>
  import clickoutside from 'utils-lib/dist/clickoutside';
  import { getValueByPath } from 'utils-lib/dist/object';

  const name = 'gd-poptip';

  export default {
    name,
    directives: {
      clickoutside,
    },
    props: {
      placement: {
        type: String,
        default: 'top',
      },
      content: String,
      trigger: {
        type: String,
        default: 'hover',
      },
      width: String,
      outsideClosable: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        visible: false,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-${this.placement}`]: this.placement,
          },
        ];
      },
      _slotClass () {
        return [
          `${name}-slot`,
        ];
      },
      _popClass () {
        return [
          `${name}-pop`,
          {
            visible: this.visible,
          },
        ];
      },
      _popStyle () {
        const length = getValueByPath(this.content, 'length');
        const contentWidth = length > 30 && `${length / 4.4}em`;
        return {
          width: this.width || contentWidth,
        };
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
      _arrowClass () {
        return [
          `${name}-arrow`,
        ];
      },
    },

    methods: {
      onMouseenter () {
        if (this.trigger === 'hover') {
          this.visible = true;
        }
      },
      onMouseleave () {
        if (this.trigger === 'hover') {
          this.visible = false;
        }
      },

      // 插槽点击
      onSlotClick () {
        if (this.trigger === 'click') {
          this.visible = !this.visible;
        }
      },

      hidePop () {
        this.visible = false;
      },

      // 气泡内容显示
      onContentClick ({ target }) {
        let node = target;
        while (node) {
          // 如有关闭气泡属性
          if (node.getAttribute('data-close-poptip') !== null) {
            this.hidePop();
            break;
          }
          if (node === this.$el) {
            break;
          }
          node = node.parentNode;
        }
      },

      // 外面点击
      onClickOutSide () {
        if (this.outsideClosable) {
          this.hidePop();
        }
      },
    },
  };
</script>
