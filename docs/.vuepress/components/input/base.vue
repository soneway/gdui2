<template>
  <div class="input-base">
    <gd-input
      v-model="inputValue"
      placeholder="请输入"
      :maxlength="100">
    </gd-input>
    <gd-input
      v-model="inputValue"
      type="textarea"
      rows="5"
      placeholder="请输入">
    </gd-input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputValue: 2,
      };
    },
  };
</script>

<style lang="less">
  .input-base {

    .gd-input {
      vertical-align: top;
    }

  }
</style>
