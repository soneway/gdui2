<template>
  <div>
    <gd-confirm-poptip
      content="确认删除吗?"
      placement="top"
      @confirm="onConfirm"
      :confirm-closable="false"
      @cancel="onCancel"
      :cancel-closable="true">
      <a>删除</a>
    </gd-confirm-poptip>
  </div>
</template>

<script>
  export default {
    methods: {
      onConfirm () {
        console.log('点击确认');
      },
      onCancel () {
        console.log('点击取消');
      },
    },
  };
</script>
