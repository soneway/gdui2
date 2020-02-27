<template>
  <div>
    <gd-tree-x :data="data2" branch-icon="folder" :render-content="renderContent" leaf-icon="user"></gd-tree-x>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: [
        {
          title: "parent 1",
          id: 1,
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              id: 2,
              children: [
                {
                  title: "leaf 1-1-1",
                  id: 3
                },
                {
                  title: "leaf 1-1-2",
                  id: 4
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              id: 5,
              children: [
                {
                  title: "leaf 1-2-1",
                  id: 6,
                  disabled: true
                },
                {
                  title: "leaf 1-2-2",
                  id: 7
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    renderContent(h, { node, data }) {
      if (node.id === 7) {
        return (
          <span>
            {data.title}
            <gd-button size="small" style="margin-left: 10px">
              点击
            </gd-button>
          </span>
        );
      } else {
        return <span>{data.title}</span>;
      }
    }
  }
};
</script>