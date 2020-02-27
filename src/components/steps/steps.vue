<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
  import GetElSlots from '../../scripts/mixins/get-el-slots';

  const name = 'gd-steps';

  export default {
    name,
    mixins: [
      GetElSlots,
    ],
    props: {
      active: {
        type: Number,
        default: 0,
      },
      type: String,
      size: String,
    },
    data () {
      const elSlots = this.getElSlots();
      return {
        elSlots,
      };
    },
    provide () {
      return {
        steps: this,
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
    },

    mounted () {
      this.initSlots();
    },

    methods: {
      // 初始化slots
      initSlots () {
        const total = this.elSlots.length;
        this.elSlots.forEach((item, index) => {
          const { componentInstance } = item;
          componentInstance.total = total;
          componentInstance.index = ++index;
        });
      },
    },
  };
</script>
