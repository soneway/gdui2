<template>
  <div class="color-base">
    <span class="title">标题 Title</span>
    <span class="text">文本 Text</span>
    <span class="text-light">次要文本 TextLight</span>
    <span class="disabled">禁用 Disabled</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {
    .title {
      background: @title-color;
    }

    .text {
      background: @text-color;
    }

    .text-light {
      background: @text-color-light;
    }

    .disabled {
      background: @disabled-color;
    }

  }
</style>
