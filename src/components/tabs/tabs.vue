<template>
  <div :class="_class">

    <div :class="_navClass">
      <a
        :class="getNavItemClass(item)"
        v-for="(item, index) in navList"
        :key="index"
        @click="onNavItemClick(item)">
        <Icon :icon="item.icon">
          <RenderCell
            v-if="typeof item.label === 'function'"
            :render="item.label"
            :index="index"
            :row="item">
          </RenderCell>
          <template v-else>{{ item.label }}</template>
        </Icon>
      </a>
    </div>

    <div :class="_contentClass">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import GetElSlots from '../../scripts/mixins/get-el-slots';
  import Icon from '../icon';
  import RenderCell from '../render-cell';

  const name = 'gd-tabs';

  export default {
    name,
    components: {
      Icon,
      RenderCell,
    },
    mixins: [
      GetElSlots,
    ],
    props: {
      value: [String, Number],
      size: String,
    },
    provide () {
      return {
        tabs: this,
      };
    },
    data () {
      const elSlots = this.getElSlots();
      const navList = this.getNavList(elSlots);
      const firstNav = navList[0] || {};
      const curValue = this.value || firstNav.value || 0;

      return {
        elSlots,
        navList,
        curValue,
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _navClass () {
        return [
          `${name}-nav`,
          {
            [`${name}-nav-${this.size}`]: this.size,
          },
        ];
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
    },
    watch: {
      // 响应设值
      value (value) {
        this.curValue = value;
      },
      curValue (value) {
        // 双向绑定
        this.$emit('input', value);
      },
    },

    mounted () {
      this.initSlots();
    },

    beforeUpdate () {
      this.setNavList();
    },

    methods: {
      setNavList () {
        const elSlots = this.getElSlots();
        const navList = this.getNavList(elSlots);
        this.navList = navList;
      },

      // 获取导航数据
      getNavList (elSlots) {
        return elSlots.map((vnode, index) => {
          const { propsData } = vnode.componentOptions;
          return { value: index, ...propsData };
        });
      },

      // 导航点击
      onNavItemClick ({ value }) {
        this.curValue = value;
        this.$emit('tabclick', value);
      },

      // 获取导航样式
      getNavItemClass ({ value, disabled }) {
        return [
          `${name}-nav-item`,
          {
            checked: value === this.curValue,
            [`${name}-nav-item-disabled`]: disabled,
          },
        ];
      },

      // 初始化slots
      initSlots () {
        this.elSlots.forEach((item, index) => {
          const { componentInstance } = item;
          if (componentInstance.curValue === undefined) {
            componentInstance.curValue = index;
          }
        });
      },
    },
  };
</script>
