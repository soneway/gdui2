<template>
  <table cellspacing="0">
    <TColgroup :columns="bodyColumns" />
    <THead :columns="headColumns">
      <slot name="thead" />
    </THead>
    <TBody :row-style="rowStyle" :data="data" :columns="bodyColumns" :empty-text="emptyText">
      <slot />
    </TBody>
  </table>
</template>

<script>
  import TBody from './table-body';
  import TColgroup from './table-colgroup';
  import THead from './table-head';
  const name = 'gd-table-base';
  export default {
    name,
    components: { TBody, TColgroup, THead },
    props: {
      headColumns: {
        type: Array,
        default () {
          return [];
        },
      },
      bodyColumns: {
        type: Array,
        default () {
          return [];
        },
      },
      data: {
        type: Array,
        default () {
          return [];
        },
      },
      emptyText: {
        type: String,
        default: '暂无数据',
      },
      rowStyle: Function,
    },
  };
</script>

<style lang='less'>
</style>
