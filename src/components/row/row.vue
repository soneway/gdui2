<template>
  <div
    :class="_class"
    :style="_style">
    <slot></slot>
  </div>
</template>

<script>
  const name = 'gd-row';

  export default {
    name,
    props: {
      gutter: {
        type: Number,
        default: 30,
      },
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _style () {
        const value = `${-this.gutter / 2}px`;
        return {
          marginLeft: value,
          marginRight: value,
        };
      },
    },
  };
</script>
