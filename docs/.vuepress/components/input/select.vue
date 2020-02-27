<template>
  <div class="input-base">
    <gd-input
      placeholder="请输入"
      :data-source="dataSource">
    </gd-input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataSource: [
          '同意',
          '审核不通过',
          '材料审核不通过, 需补齐补正',
          '材料不符合申请条件, 审核不通过',
        ],
      };
    },
  };
</script>
