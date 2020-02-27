<template>
  <div>
    <gd-button @click="onClick">显示Modal</gd-button>
    <gd-button @click="onClick1">显示无标题Modal</gd-button>

    <gd-modal
      v-model="showModal"
      ok-text="确认"
      cancel-text="取消"
      @okclick="onOkClick"
      @cancelclick="onCancelClick"
      size="default"
      :close-hidden="false"
      :mask-closable="true"
      :footer-hidden="false"
      title="标题哈哈">
      <div style="width: 790px; height: 9999px; background: #ddd;">
        哈哈哈
      </div>
    </gd-modal>

    <gd-modal
      v-model="showModal1"
      ok-text="确认"
      cancel-text="取消"
      @okclick="onOkClick"
      @cancelclick="onCancelClick"
      :close-hidden="false"
      :mask-closable="false"
      :footer-hidden="true">
      <div style="width: 790px; height: 9999px; background: #ddd;">
        哈哈哈
      </div>
    </gd-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showModal: false,
        showModal1: false,
      };
    },

    methods: {
      onClick () {
        this.showModal = true;
      },
      onClick1 () {
        this.showModal1 = true;
      },

      onOkClick () {
        console.log('点击了确认');
      },
      onCancelClick () {
        console.log('点击了取消');
      },
    },
  };
</script>
