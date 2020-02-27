<template>
  <div
    :class="_class"
    v-clickoutside="hideDrop">

    <Input
      suffix-icon="down"
      :placeholder="placeholder"
      :readonly="!filterable"
      :disabled="disabled"
      :value="curLabel"
      :size="curSize"
      :dispatch-change-disabled="true"
      @input="onSelectInput"
      @click="onClick" />

    <div :class="_dropClass">
      <template v-if="curDataSource">
        <Option
          v-for="(item, index) in curDataSource"
          :value="item.value"
          :label="item.label"
          :key="index">
        </Option>
      </template>
      <slot v-else></slot>
    </div>

  </div>
</template>

<script>
  import clickoutside from 'utils-lib/dist/clickoutside';
  import Emitter from 'utils-lib/dist/emitter';
  import { getValueByPath, isType } from 'utils-lib/dist/object';
  import FormSize from '../../scripts/mixins/form-size';
  import WatchCurValue from '../../scripts/mixins/watch-cur-value';
  import GetListCurValue from '../../scripts/mixins/get-list-cur-value';
  import GetElSlots from '../../scripts/mixins/get-el-slots';
  import nation from './nation';

  import Input from '../input';
  import Option from './option';

  const name = 'gd-select';
  const dataSourceMap = { nation };

  export default {
    name,
    components: {
      Input,
      Option,
    },
    directives: {
      clickoutside,
    },
    mixins: [
      Emitter,
      FormSize,
      WatchCurValue,
      GetListCurValue,
      GetElSlots,
    ],
    props: {
      placeholder: String,
      value: [String, Number, Array],
      disabled: Boolean,
      readonly: Boolean,
      filterable: Boolean,
      multiple: Boolean,
      // 类型, nation: 民族
      type: String,
      dataSource: Array,
    },
    provide () {
      return {
        select: this,
      };
    },
    data () {
      return {
        expand: false,
        curValue: this.value,
        curLabel: '',
        curDataSource: this.dataSource || this.dataFormat(dataSourceMap[this.type]),
        query: '',
        staticDataSource: [],
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-expand`]: this.expand,
            [`${name}-disabled`]: this.disabled,
            [`${name}-readonly`]: this.readonly,
            [`${name}-${this.curSize}`]: this.curSize,
            [`${name}-multiple`]: this.multiple,
          },
        ];
      },
      _dropClass () {
        return [
          `${name}-drop`,
        ];
      },

      // 选项数据
      optionsMap () {
        const { curDataSource, staticDataSource } = this;
        const data = curDataSource || staticDataSource || [];
        return data;
      },
    },
    watch: {
      value (value) {
        this.curValue = value;
      },
      curValue () {
        this.$nextTick(this.setCurLabel);
      },

      dataSource: {
        immediate: true,
        handler (value) {
          if (!value) return;
          this.curDataSource = this.dataFormat(value);
        },
      },
    },

    mounted () {
      this.$on('option.click', this.onOptionClick);
      // 初始化label
      this.setCurLabel();
    },

    methods: {
      dataFormat (value) {
        if (!value) return value;
        return value.map(item => {
          if (isType(item, 'Object')) {
            return this.getLabelData(item);
          }
          return { label: item, value: item };
        });
      },

      generateOptions () {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          const data = this.getElSlots().map((vnode) => {
            const propsData = getValueByPath(vnode, 'componentOptions.propsData');
            return this.getLabelData(propsData);
          });
          this.staticDataSource = data;
          this.setCurLabel();
        }, 0);
      },

      onSelectInput (val) {
        this.query = val;
      },

      onClick () {
        this.expand = !this.expand;
        this.$emit('click', this);
      },

      // 选项点击
      onOptionClick (target) {
        const oldValue = this.curValue;
        const value = this.getListCurValue(target);

        // 设置值
        this.curValue = value;

        // 单选模式隐藏下拉
        !this.multiple && this.hideDrop();

        // 选项点击事件
        this.$emit('optionclick', value, oldValue);
        // change事件
        JSON.stringify(oldValue) !== JSON.stringify(value) && this.$emit('change', value);
      },

      // 隐藏下拉
      hideDrop () {
        this.expand = false;
      },

      // 获取label数据
      getLabelData (data) {
        data || (data = {});
        const copyData = { ...data };
        if (copyData.label === undefined) {
          copyData.label = copyData.value;
        }
        return copyData;
      },

      // 设置label
      setCurLabel () {
        let { curValue, optionsMap } = this;
        // 多选
        if (this.multiple) {
          if (!Array.isArray(curValue)) {
            curValue = [];
          }
          this.curLabel = optionsMap
            .filter((map) => curValue.includes(map.value))
            .map((map) => map.label);
        }
        // 单选
        else {
          const mapItem = optionsMap
            .find((map) => map.value === curValue) || {};
          this.curLabel = mapItem.label;
        }
      },
    },
  };
</script>
