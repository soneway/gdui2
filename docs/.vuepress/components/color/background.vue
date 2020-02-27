<template>
  <div class="color-base">
    <span class="background">背景 @background-color</span>
    <span class="background-light">淡背景 @background-color-light</span>
    <span class="background-dark">暗背景 @background-color-dark</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {
    .background {
      background: @background-color;
      color: inherit;
    }

    .background-light {
      background: @background-color-light;
      color: inherit;
    }

    .background-dark {
      background: @background-color-dark;
      color: inherit;
    }

  }
</style>
