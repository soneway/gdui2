<template>
  <div>
    <gd-tree
      :data="data3"
      :load-data="loadData"
      show-checkbox>
    </gd-tree>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data3: [
          {
            title: 'parent',
            loading: false,
            children: [],
          },
        ],
      };
    },
    methods: {
      loadData (item, callback) {
        setTimeout(() => {
          const data = [
            {
              title: 'children',
              loading: false,
              children: [],
            },
            {
              title: 'children',
              loading: false,
              children: [],
            },
          ];
          callback(data);
        }, 1000);
      },
    },
  };
</script>
