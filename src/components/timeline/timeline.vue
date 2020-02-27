<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  const name = 'gd-timeline';

  export default {
    name,
    props: {
      placement: {
        type: String,
        default: 'right', // 实现显示位置包括 'left' 和 'right'两种模式
      },
      timeWidth: {
        type: Number,
        default: 150,
      },
    },
    provide () {
      return {
        timeline: this,
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
    },
  };
</script>
