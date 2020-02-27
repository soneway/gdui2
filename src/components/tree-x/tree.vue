<template>
  <div :class="_class">
    <TreeNode
      v-for="item in data"
      :key="id(item)"
      :data="nodeMap[id(item)]"
      visible
      :show-checkbox="showCheckbox"
      :branch-icon="branchIcon"
      :switcher-icon="switcherIcon"
      :leaf-icon="leafIcon"
    />
    <div v-if="!data.length" :class="_emptyClass">{{ emptyText }}</div>
  </div>
</template>
<script>
  import TreeNode from './tree-node.vue';

  const name = 'gd-tree-x';
  function flatArray (data = [], fn, childrenKey = n => n['children'], parent) {
    let result = [];
    const deep = ((parent && parent.deep) || 0) + 1;
    data.forEach(item => {
      const children = childrenKey(item);
      const createdItem = fn(item, parent, deep);
      result.push(createdItem);

      if (children && children.length) {
        result.push(...flatArray(children, fn, childrenKey, createdItem));
      }
    });
    return result;
  }

  export default {
    name,
    components: {
      TreeNode,
    },
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
      dataProps: {
        type: Object,
        default: () => ({
          children: node => node.children,
          leaf: node => node.leaf,
          disabled: node => node.disabled,
          title: node => node.title,
          id: node => node.id,
          hidden: node => node.hidden,
          expand: node => node.expand,
        }),
      },
      multiple: Boolean,
      selective: {
        type: Boolean,
        default: true,
      },
      accordion: Boolean,
      showCheckbox: Boolean,
      branchIcon: String,
      switcherIcon: String,
      leafIcon: String,
      checkStrictly: Boolean,
      checkDirectly: Boolean,
      emptyText: {
        type: String,
        default: '暂无数据',
      },
      loadData: Function,
      checkedKeys: Array,
      defaultCheckedKeys: Array,
      selectedKeys: Array,
      filterName: String,
      renderContent: Function,
      combine: Boolean,
      highlightClass: String,
    },
    data () {
      return {
        name: name,
        flatStat: [],
        nodeMap: {},
        currentCheckedKeys: [],
        currentSelectedKeys: [],
        title: node => node.title,
        children: node => node.children,
        leaf: node => node.leaf,
        disabled: node => node.disabled,
        id: node => node.id,
        hidden: node => node.hidden,
        expand: node => node.expand,
        count: 0,
        curDefaultCheckedKeys: [],
        defaultCheckedMap: {},
      };
    },
    computed: {
      _class () {
        return [name];
      },
      _emptyClass () {
        return [`${name}-empty`];
      },
      curCheckedKeys () {
        return [...this.curDefaultCheckedKeys, ...(this.checkedKeys || [])];
      },
    },
    watch: {
      data: {
        deep: true,
        immediate: true,
        handler () {
          this.resetStat();
          this.flatData();
          this.checkedKeysHandler();
          this.selectedKeysHandler();
          this.resetFilterName();
        },
      },
      dataProps: {
        immediate: true,
        deep: true,
        handler (val) {
          if (!val) return;
          this.resetDataProps();
          this.resetStat();
          this.flatData();
          this.checkedKeysHandler();
          this.selectedKeysHandler();
          this.resetFilterName();
        },
      },
      defaultCheckedKeys: {
        immediate: true,
        handler (val) {
          this.defaultCheckedMap = (val || []).reduce((obj, key) => {
            obj[key] = true;
            return obj;
          }, {});
          this.curDefaultCheckedKeys = val || [];
        },
      },
      checkedKeys () {
        this.checkedKeysHandler();
      },
      selectedKeys () {
        this.currentSelectedKeys = [];
        this.selectedKeysHandler();
      },
      filterName: {
        immediate: true,
        handler () {
          this.resetFilterName();
        },
      },
    },
    methods: {
      removeDefaultKeys (node) {
        if (this.defaultCheckedMap[node.id]) {
          this.defaultCheckedMap[node.id] = false;
          this.curDefaultCheckedKeys = Object.keys(this.defaultCheckedMap).filter(i => this.defaultCheckedMap[i]);
        }
      },

      resetStat () {
        this.nodeMap = {};
        this.flatStat = [];
        this.count = 0;
      },
      createNode (data = {}, parent, deep) {
        const index = ++this.count;
        const {
          title,
          disabled,
          leaf,
          id,
          children,
          hidden,
          expand,
        } = this;
        return {
          // title 转成 string 类型
          title: String(title(data)),
          disabled: disabled(data),
          leaf: leaf(data),
          expand: expand(data),
          id: id(data) || index,
          hidden: hidden(data),
          children: children(data) || [],
          deep,
          parent,
          checked: false,
          node: data,
          nodeIndex: index,
          indeterminate: false,
          loading: false,
          highlight: false,
          selected: false,
        };
      },
      flatData (data = this.data, parent) {
        if (!data || !data.length) return;
        const flatStat = flatArray(
          data,
          (item, parent, deep) => {
            const node = this.createNode(item, parent, deep);
            this.$set(this.nodeMap, node.id, node);
            return node;
          },
          this.children,
          parent
        );
        this.flatStat = this.flatStat.concat(flatStat);
      },
      checkedKeysHandler () {
        if (!this.showCheckbox || !this.curCheckedKeys || !this.flatStat.length) {
          return;
        }
        this.resetChecked(this.currentCheckedKeys, false);
        this.resetChecked(this.curCheckedKeys, true);
        this.currentCheckedKeys = [...this.curCheckedKeys];
      },
      resetChecked (keys = [], checked) {
        keys.forEach(id => {
          const node = this.nodeMap[id];
          if (!node) return;
          node.checked = checked;
          if (!this.checkStrictly) {
            this.noticeChecked(node);
          }
        });
      },
      noticeChecked (node, isClick) {
        // isClick 为 true 代表主动点击
        this.noticeDownwardChecked(node, isClick);
        this.noticeUpwardChecked(node, isClick);
      },
      noticeUpwardChecked (item, isClick) {
        if (isClick) this.removeDefaultKeys(item);
        const { id } = this;
        const parent = item.parent;
        if (parent) {
          const children = parent.children;

          // indeterminate active when both checked/unchecked status exist
          const hasUnchecked = children.some(
            child => !this.nodeMap[id(child)].checked
          );
          const hasChecked = children.some(
            child => this.nodeMap[id(child)].checked || this.nodeMap[id(child)].indeterminate
          );
          const indeterminate = hasChecked && hasUnchecked;

          parent.indeterminate = indeterminate;

          parent.checked = !hasUnchecked;
          this.noticeUpwardChecked(parent, isClick);
        }
      },

      noticeDownwardChecked (item, isClick) {
        if (isClick) this.removeDefaultKeys(item);
        const { id } = this;
        const checked = item.checked;
        item.children &&
          item.children.forEach(child => {
            const childItem = this.nodeMap[id(child)];
            childItem.checked = checked;
            this.noticeDownwardChecked(childItem, isClick);
          });
      },
      resetDataProps () {
        const arr = ['title', 'children', 'leaf', 'disabled', 'id', 'hidden', 'expand'];
        arr.forEach(key => {
          const val = this.dataProps[key];
          if (typeof val === 'function') {
            this[key] = val;
          }
          else if (typeof val === 'string') {
            this[key] = node => node[val];
          }
          else {
            this[key] = node => node[key];
          }
        });
      },
      selectedKeysHandler () {
        if (!this.selective || !this.selectedKeys) return;
        this.flatStat.forEach(item => {
          const key = item.id;
          const node = this.nodeMap[key];
          node && (node.selected = false);
        });
        (this.selectedKeys || [])
          .concat(this.currentSelectedKeys || [])
          .forEach(key => {
            const node = this.nodeMap[key];
            node && (node.selected = true);
          });
      },
      resetFilterName () {
        if (!this.filterName) {
          return this.flatStat.forEach(node => (node.highlight = false));
        }
        this.flatStat.forEach(node => {
          if (node.title.indexOf(this.filterName) !== -1) {
            const { parent } = node;
            node.highlight = true;
            if (parent) {
              const n = this.nodeMap[this.id(parent)];
              if (n) n.expand = true;
            }
          }
          else {
            node.highlight = false;
          }
        });
      },

      handleExpand (item) {
        this.$emit('toggle', item.node);
        // 手风琴模式
        if (this.accordion) {
          this.flatStat.map(n => item.id !== n.id && item.deep === n.deep && (n.expand = false));
        }

        if (
          !item.children.length &&
          this.loadData &&
          typeof this.loadData === 'function'
        ) {
          item.loading = true;

          this.loadData(item.node, (children = []) => {
            item.children = children;
            this.flatData(children, item);
            if (!this.checkStrictly) {
              this.noticeChecked(item);
            }
            this.checkedKeysHandler();
            this.selectedKeysHandler();
            item.expand = !item.expand;
            this.resetFilterName();
            item.loading = false;
          });
        }
        else {
          item.expand = !item.expand;
        }
      },
      handleSelect (node) {
        if (node.disabled || !this.selective) return;
        if (!this.multiple) {
          this.flatStat.some(node => {
            if (node.selected) {
              node.selected = !node.selected;
            }
            return node.selected;
          });
        }
        node.selected = !node.selected;
        const selected = this.flatStat.filter(n => n.selected);
        this.currentSelectedKeys = selected.map(n => n.id);
        this.$emit('selectchange', selected.map(n => n.node), node, node.parent);
      },
      handleChecked (item, checked) {
        if (item.disabled) return;
        item.checked = checked;
        item.indeterminate = false;
        if (!this.checkStrictly) {
          this.noticeChecked(item, true);
        }
        this.emitChecked(item);
      },

      emitChecked (checkNode) {
        let checked = this.flatStat.filter(node => node.checked);

        if (this.combine) {
          checked = this.flatStat.filter(node => {
            let shouldStay = node.checked;
            if (node.parent) {
              const parentId = node.parent.id;
              const parentChecked = this.nodeMap[parentId].checked;
              parentChecked && (shouldStay = !parentChecked);
            }
            return shouldStay;
          });
        }

        let checkedKeys = [];
        checked = checked.map(node => {
          checkedKeys.push(node.id);
          return node.node;
        });

        checkedKeys = [...checkedKeys, ...this.curDefaultCheckedKeys];
        checkedKeys = checkedKeys.filter((key, idx) => checkedKeys.indexOf(key) === idx);
        this.currentCheckedKeys = [...checkedKeys];
        this.$emit('checkchange', checked, checkedKeys, checkNode.node);
      },
    },
  };
</script>
