<template>
  <div :class="_class">
    <RenderCell
      v-if="typeof content === 'function'"
      :render="content">
    </RenderCell>
    <Icon
      v-else
      :icon="icon">{{ content }}
    </Icon>
  </div>
</template>

<script>
  import Icon from '../icon';
  import RenderCell from '../render-cell';

  const name = 'gd-toast';
  const defaults = {
    type: '',
    content: '',
    timeout: 3000,
    visible: false,
  };
  const iconMap = {
    success: 'success',
    warning: 'error',
    error: 'close-circle',
    info: 'warning',
  };

  export default {
    name,
    components: {
      Icon,
      RenderCell,
    },
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
            visible: this.visible,
            [`${name}-${this.type}`]: this.type,
          },
        ];
      },

      icon () {
        return iconMap[this.type];
      },
    },
    methods: {
      show (options = {}, infoType) {
        if (typeof options === 'string') {
          options = { content: options };
        }
        options = { ...defaults, ...options, type: infoType };
        const { type, content, timeout } = options;

        this.type = type;
        this.content = content;

        // 重置visible
        this.visible = false;
        // 延迟显示
        setTimeout(() => {
          this.visible = true;
        }, 20);

        clearTimeout(this.timer);
        // timeout时间后自动关闭
        this.timer = setTimeout(this.hide, timeout);
      },
      success (options = {}) {
        this.show(options, 'success');
      },
      error (options) {
        this.show(options, 'error');
      },
      info (options) {
        this.show(options, 'info');
      },
      warning (options) {
        this.show(options, 'warning');
      },
      hide () {
        this.visible = false;
      },
    },
  };
</script>
