<template>
  <div>
    <gd-rate
      v-model="value"
      :title="title"
      :text-map="textMap"
      :happy-threshold="happyThreshold"
      @change="onChange">
    </gd-rate>
  </div>
</template>

<script>
  export default {
    methods: {
      onChange (index) {
        console.log(index);
      },
    },
    data () {
      return {
        value: 2,
        title: '服务评价',
        textMap: [
          '非常不满意',
          '不满意',
          '一般',
          '满意',
          '非常满意',
        ],
        happyThreshold: 2,
      };
    },
  };
</script>
