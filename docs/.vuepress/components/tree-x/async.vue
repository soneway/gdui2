<template>
  <div>
    <gd-tree-x :data="data3" combine :checked-keys="keys" :default-checked-keys="dKeys" :load-data="loadData" show-checkbox @checkchange="onCheckChange"></gd-tree-x>
    <div style="float: right;position:relative;top: -40px;">{{ keys }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      data3: [
        {
          title: "parent",
          id: 1,
          loading: false,
          children: []
        }
      ],
      keys: [],
      dKeys: [3]
    };
  },
  methods: {
    onCheckChange(_ , keys){
        this.keys = keys
    },
    loadData(item, callback) {
      setTimeout(() => {
        const data = [
          {
            title: "children",
            loading: false,
            id: this.count+1,
            children: []
          },
          {
            title: "children",
            loading: false,
            id: this.count+2,
            children: []
          }
        ];
        this.count += 2
        callback(data);
      }, 1000);
    }
  }
};
</script>
