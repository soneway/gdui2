<template>
  <div class="poptip-base">
    <gd-poptip
      ref="poptip"
      trigger="click"
      width="200px"
      placement="top">
      <gd-button>上边</gd-button>
      <div
        slot="content"
        class="delete-confirm">
        <h3>确认删除?</h3>
        <div>
          <gd-button
            type="error"
            size="small"
            @click="onOkClick">确认
          </gd-button>
          <gd-button
            size="small"
            data-close-poptip
            @click="onCancelClick">取消
          </gd-button>
        </div>
      </div>
    </gd-poptip>

    <p style="padding-top: 20px;">
      <a href="confirm-poptip.html">ConfirmPoptip</a> 组件可实际以上效果
    </p>

  </div>
</template>

<script>
  export default {

    methods: {
      onOkClick () {
        console.log('点击了确认');
      },
      onCancelClick () {
        console.log('点击了取消');
      },
    },
  };
</script>

<style lang="less">
  .poptip-base {
    .delete-confirm {
      text-align: center;

      & > h3 {
        margin-bottom: 1em;
      }

      & > div {

        .gd-button {
          margin: 0 0.3em;
        }
      }
    }
  }
</style>
