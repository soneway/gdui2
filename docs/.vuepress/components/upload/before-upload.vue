<template>
  <div>
    <gd-upload
      action="https://jsonplaceholder.typicode.com/posts"
      :before-upload="beforeUploadCancel">
      <span slot="tip">支持png、jpg、jpeg、pdf、word、excel、txt、zip、gif、音频、视频等，最大上传30M</span>
    </gd-upload>
  </div>
</template>

<script>
  export default {
    methods: {
      beforeUploadCancel (file, data) {
        console.log('=====> file', file);
        console.log('=====> data', data);
        if (file.name === '123.txt') {
          console.warn('=====> 文件名为：123.txt的，用户主动取消了上传');
          return false;
        }
        return Promise.resolve(file);
      },
    },
  };
</script>
