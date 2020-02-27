<template>
  <div>
    <gd-select placeholder="请选择" v-model="value">
      <gd-option
        v-for="(item, index) in valueList"
        :label="item.label"
        :value="item.value"
        :key="index"
      ></gd-option>
      <gd-option disabled value="hehe" label="disabled"></gd-option>
    </gd-select>

    {{value}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "bj",
      valueList: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.valueList = [
        {
          value: "gz",
          label: "广州"
        },
        {
          value: "bj",
          label: "北京"
        },
        {
          value: "sh",
          label: "上海"
        },
        {
          value: "sz",
          label: "深圳"
        },
        {
          value: "cd",
          label: "成都"
        },
        {
          value: "tj",
          label: "天津"
        },
        {
          value: "tb",
          label: "台北"
        }
      ];
    }, 0);
  }
};
</script>
