<template>
  <div>
    <gd-datepicker
      v-model="date8"
      type="datetime"
      format="YYYY-MM-DD HH:mm:ss"
      confirm>
    </gd-datepicker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date8: '',
      };
    },
  };
</script>
