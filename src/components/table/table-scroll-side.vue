<template>
  <div :class="`${prefix}-side`">
    <table :class="tableCls" cellspacing="0">
      <TColgroup :columns="columns" />
      <THead :columns="[columns]" :tr-style="trStyle">
        <slot name="thead" />
      </THead>
    </table>
    <div ref="side" :class="`${prefix}-side-inner`" :style="sideStyle">
      <table :class="tableCls">
        <TColgroup :columns="columns" />
        <TBody :row-style="curRowStyle" :data="data" :columns="columns" :empty-text="emptyText">
          <slot />
        </TBody>
      </table>
    </div>
  </div>
</template>

<script>
  import TBody from './table-body';
  import TColgroup from './table-colgroup';
  import THead from './table-head';
  const name = 'gd-table-scoll-side';
  const prefix = 'gd-table-scroll';
  export default {
    name,
    components: { TBody, TColgroup, THead },
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
      tableCls: {
        type: [Object, Array],
        default: () => ({}),
      },
      barWidth: Number,
      headerHeight: Number,
    },

    data () {
      return {
        prefix,
        topHeight: 0,
        $BODY: null,
      };
    },

    computed: {
      sideStyle () {
        return {
          top: `${this.headerHeight}px`,
          marginRight: `-${this.barWidth}px`,
        };
      },
      trStyle () {
        return {
          height: `${this.headerHeight - 1}px`,
        };
      },
    },

    mounted () {
      this.$nextTick(() => {
        this.$emit('mounted', this.$refs.side);
      });
    },

    methods: {
      getMainBody () {
        const dom = this.table.$el;
        if (!dom) return;
        const table = Array.prototype.find.call(dom.children || [], i => i.className === 'gd-table-scroll-content');
        this.$BODY = table.firstChild.lastChild;
      },

      curRowStyle (row, rowIdx) {
        if (!this.$BODY) this.getMainBody();
        if (!this.$BODY) return;
        let style = {};
        style.height = `${this.$BODY.children[rowIdx].offsetHeight}px`;

        if (this.rowStyle) {
          style = {
            ...style,
            ...this.rowStyle(row, rowIdx),
          };
        }
        return style;
      },
    },
  };
</script>

<style lang='less'>
</style>
