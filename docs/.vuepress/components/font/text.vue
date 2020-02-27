<template>
  <div class="font-base">
    <span class="small">说明文字 @font-size-small</span>
    <span>正文文字 @font-size</span>
    <span class="large">表格二级标题 @font-size-large</span>
    <span class="larger">表格一级标题 @font-size-larger</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .font-base {

    & > span {
      display: inline-block;
      margin-right: 30px;
    }

    .small {
      font-size: @font-size-small;
    }

    .large {
      font-size: @font-size-large;
    }

    .larger {
      font-size: @font-size-larger;
    }

  }
</style>
