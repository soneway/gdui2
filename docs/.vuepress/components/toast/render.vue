<template>
  <div>
    <gd-button @click="onCustomClick">自定义</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onCustomClick () {
        this.$toast.show({
          content: () => <div>
            <h2>你好</h2>
            <p style="color:#f00">哈哈哈</p>
          </div>,
        });
      },
    },
  };
</script>
