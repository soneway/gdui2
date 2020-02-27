<template>
  <div class="tabs-base">
    <gd-tabs v-model="value">
      <gd-tabs-pane
        label="菜单1"
        value="菜单1">
        <div>111</div>
      </gd-tabs-pane>
      <gd-tabs-pane
        label="菜单2"
        value="菜单2">
        <div>222</div>
      </gd-tabs-pane>
      <gd-tabs-pane
        :label="label3"
        value="菜单3">
        <div>333</div>
      </gd-tabs-pane>
    </gd-tabs>
    {{value}}

  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '菜单1',
        label3: (h, { row, index }) => <div>{index}<b>哈哈哈</b></div>,
      };
    },
  };
</script>
