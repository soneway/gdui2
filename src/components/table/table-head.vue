<template>
  <thead>
    <slot>
      <tr v-for="(i, idx) in columns" :key="idx" :style="trStyle">
        <th
          v-for="(column, index) in i"
          :key="index"
          :colspan="column._colSpan || undefined"
          :rowspan="column._rowSpan || undefined"
        >
          <RenderCell
            v-if="typeof column.title === 'function'"
            :render="column.title"
            :column="column"
            :index="index"
          />
          <template v-else>{{ column.title }}</template>
        </th>
      </tr>
    </slot>
  </thead>
</template>

<script>
  import RenderCell from '../render-cell';
  const name = 'gd-table-head';
  export default {
    name,
    components: {
      RenderCell,
    },
    props: {
      columns: {
        type: Array,
        default () {
          return [];
        },
      },

      trStyle: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<style lang='less'>
</style>
