<template>
  <div>
    <gd-select
      placeholder="请选择"
      filterable
      v-model="value">
      <gd-option
        v-for="(item, index) in valueList"
        :label="item.label"
        :value="item.value"
        :key="index">
      </gd-option>
    </gd-select>

    <gd-select
      placeholder="请选择"
      value="广州"
      filterable
      :data-source="valueList1">
    </gd-select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
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
            value: 'sn',
            label: '上南',
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
        valueList1: [
          '北京', '上海', '广州', '深圳',
        ],
      };
    },
    mounted(){
        setTimeout(() => {
            this.valueList.push({
                value: 'hz',
                label: '化州'
            })
        }, 1000);
    }
  };
</script>
