<template>
  <div :class="_class">
    <TreeNode
      v-for="(item, index) in stateTree"
      :key="index"
      :data="item"
      visible
      :multiple="multiple"
      :show-checkbox="showCheckbox"
      :children-key="childrenKey"
      :title-key="titleKey"
      :branch-icon="branchIcon"
      :leaf-icon="leafIcon"
      :expand-all="expandAll">
    </TreeNode>
    <div
      :class="_emptyClass"
      v-if="!stateTree.length">{{ emptyText }}
    </div>
  </div>
</template>

<script>
  import Emitter from 'utils-lib/dist/emitter';
  import TreeNode from './tree-node.vue';

  const name = 'gd-tree';

  export default {
    name,
    components: {
      TreeNode,
    },
    mixins: [
      Emitter,
    ],
    provide () {
      return {
        tree: this,
      };
    },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        },
      },
      multiple: Boolean,
      childrenKey: {
        type: String,
        default: 'children',
      },
      titleKey: {
        type: String,
        default: 'title',
      },
      showCheckbox: Boolean,
      branchIcon: String,
      leafIcon: String,

      checkStrictly: Boolean,
      checkDirectly: Boolean,
      emptyText: {
        type: String,
        default: '暂无数据',
      },
      loadData: Function,
      expandAll: Boolean,
    },
    data () {
      return {
        name: name,
        stateTree: this.data,
        flatState: [],
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _emptyClass () {
        return [
          `${name}-empty`,
        ];
      },
    },
    watch: {
      data: {
        deep: true,
        handler () {
          this.stateTree = this.data;
          this.updateTree();
        },
      },
    },
    created () {
      this.updateTree();
    },
    mounted () {
      this.$on('check', this.onCheck);
      this.$on('select', this.onSelect);
      this.$on('expandtoggle', node => this.$emit('toggle', node));
    },
    methods: {
      updateTree () {
        this.flatState = this.compileFlatState();
        this.rebuildTree();
      },
      compileFlatState () { // so we have always a relation parent/children of each node
        let keyCounter = 0;
        let childrenKey = this.childrenKey;
        const flatTree = [];

        function flattenChildren (node, parent) {
          node.nodeKey = keyCounter++;
          flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
          if (parent !== undefined) {
            flatTree[node.nodeKey].parent = parent.nodeKey;
            flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
          }

          if (node[childrenKey]) {
            flatTree[node.nodeKey][childrenKey] = [];
            node[childrenKey].forEach(child => flattenChildren(child, node));
          }
        }

        this.stateTree.forEach(rootNode => {
          flattenChildren(rootNode);
        });
        return flatTree;
      },
      updateTreeUp (nodeKey) {
        const parentKey = this.flatState[nodeKey].parent;
        if (parentKey === undefined || this.checkStrictly) return;

        const node = this.flatState[nodeKey].node;
        const parent = this.flatState[parentKey].node;
        if (node.checked === parent.checked && node.indeterminate === parent.indeterminate) return; // no need to update upwards

        if (node.checked === true) {
          this.$set(parent, 'checked', parent[this.childrenKey].every(node => node.checked));
          this.$set(parent, 'indeterminate', !parent.checked);
        }
        else {
          this.$set(parent, 'checked', false);
          this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate));
        }
        this.updateTreeUp(parentKey);
      },
      rebuildTree () { // only called when `data` prop changes
        const checkedNodes = this.getCheckedNodes();
        checkedNodes.forEach(node => {
          this.updateTreeDown(node, { checked: true });
          // propagate upwards
          const parentKey = this.flatState[node.nodeKey].parent;
          if (!parentKey && parentKey !== 0) return;
          const parent = this.flatState[parentKey].node;
          const childHasCheckSetter = node.checked !== undefined && node.checked;
          if (childHasCheckSetter && parent.checked !== node.checked) {
            this.updateTreeUp(node.nodeKey); // update tree upwards
          }
        });
      },

      getSelectedNodes () {
        return this.flatState.filter(obj => obj.node.selected).map(obj => obj.node);
      },
      getCheckedNodes () {
        return this.flatState.filter(obj => obj.node.checked).map(obj => obj.node);
      },
      updateTreeDown (node, changes = {}) {
        if (this.checkStrictly) return;

        for (let key in changes) {
          this.$set(node, key, changes[key]);
        }
        if (node[this.childrenKey]) {
          node[this.childrenKey].forEach(child => {
            this.updateTreeDown(child, changes);
          });
        }
      },
      onSelect (nodeKey) {
        const node = this.flatState[nodeKey].node;
        if (!this.multiple) { // reset previously selected node
          const currentSelectedKey = this.flatState.findIndex(obj => obj.node.selected);
          if (currentSelectedKey >= 0 && currentSelectedKey !== nodeKey) this.$set(this.flatState[currentSelectedKey].node, 'selected', false);
        }
        this.$set(node, 'selected', !node.selected);

        const parentKey = this.flatState[nodeKey].parent;
        const parent = parentKey !== undefined && this.flatState[parentKey].node;
        this.$emit('selectchange', this.getSelectedNodes(), node, parent);
      },
      onCheck ({ checked, nodeKey }) {
        const node = this.flatState[nodeKey].node;
        this.$set(node, 'checked', checked);
        this.$set(node, 'indeterminate', false);

        this.updateTreeUp(nodeKey); // propagate up
        this.updateTreeDown(node, { checked, indeterminate: false }); // reset `indeterminate` when going down

        this.$emit('checkchange', this.getCheckedNodes(), node);
      },
    },
  };
</script>
