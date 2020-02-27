<template>
  <div>
    <gd-button @click="onCustomClick">自定义</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onCustomClick () {
        this.$alert({
          content: () => <div>
            <h3>呵呵</h3>
            <p style="color:#00f;">你好</p>
          </div>,
          onOkClick () {
            console.log('点击了确定');
          },
        });
      },
    },
  };
</script>
