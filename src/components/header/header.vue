<template>
  <div
    :class="_class"
    :style="_style">

    <div :class="_leftClass">
      <a
        :class="_titleClass"
        :href="titleHref"
        :target="titleTarget">
        <h1
          :class="_logoClass"
          :style="_logoStyle">{{ title }}
        </h1>
      </a>
      <slot name="subtitle">
        <a
          v-if="subtitle"
          :class="_subtitleClass"
          :href="subtitleHref"
          :subtitle="subtitleTarget">
          <h2>{{ subtitle }}</h2>
        </a>
      </slot>
    </div>

    <div :class="_rightClass">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  const name = 'gd-header';

  export default {
    name,
    props: {
      containerWidth: String,
      logo: String,

      title: {
        type: String,
        default: '政务服务网',
      },
      titleHref: String,
      titleTarget: String,

      subtitle: String,
      subtitleHref: String,
      subtitleTarget: String,
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _style () {
        return {
          width: this.width,
        };
      },
      _leftClass () {
        return [
          `${name}-left`,
        ];
      },
      _rightClass () {
        return [
          `${name}-right`,
        ];
      },
      _titleClass () {
        return [
          `${name}-title`,
        ];
      },
      _logoClass () {
        return [
          `${name}-logo`,
        ];
      },
      _logoStyle () {
        return {
          backgroundImage: this.logo && `url(${this.logo})`,
        };
      },
      _subtitleClass () {
        return [
          `${name}-subtitle`,
        ];
      },
      _navClass () {
        return [
          `${name}-nav`,
        ];
      },
    },

  };
</script>
