<template>
  <div>
    <gd-pagination
      simple
      :total="100"
      @change="onChange">
    </gd-pagination>

  </div>
</template>

<script>
  export default {
    methods: {
      onChange (index) {
        console.log(`转到第${index}页`);
      },
    },
  };
</script>
