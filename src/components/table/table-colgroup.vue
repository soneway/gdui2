<template>

  <colgroup>
    <col
      v-for="(column, index) in columns"
      :key="index"
      :style="{width: `${column.width}px`, minWidth: `${column.width}px`}">
  </colgroup>
</template>

<script>
  const name = 'gd-table-colgroup';
  export default {
    name,
    props: {
      columns: {
        type: Array,
        default () {
          return [];
        },
      },
    },
  };
</script>

<style lang='less'>
</style>
