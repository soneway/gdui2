<template>
  <ColX
    :span="curSpan"
    :class="_class">
    <label
      :class="_labelClass"
      :style="_labelStyle"
      :for="labelFor"
      v-if="label">{{ label }}</label>

    <div :class="_contentClass">
      <slot></slot>
      <div :class="_errorMsgClass">
        <Icon icon="warning" />
        <span>{{ validateMessage }}</span>
      </div>
    </div>
  </ColX>
</template>

<script>
  import AsyncValidator from 'async-validator';
  import Emitter from 'utils-lib/dist/emitter';
  import Icon from '../icon';
  import ColX from '../col';

  const name = 'gd-form-item';

  function getPropByPath (obj, path) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;

    for (let len = keyArr.length; i < len - 1; ++i) {
      let key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      }
      else {
        throw new Error('prop传值不正确');
      }
    }
    return {
      o: tempObj,
      k: keyArr[i],
      v: tempObj[keyArr[i]],
    };
  }

  export default {
    name,
    components: {
      Icon,
      ColX,
    },
    mixins: [
      Emitter,
    ],
    inject: [
      'form',
    ],
    props: {
      label: String,
      prop: String,
      required: Boolean,
      rules: [Object, Array],
      error: String,
      validateStatus: Boolean,
      labelFor: String,
      labelWidth: String,
      labelAlign: String,
      span: [Number, String],
    },
    data () {
      return {
        curSpan: this.getSpan(),
        isRequired: false,
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {},
        errorLocation: this.form.errorLocation,
      };
    },
    computed: {
      _class () {
        return [
          `${name}`,
          {
            [`${name}-required`]: this.required || this.isRequired,
            [`${name}-error`]: this.validateState === 'error',
            [`${name}-validating`]: this.validateState === 'validating',
          },
        ];
      },
      _labelClass () {
        return [
          `${name}-label`,
        ];
      },
      _labelStyle () {
        return {
          width: this.labelWidth || this.form.labelWidth,
          textAlign: this.labelAlign || this.form.labelAlign,
        };
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
      _errorMsgClass () {
        return [
          `${name}-error-msg`,
        ];
      },

      fieldValue: {
        cache: false,
        get () {
          const model = this.form.model;
          if (!model || !this.prop) {
            return;
          }

          let path = this.prop;
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.');
          }

          return getPropByPath(model, path).v;
        },
      },
    },
    watch: {
      error (val) {
        this.validateMessage = val;
        this.validateState = val === '' ? '' : 'error';
      },
      validateStatus (val) {
        this.validateState = val;
      },
      span () {
        this.curSpan = this.getSpan();
      },
    },

    mounted () {
      if (this.prop) {
        this.dispatch('gd-form', 'form-item.add', this);

        Object.defineProperty(this, 'initialValue', {
          value: this.fieldValue,
        });

        this.initRequiredStatus();
        this.initEvent();
      }
    },
    beforeDestroy () {
      this.dispatch('gd-form', 'form-item.remove', this);
    },

    methods: {
      initRequiredStatus () {
        let rules = this.getRules();

        if (rules.length) {
          this.isRequired = rules.some((rule) => rule.required);
        }
      },

      initEvent () {
        this.$on('form.blur', this.onFieldBlur);
        this.$on('form.change', this.onFieldChange);
      },

      getSpan () {
        return this.span || 12 / this.form.colcount;
      },
      getRules () {
        let formRules = this.form.rules;
        const selfRules = this.rules;

        formRules = formRules ? formRules[this.prop] : [];

        return [].concat(selfRules || formRules || []);
      },
      getFilteredRule (trigger) {
        const rules = this.getRules();

        return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
      },
      validate (trigger, callback = () => {}) {
        const rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
          callback();
          this.validateState = 'success';
          return true;
        }

        this.validateState = 'validating';

        let descriptor = {};
        descriptor[this.prop] = rules;

        const validator = new AsyncValidator(descriptor);
        let model = {};

        model[this.prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, errors => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';

          // 需要错误定位
          if (this.validateMessage && this.errorLocation) {
            this.$nextTick(() => {
              const errorEl = this.form.$el.querySelector('.gd-form-item-error');
              if (errorEl) {
                // 预留空白
                const top = 100;
                const scrollY = errorEl.getBoundingClientRect().top + window.pageYOffset - top;
                window.scrollTo(0, scrollY);
              }
            });
          }

          callback(this.validateMessage);
        });
        this.validateDisabled = false;
      },
      onFieldBlur () {
        this.validate('blur');
      },
      onFieldChange () {
        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        this.validate('change');
      },
    },
  };
</script>
