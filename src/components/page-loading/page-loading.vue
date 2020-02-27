<template>
  <div :class="_class">
    <div
      v-if="withMask"
      :class="_maskClass">
    </div>
    <div :class="_boxClass">
      <Loading />
      <p>{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
  import Loading from '../loading';

  const name = 'gd-page-loading';

  const defaults = {
    // 加载中文字
    loadingText: 'Loading...',
    // 是否有mask
    withMask: true,
    // 显示状态
    visible: false,
  };

  export default {
    name,
    components: {
      Loading,
    },
    props: {},
    data () {
      return {
        ...defaults,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            'visible': this.visible,
          },
        ];
      },
      _maskClass () {
        return [
          `${name}-mask`,
        ];
      },
      _boxClass () {
        return [
          `${name}-box`,
        ];
      },
    },
    methods: {
      show (options = {}) {
        if (typeof options === 'string') {
          options = { loadingText: options };
        }
        options = { ...defaults, ...options };
        const { loadingText, withMask } = options;

        this.visible = true;
        this.loadingText = loadingText;
        this.withMask = withMask;
      },
      hide () {
        this.visible = false;
      },
    },
  };
</script>
