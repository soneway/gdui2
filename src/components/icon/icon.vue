<template>
  <i
    :class="_class"
    @click="onClick">
    <span><slot></slot></span>
  </i>
</template>
<script>
  const name = 'gd-icon';

  export default {
    name,
    props: {
      icon: String,
      size: String,
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`icon-${this.icon}`]: this.icon,
            [`${name}-${this.size}`]: this.size,
            [`${name}-with-icon`]: this.icon,
          },
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
