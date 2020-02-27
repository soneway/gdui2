<template>
  <div>
    <gd-datepicker
      v-model="date1"
      type="datetime"
      format="YYYY-MM-DD HH:mm:ss">
    </gd-datepicker>
    <gd-datepicker
      v-model="date2"
      type="datetime"
      range
      format="YYYY-MM-DD HH:mm:ss">
    </gd-datepicker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date1: new Date(),
        date2: [],
      };
    },
  };
</script>
