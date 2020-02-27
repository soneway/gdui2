export default {
  methods: {
    /**
     * 获取选项列表的值
     * @param $item 选项元素
     * @returns {*}
     */
    getListCurValue ($item) {
      // 多选
      if (this.multiple) {
        const { checked, value } = $item;
        let { curValue } = this;

        // 非数组
        if (!Array.isArray(curValue)) {
          curValue = [];
        }

        // 复制
        const newValue = curValue.slice(0);
        // 当前选中(删除项)
        if (checked) {
          newValue.splice(newValue.indexOf(value), 1);
        }
        // 当前未选中(添加项)
        else {
          newValue.push(value);
        }

        return newValue;
      }

      // 单选
      return $item.value;
    },
  },
};
