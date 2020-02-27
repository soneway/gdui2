<template>
  <div>

    <h2>Small</h2>
    <gd-pagination
      size="small"
      :total="100"
      @change="onChange">
    </gd-pagination>

    <h2>Large</h2>
    <gd-pagination
      size="large"
      :total="100"
      @change="onChange">
    </gd-pagination>

    <h2>Larger</h2>
    <gd-pagination
      size="larger"
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
