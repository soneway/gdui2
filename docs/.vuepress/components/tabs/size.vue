<template>
  <div class="tabs-size">
    <gd-tabs size="small">
      <gd-tabs-pane
        icon="search"
        label="菜单1">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单2">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单3">
      </gd-tabs-pane>
    </gd-tabs>
    <gd-tabs>
      <gd-tabs-pane label="菜单1">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单2">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单3">
      </gd-tabs-pane>
    </gd-tabs>
    <gd-tabs size="large">
      <gd-tabs-pane label="菜单1">
      </gd-tabs-pane>
      <gd-tabs-pane
        disabled="disabled"
        label="菜单2">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单3">
      </gd-tabs-pane>
    </gd-tabs>
    <gd-tabs size="larger">
      <gd-tabs-pane label="菜单1">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单2">
      </gd-tabs-pane>
      <gd-tabs-pane label="菜单3">
      </gd-tabs-pane>
    </gd-tabs>

  </div>
</template>

<style lang="less">
  .tabs-size {
    .gd-tabs {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
</style>
