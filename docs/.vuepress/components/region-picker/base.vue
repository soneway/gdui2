<template>
  <div>
    <gd-region-picker
      :pca-json="pcaJson"
      v-model="address">
    </gd-region-picker>
    {{address}}
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
