<template>
  <div class="tabs-base">
    <gd-tag @close="handleClose" :size="size[0]">larger</gd-tag>
    <gd-tag @close="handleClose" :size="size[1]">large</gd-tag>
    <gd-tag @close="handleClose">default</gd-tag>
    <gd-tag @close="handleClose" :size="size[2]">small</gd-tag>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        size:['larger','large','small'],
      };
    },
    methods:{
      handleClose(tagText){
        console.log('close:',tagText);
      }
    }
  };
</script>
