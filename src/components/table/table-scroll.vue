<template>
  <div :class="`${prefix}-scroll-wrapper`">
    <div ref="head" :class="`${prefix}-scroll-header`" :style="headStyle">
      <table :class="tableCls" :style="tableStyle">
        <TColgroup :columns="bodyColumns" />
        <THead :columns="headColumns">
          <slot name="thead" />
        </THead>
      </table>
    </div>

    <div ref="content" :class="`${prefix}-scroll-content`" :style="contentStyle">
      <table :class="tableCls" :style="tableStyle" cellspacing="0">
        <TColgroup :columns="bodyColumns" />
        <TBody :row-style="rowStyle" :data="data" :columns="bodyColumns" :empty-text="emptyText">
          <slot />
        </TBody>
      </table>
    </div>

    <TScrollSide
      v-if="fixedLeftColumns && fixedLeftColumns.length"
      :class="[`${prefix}-scroll-left`, {'no-shadow': arriveLeft}]"
      :columns="fixedLeftColumns"
      v-bind="$props"
      :style="getSideStyle()"
      :bar-width="barWidth"
      :header-height="theadHeight"
      @mounted="onLeftSideMounted"
    />

    <TScrollSide
      v-if="fixedRightColumns && fixedRightColumns.length"
      :class="[`${prefix}-scroll-right`, {'no-shadow': arriveRight}]"
      :columns="fixedRightColumns"
      v-bind="$props"
      :style="getSideStyle('right')"
      :bar-width="barWidth"
      :header-height="theadHeight"
      @mounted="onRightSideMounted"
    />

  </div>
</template>

<script>
  import TBody from './table-body';
  import TColgroup from './table-colgroup';
  import THead from './table-head';
  import TScrollSide from './table-scroll-side';
  const name = 'gd-table-scroll';
  const prefix = 'gd-table';

  export default {
    name,
    components: { TBody, TColgroup, THead, TScrollSide },
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
      scroll: {
        type: Object,
        default: () => ({}),
      },
      tableCls: {
        type: [Object, Array],
        default: () => ({}),
      },
    },
    data () {
      return {
        prefix,
        barWidth: 15,
        barHeight: 15,
        theadHeight: 0,
        $TBODY: null,
        $THEAD: null,
        $LEFT: null,
        $RIGHT: null,
        arriveLeft: true,
        arriveRight: true,
      };
    },

    computed: {
      headStyle () {
        return {
          marginBottom: `-${this.barHeight}px`,
        };
      },

      contentStyle () {
        let style = {};
        const { scroll } = this;

        if (scroll.y) {
          style.maxHeight = scroll.y;
          style.overflowY = 'scroll';
        }

        if (scroll.x) {
          style.overflowX = 'scroll';
        }

        return style;
      },
      tableStyle () {
        const { scroll } = this;
        let style = {};
        if (scroll.x) {
          style = {
            width: scroll.x,
          };
        }
        return style;
      },

      fixedLeftColumns () {
        return (this.bodyColumns || []).filter(i => i.fixed === 'left');
      },

      fixedRightColumns () {
        return (this.bodyColumns || []).filter(i => i.fixed === 'right');
      },
    },

    watch: {
      scroll: {
        immediate: true,
        handler (val) {
          if (val && val.x) {
            this.arriveRight = false;
          }
        },
      },
    },

    created () {
      this.$nextTick(() => {
        this.$TBODY = this.$refs.content;
        this.$THEAD = this.$refs.head;
        this.resetPosition();
        this.$TBODY.addEventListener('scroll', this.onBodyScroll);
      });
    },

    beforeDestroy () {
      const { $TBODY, $LEFT, $RIGHT } = this;
      $TBODY && $TBODY.removeEventListener('scroll', this.onBodyScroll);
      $LEFT && $LEFT.removeEventListener('scroll', this.onLeftFixedScroll);
      $RIGHT && $RIGHT.removeEventListener('scroll', this.onRightFixedScroll);
    },

    methods: {
      resetPosition () {
        this.theadHeight = this.$THEAD.firstChild.offsetHeight;
        this.barWidth = this.$TBODY.offsetWidth - this.$TBODY.clientWidth;
        this.barHeight = this.$TBODY.offsetHeight - this.$TBODY.clientHeight;
      },

      onBodyScroll (e) {
        const { $TBODY, $THEAD, $LEFT, $RIGHT } = this;
        this.arriveLeft = $TBODY.scrollLeft === 0;
        this.arriveRight =
          $TBODY.scrollLeft - ($TBODY.scrollWidth - $TBODY.offsetWidth) >= 0;
        $THEAD.scrollLeft = $TBODY.scrollLeft;
        $THEAD && ($THEAD.scrollLeft = $TBODY.scrollLeft);
        $LEFT && ($LEFT.scrollTop = $TBODY.scrollTop);
        $RIGHT && ($RIGHT.scrollTop = $TBODY.scrollTop);
      },

      onLeftFixedScroll (e) {
        const { $TBODY, $LEFT, $RIGHT } = this;
        $TBODY && ($TBODY.scrollTop = $LEFT.scrollTop);
        $RIGHT && ($RIGHT.scrollTop = $LEFT.scrollTop);
      },

      onRightFixedScroll (e) {
        const { $TBODY, $LEFT, $RIGHT } = this;
        $TBODY && ($TBODY.scrollTop = $RIGHT.scrollTop);
        $LEFT && ($LEFT.scrollTop = $RIGHT.scrollTop);
      },

      onLeftSideMounted (dom) {
        this.$LEFT = dom;
        this.$LEFT && this.$LEFT.addEventListener('scroll', this.onLeftFixedScroll);
      },

      onRightSideMounted (dom) {
        this.$RIGHT = dom;
        this.$RIGHT && this.$RIGHT.addEventListener('scroll', this.onRightFixedScroll);
      },

      getSideStyle (pos) {
        let style = {
          bottom: `${this.barWidth}px`,
        };
        if (pos === 'right') {
          style.right = `${this.barWidth}px`;
        }
        return style;
      },

      setTrHeight () {

      },
    },
  };
</script>

<style lang='less'>
</style>
