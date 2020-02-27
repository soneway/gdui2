<template>
  <div>

    <gd-select
      v-model="nation"
      type="nation">
    </gd-select>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        nation: '汉族',
      };
    },
  };
</script>
