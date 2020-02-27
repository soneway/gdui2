<template>
  <TableScroll
    v-if="scroll"
    :table-cls="_class"
    v-bind="$props"
    :head-columns="headColumns"
    :body-columns="bodyColumns"
    @mouseover.native="onMouseOver"
    @mouseout.native="activeIndex = -1"
  >
    <slot slot="thead" name="thead" />
    <slot />
  </TableScroll>
  <TableBase
    v-else
    :class="_class"
    v-bind="$props"
    :head-columns="headColumns"
    :body-columns="bodyColumns"
  >
    <slot slot="thead" name="thead" />
    <slot />
  </TableBase>
</template>

<script>
  import TableBase from './table-base';
  import TableScroll from './table-scroll';

  const name = 'gd-table';

  export default {
    name,
    components: {
      TableBase,
      TableScroll,
    },
    provide () {
      return {
        table: this,
      };
    },
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
      // 带边框
      border: Boolean,
      // 带斑马纹
      stripe: Boolean,
      size: String,
      emptyText: {
        type: String,
        default: '暂无数据',
      },
      rowStyle: Function,
      scroll: {
        type: Object,
        default: () => null,
        validator: val => val.x || val.y,
      },
    },
    data () {
      return {
        activeIndex: -1,
        headColumns: [],
        bodyColumns: [],
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-border`]: this.border,
            [`${name}-stripe`]: this.stripe,
            [`${name}-${this.size}`]: this.size,
          },
        ];
      },
    },
    watch: {
      columns: {
        immediate: true,
        handler (val) {
          const value = (val && val.length && val) || [];
          this.headColumns = this.getHeadColumns(this.groupColumns(value));
          this.bodyColumns = this.getBodyColumns(this.columns);
        },
      },
    },
    methods: {
      onMouseOver (e) {
        let target = e.target;
        const name = 'TR';

        while (target && target.tagName !== name) {
          target = target.parentNode;
        }
        if (!target || (target.parentNode && target.parentNode.tagName === 'THEAD')) return;

        if (target.tagName === name) {
          this.activeIndex = target.rowIndex;
        }
      },

      groupColumns (
        columns,
        currentRow = 0,
        parentColumn = {},
        rows = []
      ) {
        rows[currentRow] = rows[currentRow] || [];
        const grouped = [];
        const setRowSpan = column => {
          const _rowSpan = rows.length - currentRow;
          if (
            column &&
            !column.children &&
            _rowSpan > 1 &&
            (!column._rowSpan || column._rowSpan < _rowSpan)
          ) {
            column._rowSpan = _rowSpan;
          }
        };
        columns.forEach((column, index) => {
          const newColumn = { ...column };
          rows[currentRow].push(newColumn);
          parentColumn._colSpan = parentColumn._colSpan || 0;
          if (newColumn.children && newColumn.children.length > 0) {
            newColumn.children = this.groupColumns(
              newColumn.children,
              currentRow + 1,
              newColumn,
              rows
            );
            parentColumn._colSpan += newColumn._colSpan;
          }
          else {
            parentColumn._colSpan += 1;
          }
          for (let i = 0; i < rows[currentRow].length - 1; i += 1) {
            setRowSpan(rows[currentRow][i]);
          }
          if (index + 1 === columns.length) {
            setRowSpan(newColumn);
          }
          grouped.push(newColumn);
        });
        return grouped;
      },

      getHeadColumns (columns, currentRow = 0, rows = []) {
        rows[currentRow] = rows[currentRow] || [];
        columns.forEach(i => {
          const item = {
            ...i,
          };
          if (item.children && item.children.length) {
            this.getHeadColumns(item.children, currentRow + 1, rows);
          }
          rows[currentRow].push(item);
        });

        return rows.filter(row => row.length > 0);
      },

      getBodyColumns (columns) {
        const rows = [];
        columns.forEach(column => {
          if (!column.children) {
            rows.push(column);
          }
          else {
            rows.push(...this.getBodyColumns(column.children));
          }
        });
        return rows;
      },

    },
  };
</script>
