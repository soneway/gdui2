<template>
  <div>
    <gd-button @click="onClick">Alert</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$alert({
          content: Date.now(),
          onOkClick () {
            console.log('点击了确定');
          },
        });
      },
    },
  };
</script>
