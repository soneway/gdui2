<template>
  <form
    :class="_class"
    :autocomplete="autocomplete">
    <Row :gutter="gutter">
      <slot />
    </Row>
  </form>
</template>

<script>
  import Row from '../row';

  const name = 'gd-form';

  export default {
    name,
    components: {
      Row,
    },
    props: {
      model: Object,
      rules: Object,
      errorLocation: Boolean,
      size: String,
      autocomplete: Boolean,
      type: String,
      colcount: {
        type: Number,
        default: 1,
      },
      gutter: Number,
      labelWidth: String,
      labelAlign: String,
    },
    provide () {
      return {
        form: this,
      };
    },
    data () {
      return {
        fields: [],
      };
    },
    computed: {
      _class () {
        return [
          `${name}`,
          {
            [`${name}-${this.type}`]: this.type,
            [`${name}-${this.size}`]: this.size,
          },
        ];
      },
    },
    watch: {
      rules () {
        this.validate();
      },
    },

    created () {
      this.$on('form-item.add', (field) => {
        if (field) this.fields.push(field);
        return false;
      });
      this.$on('form-item.remove', (field) => {
        if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
        return false;
      });
    },

    methods: {
      // 检验表单
      validate (callback) {
        return new Promise(resolve => {
          let valid = true;
          let count = 0;
          this.fields.forEach(field => {
            field.validate('', errors => {
              if (errors) {
                valid = false;
              }
              if (++count === this.fields.length) {
                resolve(valid);
                if (typeof callback === 'function') {
                  callback(valid, errors);
                }
              }
            });
          });
        });
      },

      // 校验某个字段
      validateField (prop, cb) {
        const field = this.fields.filter(field => field.prop === prop)[0];
        if (!field) {
          throw new Error(`没有${prop}字段`);
        }

        field.validate('', cb);
      },
    },
  };
</script>
