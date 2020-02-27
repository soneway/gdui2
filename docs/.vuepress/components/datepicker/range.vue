<template>
  <div>
    <gd-datepicker
      v-model="date1"
      range>
    </gd-datepicker>
    <gd-datepicker
      type="month"
      range>
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
