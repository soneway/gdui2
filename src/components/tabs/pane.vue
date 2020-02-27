<template>
  <div :class="_class">
    <slot v-if="keepAlive || curValue === tabs.curValue"></slot>
  </div>
</template>

<script>
  const name = 'gd-tabs-pane';

  export default {
    name,
    props: {
      label: {
        required: true,
      },
      value: [String, Number],
      icon: String,
      disabled: Boolean,
      keepAlive: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        curValue: this.value,
      };
    },
    inject: [
      'tabs',
    ],
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-visible`]: this.curValue === this.tabs.curValue,
          },
        ];
      },
    },
  };
</script>
