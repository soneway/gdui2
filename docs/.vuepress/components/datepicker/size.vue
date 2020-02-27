<template>
  <div>
    <gd-datepicker
      size="small"
      v-model="date1">
    </gd-datepicker>
    <gd-datepicker
      v-model="date1">
    </gd-datepicker>
    <gd-datepicker
      size="large"
      v-model="date1">
    </gd-datepicker>
    <gd-datepicker
      size="larger"
      v-model="date1">
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
