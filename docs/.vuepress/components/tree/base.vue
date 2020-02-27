<template>
  <div>
    <gd-tree
      :data="data2"
      show-checkbox
      branch-icon="folder"
      leaf-icon="user">
    </gd-tree>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data2: [
          {
            title: 'parent 1',
            expand: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1',
                    disabled: true
                  },
                  {
                    title: 'leaf 1-1-2',
                  },
                ],
              },
              {
                title: 'parent 1-2',
                expand: true,
                disableCheckbox: true,
                children: [
                  {
                    title: 'leaf 1-2-1'
                  },
                  {
                    title: 'leaf 1-2-1',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>
