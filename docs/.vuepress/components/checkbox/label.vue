<template>
  <div class="checkbox-base">
    <div style="line-height: 30px;">
      <gd-checkbox
        v-model="inputValue"
        name="哈哈哈">哈哈呵呵你好吧
      </gd-checkbox>
    </div>
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
