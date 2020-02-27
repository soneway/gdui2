<template>
  <div class="radio-base">
    <gd-radio
      v-model="inputValue">
    </gd-radio>
    <gd-radio
      :value="inputValue">
    </gd-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputValue: false,
      };
    },
  };
</script>

<style lang="less">
  .radio-base {
    .gd-radio {
      margin-right: 10px;
    }
  }
</style>
