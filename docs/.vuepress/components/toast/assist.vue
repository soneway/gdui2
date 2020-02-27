<template>
  <div>
    <gd-button @click="onClick('info')">Info</gd-button>
    <gd-button @click="onClick('success')">Success</gd-button>
    <gd-button @click="onClick('error')">Error</gd-button>
    <gd-button @click="onClick('warning')">Warning</gd-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick (type) {
        this.$toast[type]({
          content: Date.now(),
        });
      },
    },
  };
</script>
