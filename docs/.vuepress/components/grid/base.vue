<template>
  <div class="grid-base">
    <gd-row>
      <gd-col :span="3">
        <div>
          span3
        </div>
      </gd-col>
      <gd-col :span="3">
        <div>
          span3
        </div>
      </gd-col>
      <gd-col :span="3">
        <div>
          span3
        </div>
      </gd-col>
      <gd-col :span="3">
        <div>
          span3
        </div>
      </gd-col>
    </gd-row>

    <gd-row>
      <gd-col :span="4">
        <div>
          span4
        </div>
      </gd-col>
      <gd-col :span="4">
        <div>
          span4
        </div>
      </gd-col>
      <gd-col :span="4">
        <div>
          span4
        </div>
      </gd-col>
    </gd-row>
  </div>
</template>

<style lang="less">
  .grid-base {

    .gd-row {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }

    .gd-col {
      & > div {
        background: #eee;
        height: 100px;
      }
    }

  }
</style>
