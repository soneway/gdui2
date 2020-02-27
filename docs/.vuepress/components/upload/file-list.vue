<template>
  <div>
    <gd-upload
      action="https://jsonplaceholder.typicode.com/posts"
      v-model="fileList">
      <span slot="tip">支持png、jpg、jpeg、pdf、word、excel、txt、zip、gif、音频、视频等，最大上传30M</span>
    </gd-upload>
    <div style="margin-top: 1em;">{{ JSON.stringify(fileList) }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fileList: [
          {
            error_msg: '',
            name: '1-水电费水电费的副本 2.txt',
            percentage: 100,
            response: {
              id: 105,
            },
            showProgress: false,
            size: 4,
            status: 'finished',
            uid: 1534333090336,
          },
          {
            error_msg: '',
            name: '1-水电费水电费的副本.txt',
            percentage: 100,
            response: {
              id: 104,
            },
            showProgress: false,
            size: 4,
            status: 'finished',
            uid: 1534333090338,
          },
        ],
      };
    },
  };
</script>
