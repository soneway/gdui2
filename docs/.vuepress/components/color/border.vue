<template>
  <div class="color-base">
    <span class="border">边框 @border-color</span>
    <span class="border-light">淡边框 @border-color-light</span>
    <span class="border-dark">暗边框 @border-color-dark</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {
    .border {
      background: @border-color;
    }

    .border-light {
      background: @border-color-light;
      color: inherit;
    }

    .border-dark {
      background: @border-color-dark;
    }

  }
</style>
