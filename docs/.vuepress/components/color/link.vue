<template>
  <div class="color-base">
    <span class="link">链接 @link-color</span>
    <span class="link-hover">链接悬停 @link-hover-color</span>
    <span class="link-active">链接激活 @link-active-color</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .color-base {
    .link {
      background: @link-color;
    }

    .link-hover {
      background: @link-hover-color;
    }

    .link-active {
      background: @link-active-color;
    }

  }
</style>
