<template>
  <i :class="_class"></i>
</template>

<script>
  const name = 'gd-loading';

  export default {
    name,
    computed: {
      _class () {
        return [
          name,
        ];
      },
    },
  };
</script>
