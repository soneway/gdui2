<template>
  <div>
    <gd-button @click="onClick">Confirm</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$confirm({
          content: Date.now(),
          onOkClick () {
            console.log('点击了确定');
          },
          onCancelClick () {
            console.log('点击了取消');
          },
        });
      },
    },
  };
</script>
