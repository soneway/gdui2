<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  const name = 'gd-breadcrumb';

  export default {
    name,
    props: {
      separator: {
        type: String,
        default: '/',
      },
      border: Boolean,
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-border`]: this.border,
          },
        ];
      },
    },
    watch: {
      separator () {
        this.updateChildren();
      },
    },

    mounted () {
      this.updateChildren();
    },
    updated () {
      this.$nextTick(() => {
        this.updateChildren();
      });
    },

    methods: {
      updateChildren () {
        this.$children.forEach((child) => {
          child.separator = this.separator;
        });
      },
    },
  };
</script>
