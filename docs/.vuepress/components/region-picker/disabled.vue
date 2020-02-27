<template>
  <div>
    <gd-region-picker
      v-model="address"
      :pca-json="pcaJson"
      disabled>
    </gd-region-picker>
  </div>
</template>

<script>
  import pcaJson from '@soneway/division/dist/pca';

  export default {
    data () {
      return {
        address: ['广东省', '广州市', '天河区'],
        pcaJson,
      };
    },
  };
</script>
