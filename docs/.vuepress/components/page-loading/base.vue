<template>
  <div>
    <gd-button @click="onClick">显示loading(有mask)</gd-button>
    <gd-button @click="onClickNoMask">显示loading(无mask)</gd-button>
    <gd-button @click="onClick2">显示loading</gd-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      onClick () {
        this.$loading.show('2s后关闭' + Date.now());

        setTimeout(() => {
          this.$loading.hide();
        }, 2000);
      },

      onClickNoMask () {
        this.$loading.show({
          loadingText: '3s后关闭' + Date.now(),
          withMask: false,
        });

        setTimeout(() => {
          this.$loading.hide();
        }, 3000);
      },

      onClick2 () {
        this.$loading.show();

        setTimeout(() => {
          this.$loading.hide();
        }, 3000);
      },
    },
  };
</script>
