<template>
  <div :class="_class">
    <div
      :class="`${_class}-tips`"
      v-if="$slots.tip">
      <gd-icon icon="warning"></gd-icon>
      <slot name="tip"></slot>
    </div>
    <UploadList
      v-if="uploaded"
      :class-name="_class"
      :list="curValue"
      @handle-remove="handleRemove"
      @handle-retry="handleRetry"
    ></UploadList>
    <div
      :style="inputStyle"
      :class="`${_class}-input`">
      <div :class="`${_class}-button`">
        <input
          ref="input"
          type="file"
          value
          :accept="accept"
          :multiple="multiple ? 'multiple' : false"
          @change="changeHandler"
        >
        <gd-icon icon="upload"></gd-icon>
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
  import { getValueByPath } from 'utils-lib/dist/object';
  import ajax from './ajax';
  import UploadList from './upload-list';
  import WatchCurValue from '../../scripts/mixins/watch-cur-value';
  import { isIE } from '../../scripts/utils/ie';
  import post from './post';

  const name = 'gd-upload';

  export default {
    name,
    components: {
      UploadList,
    },
    mixins: [WatchCurValue],
    props: {
      value: {
        type: Array,
        default () {
          return [];
        },
      },
      action: {
        type: String,
        required: true,
      },
      headers: {
        type: Object,
        default () {
          return {};
        },
      },
      data: {
        type: Object,
        default () {
          return {};
        },
      },
      accept: {
        type: String,
      },
      format: {
        type: Array,
        default () {
          return [];
        },
      },
      name: {
        type: String,
        default: 'file',
      },
      multiple: {
        type: Boolean,
        default: true,
      },
      maxSize: {
        type: Number,
      },
      text: {
        type: String,
        default: '点击选择本地文件',
      },
      withCredentials: {
        type: Boolean,
        default: true,
      },
      beforeUpload: Function,
      onProgress: {
        type: Function,
        default () {
          return {};
        },
      },
      onSuccess: {
        type: Function,
        default () {
          return {};
        },
      },
      onError: {
        type: Function,
        default () {
          return {};
        },
      },
      onRemove: {
        type: Function,
        default () {
          return {};
        },
      },
      onFormatError: {
        type: Function,
        default () {
          return {};
        },
      },
      onExceededSize: {
        type: Function,
        default () {
          return {};
        },
      },
      // 成功匹配
      successMatch: Object,
      // 是否form上传
      isFormUpload: {
        type: Boolean,
        default: isIE(9),
      },
    },
    data () {
      return {
        curValue: this.value,
        prefixCls: name,
        uploaded: false,
        tempIndex: 1,
      };
    },
    computed: {
      inputStyle () {
        let style = {};
        if (this.uploaded) {
          style = {
            'border-top': 'none',
          };
          if (!this.multiple) {
            style.display = 'none';
          }
        }
        return style;
      },
      _class () {
        return [`${name}`];
      },
    },
    watch: {
      value: {
        immediate: true,
        handler (value) {
          this.curValue = value;
          this.uploaded = value.length > 0;
        },
      },
    },
    methods: {
      changeHandler ({ target }) {
        let { files } = target;

        // form上传
        if (this.isFormUpload) {
          if (target.value) {
            files = [{
              name: target.value,
              _fileEl: target,
            }];
          }
        }

        if (!files) {
          return;
        }

        if (!this.multiple && this.curValue.length > 1) {
          this.$toast.error('单文件模式只能上传一个文件，请删除已上传文件再操作');
          return;
        }

        const cloneFiles = Object.assign({}, files);
        this.$emit('on-change-handler', cloneFiles);
        this.dealFiles(files);
        this.$refs.input.value = null;
      },

      dealFiles (files) {
        const postFiles = Array.prototype.slice.call(files);
        postFiles.forEach(file => {
          this.upload(file);
        });
      },

      upload (file) {
        if (!this.beforeUpload) {
          return this.post(file);
        }

        const before = this.beforeUpload(file, this.data);

        if (before && before.then) {
          before.then(
            processedFile => {
              const objType = Object.prototype.toString.call(processedFile);
              if (objType === '[object File]' || objType === '[object Blob]') {
                this.post(processedFile);
              }
              else {
                this.post(file);
              }
            },
          );
        }
      },

      post (file) {
        // check format
        if (this.format.length) {
          const fileFormat = file.name
            .split('.')
            .pop()
            .toLocaleLowerCase();
          const checked = this.format.some(
            item => item.toLocaleLowerCase() === fileFormat,
          );
          if (!checked) {
            this.onFormatError(file, this.curValue);
            return false;
          }
        }

        // check maxSize
        if (this.maxSize) {
          if (file.size > this.maxSize * 1024) {
            this.onExceededSize(file, this.curValue);
            return false;
          }
        }

        this.handleStart(file);

        const options = {
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onProgress: event => {
            this.handleProgress(event, file);
          },
          onSuccess: res => {
            this.handleSuccess(res, file);
          },
          onError: (err, res) => {
            this.handleError(err, res, file);
          },
        };

        // from上传
        if (this.isFormUpload) {
          post({
            ...options,
            _fileEl: file._fileEl,
          });
        }
        else {
          ajax(options);
        }
      },
      handleStart (file) {
        this.uploaded = true;
        file.uid = Date.now() + this.tempIndex++;
        const _file = {
          status: 'uploading',
          name: file.name,
          size: file.size,
          percentage: 0,
          uid: file.uid,
          showProgress: true,
          error_msg: '',
        };

        this.addFile(_file);
      },
      addFile (file) {
        this.curValue = [...this.curValue, file];
      },
      getFile (file) {
        return this.curValue.find(item => file.uid === item.uid);
      },
      handleProgress (e, file) {
        const _file = this.getFile(file);
        this.onProgress(e, _file, this.curValue);
        _file.percentage = Math.floor(e.percent) || 0;
      },
      // 检测是否成功
      checkSuccessMatch (res) {
        const { successMatch } = this;
        if (successMatch) {
          const { path, value, errorMessagePath } = successMatch;
          const successValue = getValueByPath(res, path);
          if (value !== successValue) {
            const errorMessage = getValueByPath(res, errorMessagePath);
            return {
              message: errorMessage,
            };
          }
        }
      },
      handleSuccess (res, file) {
        const checkError = this.checkSuccessMatch(res);
        if (checkError) {
          return this.handleError(checkError, res, file);
        }

        const _file = this.getFile(file);
        const _timeout = 500;

        if (_file) {
          _file.response = res;

          const promise = this.onSuccess(res, _file, this.curValue);

          if (promise && promise.then) {
            promise
              .then(() => {
                setTimeout(() => {
                  _file.status = 'finished';
                  _file.showProgress = false;
                }, _timeout);
              })
              .catch(err => {
                console.error('=====> handleSuccess err', err);
                this.handleError(err, res, _file);
              });
          }
          else {
            setTimeout(() => {
              _file.status = 'finished';
              _file.showProgress = false;
            }, _timeout);
          }
        }
      },
      handleError (err, response, file) {
        const _file = this.getFile(file);

        _file.status = 'fail';
        _file.showProgress = false;

        _file.error_msg = err.message || err.msg || '出错啦，请重新上传或者删除';

        this.onError(err, response, _file);
      },
      removeFile (index) {
        this.curValue = this.curValue.filter(
          (item, listIndex) => listIndex !== index,
        );
        if (this.curValue.length === 0 || !this.multiple) {
          this.uploaded = false;
        }
        return true;
      },
      handleRemove (index) {
        const _file = this.curValue[index];

        if (!this.curValue[index]) {
          return;
        }

        const promise = this.onRemove(_file, this.curValue);

        if (promise && promise.then) {
          promise
            .then(response => {
              console.log('=====> response', response);
              this.removeFile(index);
            })
            .catch(err => {
              console.error('=====> handleRemove err', err);
              this.handleError(err, {}, _file);
            });
        }
        else {
          this.removeFile(index);
        }
      },
      handleRetry (index) {
        if (!this.removeFile(index)) {
          return;
        }
        this.$refs.input.click();
      },
    },
  };
</script>
