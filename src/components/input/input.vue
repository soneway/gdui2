<template>
  <div
    :class="_class"
    @click="onClick"
    v-clickoutside="hideDrop">
    <Icon
      v-if="icon"
      :icon="icon"
      :class="_iconClass"
      @click="onIconClick" />
    <textarea
      v-bind="$attrs"
      v-if="type === 'textarea'"
      ref="textarea"
      :rows="rows"
      :value="curValue"
      :maxlength="maxlength"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @keyup.enter="onEnter">
    </textarea>
    <input
      v-bind="$attrs"
      v-else
      ref="input"
      :type="type"
      :value="curValue"
      :maxlength="maxlength"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @keyup.enter="onEnter" />
    <div
      v-if="optionsMap"
      :class="_dropClass">
      <Option
        v-for="(item, index) in optionsMap"
        :value="item.value"
        :label="item.label"
        :key="index"
        @click="onOptionClick">
      </Option>
    </div>
    <div
      v-if="maxlength && !maxlengthHidden"
      :class="_lengthInfoClass">
      {{ `${curValue || ''}`.length }}/{{ maxlength }}
    </div>
    <Icon
      :icon="curSuffixIcon"
      v-if="curSuffixIcon"
      :class="_suffixIconClass"
      @click="onSuffixIconClick" />
  </div>
</template>

<script>
  import clickoutside from 'utils-lib/dist/clickoutside';
  import FormSize from '../../scripts/mixins/form-size';
  import WatchCurValue from '../../scripts/mixins/watch-cur-value';
  import GetListCurValue from '../../scripts/mixins/get-list-cur-value';
  import { isType } from 'utils-lib/dist/object';
  import Icon from '../icon';
  import Option from '../select/option';

  const name = 'gd-input';

  export default {
    name,
    components: {
      Icon,
      Option,
    },
    directives: {
      clickoutside,
    },
    mixins: [
      FormSize,
      WatchCurValue,
      GetListCurValue,
    ],
    provide () {
      return {
        select: this,
      };
    },
    props: {
      icon: String,
      suffixIcon: String,
      value: [String, Number, Array],
      type: {
        type: String,
        default: 'text',
      },
      rows: {
        type: [Number, String],
        default: 3,
      },
      allowClear: Boolean,
      maxlength: Number,
      maxlengthHidden: Boolean,
      dataSource: Array,
    },
    data () {
      return {
        curValue: this.value,
        expand: false,
      };
    },
    computed: {
      _class () {
        return [
          `${name}`,
          {
            [`${name}-${this.curSize}`]: this.curSize,
            [`${name}-${this.type}`]: this.type,
            [`${name}-prefix`]: this.icon,
            [`${name}-suffix`]: this.curSuffixIcon,
            [`${name}-hidden`]: this.type === 'hidden',
            [`${name}-expand`]: this.expand,
          },
        ];
      },
      _iconClass () {
        return [
          `${name}-icon`,
        ];
      },
      _suffixIconClass () {
        return [
          `${name}-suffix-icon`,
          {
            [`${name}-suffix-icon-clear`]: this.allowClear,
            visible: this.curValue !== '' && this.curValue !== undefined,
          },
        ];
      },
      _lengthInfoClass () {
        return [
          `${name}-length-info`,
        ];
      },
      _dropClass () {
        return [
          `${name}-drop`,
        ];
      },

      curSuffixIcon () {
        if (this.allowClear) {
          return 'close-circle';
        }
        return this.suffixIcon;
      },

      // 选项数据
      optionsMap () {
        const { dataSource } = this;
        // 有数据源
        if (dataSource) {
          return dataSource.map((item) => {
            if (isType(item, 'Object')) {
              return this.getLabelData(item);
            }
            return { label: item, value: item };
          });
        }
      },
    },
    watch: {
      value (value) {
        this.curValue = value;
      },
    },

    methods: {
      focus () {
        (this.$refs.input || this.$refs.textarea).focus();
      },
      blur () {
        (this.$refs.input || this.$refs.textarea).blur();
      },

      onClick (event) {
        this.expand = !this.expand;
        this.$emit('click', event);
      },

      onInput (event) {
        let { value } = event.target;
        // 转数字
        if (this.type === 'number') {
          if (value !== '') {
            value = isNaN(+value) ? value : +value;
          }
        }
        this.curValue = value;
      },
      onChange (event) {
        const { value } = event.target;
        this.$emit('change', value);
      },

      onFocus (event) {
        this.$emit('focus', event);
      },
      onEnter (event) {
        this.$emit('enter', event);
      },
      onBlur (event) {
        this.$emit('blur', event);
        this.dispatch('gd-form-item', 'form.blur', this.curValue);
      },

      // 图标点击
      onIconClick (event) {
        this.$emit('iconclick', event);
      },
      onSuffixIconClick (event) {
        // 清除内容
        if (this.allowClear) {
          event.stopPropagation();
          this.curValue = '';
        }
        this.$emit('suffixiconclick', event);
      },

      onOptionClick (target) {
        this.curValue = this.getListCurValue(target);
        this.hideDrop();
      },

      // 隐藏下拉
      hideDrop () {
        this.expand = false;
      },

    },
  };
</script>
