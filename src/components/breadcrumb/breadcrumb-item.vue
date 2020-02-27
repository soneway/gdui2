<template>
  <span :class="_class">
    <a
      v-if="to"
      :href="to"
      :target="target"
      :class="_linkClass"
      @click.exact="onClick($event, false)"
      @click.ctrl="onClick($event, true)"
      @click.meta="onClick($event, true)">
      <slot></slot>
    </a>
    <span
      v-else
      :class="_linkClass">
      <slot></slot>
    </span>

    <span
      :class="_separatorClass"
      v-html="separator"
      v-if="!showSeparator">
    </span>
    <span
      :class="_separatorClass"
      v-else>
      <slot name="separator"></slot>
    </span>
  </span>
</template>

<script>
  import Link from '../../scripts/mixins/link';
  const name = 'gd-breadcrumb-item';

  export default {
    name,
    mixins: [
      Link,
    ],
    data () {
      return {
        separator: '',
        showSeparator: false,
      };
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _linkClass () {
        return [
          `${name}-link`,
        ];
      },
      _separatorClass () {
        return [
          `${name}-separator`,
        ];
      },
    },
    mounted () {
      this.showSeparator = this.$slots.separator !== undefined;
    },
  };
</script>
