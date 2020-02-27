<template>
  <div class="check-list-base">
    <gd-check-list
      v-model="value2"
      size="larger"
      item-type="button">
      <gd-check-item
        v-for="(item, index) in valueList"
        :value="item.value"
        :key="index"
        :label="item.label">
      </gd-check-item>
    </gd-check-list>
    <gd-check-list
      v-model="value2"
      size="large"
      item-type="button">
      <gd-check-item
        v-for="(item, index) in valueList"
        :value="item.value"
        :key="index"
        :label="item.label">
      </gd-check-item>
    </gd-check-list>
    <gd-check-list item-type="button">
      <gd-check-item
        v-for="(item, index) in valueList"
        :value="item.value"
        :key="index"
        :label="item.label">
      </gd-check-item>
    </gd-check-list>
    <gd-check-list
      size="small"
      item-type="button">
      <gd-check-item
        v-for="(item, index) in valueList"
        :value="item.value"
        :key="index"
        :label="item.label">
      </gd-check-item>
    </gd-check-list>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: '',
        value2: '',
        value3: '',
        value: 'gz',
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