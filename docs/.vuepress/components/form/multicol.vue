<template>
  <div class="form-base">
    <gd-form
      size="default"
      ref="form"
      type="default"
      :error-location="true"
      :colcount="2"
      :model="model"
      :rules="rules">

      <gd-form-item
        label="姓名"
        prop="name">
        <gd-input
          v-model="model.name"
          placeholder="请输入">
        </gd-input>
      </gd-form-item>

      <gd-form-item
        label="性别"
        prop="gender">
        <gd-select
          v-model="model.gender"
          placeholder="请选择">
          <gd-option value="0">男</gd-option>
          <gd-option value="1">女</gd-option>
        </gd-select>
      </gd-form-item>

      <gd-form-item
        :span="12"
        label="其他描述"
        prop="desc">
        <gd-input
          v-model="model.desc"
          type="textarea"
          placeholder="请输入">
        </gd-input>
      </gd-form-item>

    </gd-form>

    <div class="btn-wrapper">
      <gd-button
        type="primary"
        @click="onSubmitClick">提交
      </gd-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        model: {
          name: '',
          desc: '',
          gender: '',
        },
        rules: {
          name: [
            { required: true, message: '姓名不能为空' },
            {
              validator (rule, value, callback) {
                const errors = [];
                if (value.length < 6) {
                  errors.push('不能小于6个字符');
                }
                callback(errors);
              },
            },
          ],
          desc: [
            { required: true, message: '请输入个人简介' },
            { type: 'string', min: 20, message: '简介不能少于20个字符' },
          ],
          gender: [
            { required: true, message: '性别不能为空' },
          ],
        },
      };
    },
    methods: {
      onSubmitClick () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            console.log('校验通过');
          }
          else {
            console.log('校验失败');
          }
        });
      },
    },
  };
</script>

<style lang="less">
  .form-base {
    .btn-wrapper {
      padding-top: 10px;
    }
  }
</style>
