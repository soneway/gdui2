<template>
  <Confirm
    ref="confirm"
    :cancel-hidden="true">
  </Confirm>
</template>

<script>
  import Confirm from '../confirm/confirm';

  export default {
    components: {
      Confirm,
    },
  };
</script>
