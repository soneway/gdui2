<template>
  <tbody>
    <slot>
      <template v-if="data.length">
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          :style="rowStyle && rowStyle(row, rowIndex)"
          :class="{hover: table.activeIndex === rowIndex}">
          <template v-for="(column, index) in columns">
            <td
              :key="index"
              :style="column.style"
              :rowspan="getRowSpan(column, row, rowIndex, index)"
              :colspan="getColSpan(column, row, rowIndex, index)">
              <RenderCell
                v-if="column.render"
                :render="column.render"
                :index="rowIndex"
                :row="row" />
              <template v-else>
                {{ row[column.key] }}
              </template>
            </td>
          </template>
        </tr>
      </template>
      <tr v-else>
        <td
          :colspan="columns.length"
          :class="_emptyTextClass">
          {{ emptyText }}
        </td>
      </tr>
    </slot>
  </tbody>
</template>

<script>
  import RenderCell from '../render-cell';

  const name = 'gd-table-body';
  const prefix = 'gd-table';

  export default {
    name,
    components: { RenderCell },
    inject: [
      'table',
    ],
    props: {
      columns: {
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
    computed: {
      _emptyTextClass () {
        return [
          `${prefix}-empty-text`,
        ];
      },
    },
    methods: {
      getRowSpan (column, row, trIdx, tdIdx) {
        if (!column.rowSpan) return undefined;
        return column.rowSpan(row, trIdx, tdIdx);
      },

      getColSpan (column, row, trIdx, tdIdx) {
        if (!column.colSpan) return undefined;
        return column.colSpan(row, trIdx, tdIdx);
      },
    },
  };
</script>

<style lang='less'>
</style>
