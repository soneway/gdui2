<template>
  <div>
    <gd-select
      placeholder="请选择"
      value="bj"
      :data-source="valueList">
    </gd-select>

    <gd-select
      placeholder="请选择"
      value="广州"
      :data-source="valueList1">
    </gd-select>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        valueList: [
          {
            value: 'gz',
            label: '广州',
          },
          {
            value: 'bj',
            label: '北京',
          },
          {
            value: 'sh',
            label: '上海',
          },
          {
            value: 'sz',
            label: '深圳',
          },
        ],
        valueList1: [
          '北京', '上海', '广州', '深圳',
        ],
      };
    },
  };
</script>
