<template>
  <div>
    <gd-tree-x
      :data-props="dataProps"
      :data="data2"
      filter-name="1"
      show-checkbox
      branch-icon="folder"
      switcher-icon="download"
      leaf-icon="user"
    ></gd-tree-x>

    <gd-tree-x
      accordion
      :data-props="dataProps"
      :data="data1"
      branch-icon="folder"
      leaf-icon="user"
    ></gd-tree-x>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataProps: {
        leaf: node => (node.title + "").includes("leaf")
      },
      data1: [
        {
          title: 1,
          id: 1,
          children: [
            {
              title: "2",
              id: 2,
              children: [
                {
                  title: "444",
                  id: 6
                }
              ]
            },

            {
              title: "333",
              id: 5,
              children: [
                {
                  title: "777",
                  id: 7
                }
              ]
            }
          ]
        },
        {
          title: "3",
          id: 3,
          children: [
            {
              title: "4",
              id: 4
            }
          ]
        }
      ],
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
                  id: 3,
                  disabled: true
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
              disableCheckbox: true,
              id: 5,
              children: [
                {
                  title: "leaf 1-2-1",
                  id: 6
                },
                {
                  title: "leaf 1-2-1",
                  id: 7
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
