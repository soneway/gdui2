<template>
  <ul :class="`${className}-uploaded`">
    <li
      :class="`${className}-uploaded-item`"
      v-for="(item, itemIndex) in list"
      :key="itemIndex">
      <div :class="`${className}-uploaded-main`">
        <div :class="`${className}-uploaded-name`">
          <RenderCell
            v-if="item.render"
            :render="item.render"
            :row="item">
          </RenderCell>
          <template v-else>
            {{ item.name }}
          </template>
        </div>
        <div :class="`${className}-uploaded-stats`">
          <template v-if="item.showProgress">
            <div :class="`${className}-uploaded-progress`">
              <i
                :class="progressBarClass(item)"
                :style="progressBarStyle(item)"
              ></i>
            </div>
            <span :class="`${className}-uploaded-num`">
              {{ item.percentage }}%
            </span>
          </template>
          <span
            v-if="item.status === 'finished'"
            :class="`${className}-uploaded-success`">
            已上传
          </span>
          <span
            v-if="item.status === 'fail'"
            :class="`${className}-uploaded-fail`">
            {{ item.error_msg }}
          </span>
        </div>
      </div>
      <div :class="`${className}-uploaded-size`">
        {{ readablizeBytes(item.size) }}
      </div>
      <div :class="`${className}-uploaded-operate`">
        <template v-if="item.status === 'fail'">
          <span
            @click="handleRetry(itemIndex)"
            :class="`${className}-uploaded-text`">重新上传</span>
        </template>
        <template v-if="item.status === 'finished' || item.status === 'fail'">
          <span
            @click="handleRemove(itemIndex)"
            :class="`${className}-uploaded-text`">删除</span>
        </template>
      </div>
    </li>
  </ul>
</template>

<script>
  import RenderCell from '../render-cell';

  export default {
    components: {
      RenderCell,
    },
    props: {
      className: Array,
      list: Array,
    },
    computed: {},
    methods: {
      handleRemove (index) {
        this.$emit('handle-remove', index);
      },
      handleRetry (index) {
        this.$emit('handle-retry', index);
      },
      progressBarStyle (item) {
        return {
          width: `${item.percentage}%`,
        };
      },
      progressBarClass () {
        return [`${this.className}-uploaded-bar`];
      },

      // 字节转换
      readablizeBytes (bytes) {
        if (!bytes) return;
        const s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        const e = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + ' ' + s[e];
      },
    },
  };
</script>
