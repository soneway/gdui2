<template>
  <div
    :class="_class"
    :style="_style">
    <slot></slot>
  </div>
</template>

<script>
  import { findParentComponent } from 'utils-lib/dist/vue';

  const name = 'gd-col';

  export default {
    name,
    props: {
      span: {
        type: Number,
        default: 12,
      },
    },
    computed: {
      _class () {
        return [
          name,
          `${name}-span${this.span}`,
        ];
      },
      _style () {
        const value = `${this.gutter / 2}px`;
        return {
          paddingLeft: value,
          paddingRight: value,
        };
      },

      gutter () {
        const row = findParentComponent(this, 'gd-row');
        return row.gutter;
      },
    },
  };
</script>
