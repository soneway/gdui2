<template>
  <div class="checkbox-base">
    <gd-checkbox
      v-model="inputValue">
    </gd-checkbox>
    <gd-checkbox
      :value="false">
    </gd-checkbox>
    <gd-checkbox
      indeterminate>
    </gd-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputValue: true,
      };
    },
  };
</script>

<style lang="less">
  .checkbox-base {
    .gd-checkbox {
      margin-right: 10px;
    }
  }
</style>
