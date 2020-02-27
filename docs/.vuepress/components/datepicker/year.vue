<template>
  <div>
    <gd-datepicker
      v-model="date1"
      type="year"
      format="YYYY">
    </gd-datepicker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date1: new Date(),
      };
    },
  };
</script>
