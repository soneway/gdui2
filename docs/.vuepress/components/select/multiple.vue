<template>
  <div>
    <gd-select
      multiple
      placeholder="请选择"
      :value="['gz', 'bj']">
      <gd-option
        v-for="(item, index) in valueList"
        :value="item.value"
        :label="item.label"
        :key="index">
      </gd-option>
      <gd-option
        disabled
        value="hehe"
        label="disabled">
      </gd-option>
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
          {
            value: 'cd',
            label: '成都',
          },
          {
            value: 'tj',
            label: '天津',
          },
          {
            value: 'tb',
            label: '台北',
          },
        ],
      };
    },
  };
</script>
