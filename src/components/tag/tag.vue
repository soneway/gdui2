<template>
  <div :class="_class">
    <slot></slot><gd-icon icon="close" @click="handleClose"></gd-icon>
  </div>
</template>
<script>
  const name = 'gd-tag';
  export default {
    name,
    props: {
      size: {
        type: String,
        default: 'default',
      },
      type: {
        type: String,
        default: '',
      },
    },
    computed: {
      _class () {
        return `${name} ${name}-${this.size}` + (this.type ? ` ${name}-${this.type}` : ``);
      },
    },
    methods: {
      handleClose (event) {
        this.$emit('close', this.getTagText(event));
      },
      getTagText (event) {
        return event.srcElement.parentElement.innerText.trim();
      },
    },

  };
</script>
