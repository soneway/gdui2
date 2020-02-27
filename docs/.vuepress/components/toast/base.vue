<template>
  <div>
    <gd-button @click="onClick">Toast</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.$toast.show({
          content: Date.now(),
        });
      },
    },
  };
</script>
