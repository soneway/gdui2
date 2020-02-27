<template>
  <gd-upload
    action="https://jsonplaceholder.typicode.com/posts"
    :on-progress="onProgress"
    :on-success="onSuccess"
    :on-error="onError"
    :on-remove="onRemove"
    :multiple="false"
    :before-upload="beforeUpload"
    :data="ajaxData"
    @on-change-handler="onChangeHandler">
    <span slot="tip">支持png、jpg、jpeg、pdf、word、excel、txt、zip、gif、音频、视频等，最大上传30M</span>
  </gd-upload>
</template>

<script>
  export default {
    data () {
      return {
        ajaxData: {
          test: 1111,
        },
      };
    },
    methods: {
      onChangeHandler (file) {
        console.log('====> onChangeHandler', file);
      },
      onProgress (e, file) {
        console.log('====> onProgress', e, file);
      },
      onSuccess (res, file, filesList) {
        console.log('====> onSuccess', res, file, filesList);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('onSuccess promise done');
            // resolve里面的传参暂时不处理
            resolve(file);
            // reject({msg: '出错啦！'});
          }, 1000);
        });
      },
      onError (err, response, file) {
        console.log('====> onError', err, response, file);
      },
      onRemove (file, filesList) {
        console.log('====> onRemove', file, filesList);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('onRemove promise done');
            // resolve里面的传参暂时不处理
            resolve(file);
            // reject({msg: '出错啦！'});
          }, 1000);
        });
      },
      beforeUpload (file, data) {
        console.log('====> beforeUpload file', file);
        console.log('====> beforeUpload data', data);
        const newData = Object.assign(data, {
          test: 1222,
          aaa: 333,
        });

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('beforeUpload something done;');
            resolve(file);
          }, 1000);
        });
      },
    },
  };
</script>
