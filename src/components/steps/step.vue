<template>
  <div
    :class="_class"
    :style="_style"
    @click="onClick">
    <b
      :class="_dotClass"
      :data-index="index">
    </b>
    <slot>
      <h3 :class="_titleClass">
        {{ title }}
      </h3>
      <p :class="_descClass">{{ desc }}</p>
    </slot>
  </div>
</template>

<script>
  const name = 'gd-step';

  export default {
    name,
    props: {
      title: String,
      desc: String,
    },
    data () {
      return {
        index: -1,
        total: 1,
      };
    },
    inject: [
      'steps',
    ],
    computed: {
      type () {
        return this.steps.type;
      },
      _class () {
        return [
          name,
          {
            active: this.steps.active === this.index,
            [`${name}-${this.type}`]: this.type,
            [`${name}-${this.steps.size}`]: this.steps.size,
          },
        ];
      },
      _style () {
        return {
          width: `${(1 / this.total) * 100}%`,
        };
      },
      _dotClass () {
        return [
          `${name}-dot`,
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
        ];
      },
      _descClass () {
        return [
          `${name}-desc`,
        ];
      },
    },

    methods: {
      onClick () {
        this.$emit('click', this);
      },
    },
  };
</script>
