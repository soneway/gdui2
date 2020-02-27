<template>
  <ul :class="_class">
    <li>
      <Icon
        :class="_arrowClass"
        @click="handleExpand"
        icon="right">
      </Icon>
      <Loading v-if="data.loading">
      </Loading>
      <Checkbox
        v-if="showCheckbox"
        :value="data.checked"
        :indeterminate="data.indeterminate"
        :disabled="data.disabled || data.disableCheckbox"
        @click.native.prevent="onCheck">
      </Checkbox>
      <Icon
        :icon="nodeIcon"
        :class="_titleClass"
        @click="onSelect">
        <RenderCell
          v-if="data.render"
          :render="data.render"
          :data="data">
        </RenderCell>
        <template v-else>
          {{ data[titleKey] }}
        </template>
      </Icon>
      <template v-if="data.expand">
        <gd-tree-node
          v-for="(item, index) in children"
          :key="index"
          :data="item"
          :multiple="multiple"
          :show-checkbox="showCheckbox"
          :children-key="childrenKey"
          :title-key="titleKey"
          :branch-icon="branchIcon"
          :leaf-icon="leafIcon"
          :expand-all="expandAll">
        </gd-tree-node>
      </template>
    </li>
  </ul>
</template>

<script>
  import Emitter from 'utils-lib/dist/emitter';

  import Checkbox from '../checkbox';
  import Icon from '../icon';
  import Loading from '../loading';
  import RenderCell from '../render-cell';

  const name = 'gd-tree-node';

  export default {
    name,
    components: {
      Checkbox,
      Icon,
      Loading,
      RenderCell,
    },
    mixins: [
      Emitter,
    ],
    inject: [
      'tree',
    ],
    props: {
      data: {
        type: Object,
        default () {
          return {};
        },
      },
      multiple: Boolean,
      childrenKey: String,
      titleKey: String,
      showCheckbox: Boolean,
      branchIcon: String,
      leafIcon: String,
      expandAll: Boolean,
    },
    data () {
      return {};
    },
    computed: {
      _class () {
        return [
          `${name}-children`,
        ];
      },
      _arrowClass () {
        const { data = {}, nodeType, expandAll } = this;
        if (data.expand === undefined) {
          this.$set(data, 'expand', expandAll);
        }
        return [
          `${name}-arrow`,
          {
            [`${name}-arrow-disabled`]: data.disabled,
            [`${name}-arrow-open`]: data.expand,
            [`${name}-arrow-hidden`]: nodeType === 'leaf',
          },
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
          {
            [`${name}-title-selected`]: this.data.selected,
          },
        ];
      },
      nodeType () {
        const { data, children } = this;

        // 枝
        if (children.length || data.loading === false) {
          return 'branch';
        }

        // 叶
        return 'leaf';
      },
      nodeIcon () {
        return this.data.icon || this[`${this.nodeType}Icon`];
      },
      node () {
        const { data, tree: { flatState = [] } } = this;
        return [flatState, flatState.find(item => item.nodeKey === data.nodeKey)];
      },
      children () {
        return this.data[this.childrenKey] || [];
      },
    },

    methods: {
      handleExpand () {
        const { data, children, tree, childrenKey } = this;

        if (data.disabled) return;

        // 异步加载
        if (!children.length) {
          if (tree && tree.loadData) {
            this.$set(data, 'loading', true);
            tree.loadData(data, children => {
              // children为空
              if (children == null) {
                return this.$set(data, 'loading', false);
              }

              let loading = false;
              // 空数据
              if (children.length === 0) {
                loading = undefined;
              }
              this.$set(data, 'loading', loading);

              if (children.length) {
                this.$set(data, childrenKey, children);
                this.$nextTick(() => this.handleExpand());
              }
            });
            return;
          }
        }

        if (children.length) {
          this.$set(data, 'expand', !data.expand);
          this.dispatch('gd-tree', 'expandtoggle', data);
        }
      },
      onSelect () {
        const { data, tree } = this;

        if (data.disabled) return;

        if (tree.showCheckbox && tree.checkDirectly) {
          this.onCheck();
        }
        else {
          this.dispatch('gd-tree', 'select', data.nodeKey);
        }
      },
      onCheck () {
        const { data } = this;

        if (data.disabled || data.disableCheckbox) return;

        const changes = {
          checked: !data.checked && !data.indeterminate,
          nodeKey: data.nodeKey,
        };
        this.dispatch('gd-tree', 'check', changes);
      },
    },
  };
</script>
