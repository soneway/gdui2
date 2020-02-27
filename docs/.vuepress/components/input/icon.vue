<template>
  <div class="input-base">
    <gd-input
      placeholder="请输入"
      icon="members"
      @iconclick="onIconClick">
    </gd-input>
    <gd-input
      placeholder="请输入"
      icon="members"
      suffix-icon="search">
    </gd-input>
  </div>
</template>

<script>
  export default {
    methods: {
      onIconClick () {
        console.log('点击了图标');
      },
    },
  };
</script>
