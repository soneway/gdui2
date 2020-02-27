<template>
  <div class="color-base">
    <span class="primary">主题 @primary-color</span>
    <span class="primary-dark">暗主题 @primary-color-dark</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {
    & > span {
      display: inline-block;
      width: 250px;
      padding: 20px;
      color: #fff;
      border-radius: 6px;
    }

    .primary {
      background: @primary-color;
    }

    .primary-dark {
      background: @primary-color-dark;
    }

  }
</style>
