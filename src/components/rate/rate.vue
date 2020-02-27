<template>
  <div :class="_class">
    <label :class="_titleClass">{{ title }}</label>

    <span
      :class="_itemClass"
      v-for="(item, key) in count"
      :key="key"
      @mouseenter="onEnter(item)"
      @mouseleave="onLeave">
      <Icon
        :class="getIconClass(item)"
        @click="onClick(item)"
        :icon="icon">
      </Icon>
    </span>

    <label :class="_infoClass">{{ textMap[curValue - 1] }}</label>
  </div>
</template>

<script>
  import Icon from '../icon';

  const name = 'gd-rate';

  export default {
    name,
    components: {
      Icon,
    },
    props: {
      value: {
        type: Number,
        default: 0,
      },
      count: {
        type: Number,
        default: 5,
      },
      title: String,
      textMap: {
        type: Array,
        default () {
          return [];
        },
      },
      happyThreshold: {
        type: Number,
        default: 0,
      },
      disabled: Boolean,
      icon: {
        type: String,
        default: 'star',
      },
    },
    data () {
      return {
        curValue: this.value,
        curActive: this.value,
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
        ];
      },
      _itemClass () {
        return [
          `${name}-item`,
        ];
      },
      _infoClass () {
        return [
          `${name}-info`,
          {
            unhappy: !this.isHappy,
          },
        ];
      },

      isHappy () {
        return this.curValue > this.happyThreshold;
      },
    },
    watch: {
      // 响应value修改
      value (value) {
        this.curValue = value;
        this.curActive = value;
      },
    },

    methods: {
      getIconClass (index) {
        return [
          `${name}-icon`,
          index <= this.curValue ? this.isHappy ? 'active' : 'unhappy' : '',
        ];
      },

      onClick (index) {
        if (this.disabled) return;

        this.curValue = index;
        this.curActive = index;
        this.$emit('input', index);
        this.$emit('change', index);
      },
      onEnter (index) {
        if (this.disabled) return;
        this.curValue = index;
      },
      onLeave () {
        if (this.disabled) return;
        this.curValue = this.curActive;
      },
    },
  };
</script>
