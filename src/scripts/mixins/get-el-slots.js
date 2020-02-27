export default {
  methods: {
    // 获取元素slots
    getElSlots () {
      const vnodes = this.$slots.default || [];
      return vnodes.filter((vnode) => vnode.tag);
    },
  },
};
