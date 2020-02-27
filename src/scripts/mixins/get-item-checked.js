export default {
  methods: {
    /**
     * 获取选项是否选中
     * @param $list 选项列表
     * @returns {boolean}
     */
    getItemChecked ($list) {
      let { curValue, multiple } = $list;

      // 多选
      if (multiple) {
        // 非数组
        if (!Array.isArray(curValue)) {
          curValue = [];
        }
        return curValue.indexOf(this.value) !== -1;
      }

      // 单选
      return curValue === this.value;
    },
  },
};
