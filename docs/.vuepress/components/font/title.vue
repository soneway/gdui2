<template>
  <div class="font-title">
    <span class="head-small">页面二级标题 @head-font-size-small</span>
    <span class="head">页面一级标题 @head-font-size</span>
    <span class="head-large">二级数据 @head-font-size-large</span>
    <span class="head-larger">一级数据 @head-font-size-larger</span>
  </div>
</template>

<style lang="less">
  @import "../../../../src/styles/utils/index";

  .font-title {

    & > span {
      display: block;

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }

    .head-small {
      font-size: @head-font-size-small;
    }

    .head {
      font-size: @head-font-size;
    }

    .head-large {
      font-size: @head-font-size-large;
    }

    .head-larger {
      font-size: @head-font-size-larger;
    }

  }
</style>
