<template>
  <div>
    <gd-region-picker
      :value="['贵州省','贵阳市']"
      :province-hidden="true"
      :pca-json="pcaJson"
      :city-readonly="true">
    </gd-region-picker>
  </div>
</template>

<script>
  import pcaJson from '@soneway/division/dist/pca';

  export default {
    data () {
      return {
        pcaJson,
      };
    },
  };
</script>
