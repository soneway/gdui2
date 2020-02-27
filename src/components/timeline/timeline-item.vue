<template>
  <div :class="_class" :style="_itemStyle">
    <div class="gd-timeline-item-tail" :style="_lineStyle"></div>
    <div class="gd-timeline-item-dot" :style="_lineStyle">
      <slot name="dot">
        <div class="gd-timeline-item-dot__default"></div>
      </slot>
    </div>
    <div :class="_timeClass" :style="_timeStyle">
      <slot name="time"></slot>
    </div>
    <div :class="_rightClass">
      <div :class="_contentClass">
        <slot name="content"></slot>
      </div>
      <div :class="_detailClass">
        <slot name="detail"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  const name = 'gd-timeline-item';

  export default {
    name,
    inject: ['timeline'],
    props: {
      active: Boolean,
    },

    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-active`]: this.active,
          },
        ];
      },
      _timeClass () {
        return [
          `${name}-time`,
        ];
      },
      _rightClass () {
        return [
          `${name}-right`,
        ];
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
      _detailClass () {
        return [
          `${name}-detail`,
        ];
      },
      _lineStyle () {
        return {
          left: this.timeline.placement === 'left' ? `${this.timeline.timeWidth}px` : 0,
        };
      },
      _itemStyle () {
        return {
          paddingLeft: this.timeline.placement === 'left' ? `${this.timeline.timeWidth}px` : '',
        };
      },
      _timeStyle () {
        if (this.timeline.placement === 'left') {
          return {
            width: `${this.timeline.timeWidth}px`,
            marginLeft: `${-this.timeline.timeWidth}px`,
          };
        }
        return null;
      },
    },
  };
</script>
