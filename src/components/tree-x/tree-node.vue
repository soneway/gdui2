<template>
  <ul :class="_class" v-show="!data.hidden">
    <li :class="_itemCls">
      <Icon :class="_arrowClass" icon="right" @click="handleExpand" />
      <Loading v-if="data.loading" />
      <Checkbox
        v-if="showCheckbox"
        :value="data.checked"
        :indeterminate="data.indeterminate"
        :disabled="data.disabled"
        :dispatchChangeDisabled="true"
        @change="onCheck"
      />
      <Icon :icon="nodeIcon" :class="_titleClass" @click="onSelect">
        <RenderCell
          v-if="tree.renderContent"
          :render="renderContent"
          :data="data">
        </RenderCell>
        <span v-else v-html="createContent" />
      </Icon>
      <template v-if="data.expand">
        <gd-tree-x-node
          v-for="item in data.children"
          :key="tree.id(item)"
          :data="tree.nodeMap[tree.id(item)]"
          :show-checkbox="showCheckbox"
          :branch-icon="branchIcon"
          :switcher-icon="switcherIcon"
          :leaf-icon="leafIcon"
        />
      </template>
    </li>
  </ul>
</template>
<script>
  import Checkbox from '../checkbox';
  import Icon from '../icon';
  import Loading from '../loading';
  import RenderCell from '../render-cell';
  const name = 'gd-tree-x-node';

  export default {
    name,
    inject: ['tree'],
    components: {
      Checkbox,
      Icon,
      Loading,
      RenderCell,
    },
    props: {
      data: {
        type: Object,
        default () {
          return {};
        },
      },
      showCheckbox: Boolean,
      branchIcon: String,
      leafIcon: String,
      switcherIcon: String,
    },
    data () {
      return {};
    },
    computed: {
      _class () {
        return [`${name}-children`];
      },
      _itemCls () {
        return [];
      },
      _arrowClass () {
        const { data, nodeType } = this;
        const { disabled, expand } = data || {};
        return [
          `${name}-arrow`,
          {
            [`${name}-arrow-disabled`]: disabled,
            [`${name}-arrow-open`]: expand,
            [`${name}-arrow-hidden`]: nodeType === 'leaf',
          },
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
          {
            [`${name}-title-selected`]: !!this.data.selected,
            [`${name}-item-disabled`]: this.data.disabled,
          },
        ];
      },
      nodeType () {
        const { data } = this;
        return data.leaf ? 'leaf' : 'branch';
      },
      nodeIcon () {
        const { expand } = this.data;
        if (expand) {
          return this.switcherIcon;
        }
        else {
          return this[`${this.nodeType}Icon`];
        }
      },
      createContent () {
        const { highlight, title } = this.data;
        const { filterName, highlightClass } = this.tree;
        let content = [];
        if (highlight) {
          let arr = title.split(filterName);
          const highlightNode = `<b class="${highlightClass || ''}">${filterName}</b>`;
          const len = arr.length;

          content = arr.reduce((all = [], item, idx) => {
            all.push(item);
            if (idx !== len - 1) {
              all.push(highlightNode);
            }
            return all;
          }, []);
        }
        else {
          content.push(title);
        }
        return `
        <span title="${title}">
          ${content.join('')}
        </span>
      `;
      },
    },

    methods: {
      handleExpand () {
        const tree = this.tree;
        tree.handleExpand(this.data);
      },
      renderContent () {
        const { data, tree, $createElement } = this;
        return tree.renderContent($createElement, { node: data.node, data });
      },
      onSelect () {
        const { data, tree } = this;
        if (tree.checkDirectly) {
          tree.handleChecked(this.data, !this.data.checked);
        }
        tree.handleSelect(data);
      },
      onCheck (val) {
        const { tree } = this;
        tree.handleChecked(this.data, val);
      },
    },
  };
</script>
