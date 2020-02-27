<template>
  <div class="color-base">
    <span class="success">成功 @success-color</span>
    <span class="warning">警告 @warning-color</span>
    <span class="error">错误 @error-color</span>
    <span class="info">信息 @info-color</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {

    .success {
      background: @success-color;
    }

    .warning {
      background: @warning-color;
    }

    .error {
      background: @error-color;
    }

    .info {
      background: @info-color;
    }

  }
</style>
