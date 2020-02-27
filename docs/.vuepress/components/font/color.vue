<template>
  <div class="font-base">
    <span class="title">一级文本 @title-color</span>
    <span>二级文本 @text-color</span>
    <span class="text-light">三级文本 @text-color-light</span>
    <span class="text-lighter">提示文本 @text-color-lighter</span>
    <span class="disabled">禁用文本 @disabled-color</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .font-base {
    .title {
      color: @title-color;
    }

    .text-light {
      color: @text-color-light;
    }

    .text-lighter {
      color: @text-color-lighter;
    }

    .disabled {
      color: @disabled-color;
    }

  }
</style>
