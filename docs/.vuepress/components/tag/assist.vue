<template>
  <div class="tag-base">
    <gd-tag @close="handleClose" :type="type[0]">info</gd-tag>
    <gd-tag @close="handleClose" :type="type[1]">success</gd-tag>
    <gd-tag @close="handleClose" :type="type[2]">error</gd-tag>
    <gd-tag @close="handleClose" :type="type[3]">warning</gd-tag>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        type:['info','success','error','warning']
      };
    },
    methods:{
      handleClose(tagText){
        console.log('close:',tagText);
      }
    }
  };
</script>