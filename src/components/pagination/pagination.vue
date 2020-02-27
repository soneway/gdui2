<template>
  <div :class="_class">

    <span v-if="showTotal">共 {{ total }} 条</span>

    <!--上一页-->
    <Button
      type="thin"
      :size="size"
      icon="left"
      icon-only
      @click="onPrevClick"
      :disabled="curIndex <= 1">
    </Button>
    <!--上一页 end-->

    <!--页码-->
    <template v-if="!simple">
      <template v-if="indexArray.indexOf(1) === -1">
        <Button
          :size="size"
          :class="_buttonClass"
          :type="getButtonType(1)"
          @click="onButtonClick(1)">1
        </Button>
        <span v-if="indexArray[0] > 2">‧‧‧</span>
      </template>

      <Button
        :size="size"
        v-for="index in indexArray"
        :key="index"
        :class="_buttonClass"
        :type="getButtonType(index)"
        @click="onButtonClick(index)">{{ index }}
      </Button>

      <template v-if="indexArray.indexOf(maxPage) === -1">
        <span v-if="indexArray[indexArray.length - 1] < maxPage - 1">‧‧‧</span>
        <Button
          :size="size"
          :class="_buttonClass"
          :type="getButtonType(maxPage)"
          @click="onButtonClick(maxPage)">{{ maxPage }}
        </Button>
      </template>
    </template>
    <!--页码 end-->

    <!--下一页-->
    <Button
      type="thin"
      :size="size"
      icon="right"
      icon-only
      @click="onNextClick"
      :disabled="curIndex >= maxPage">
    </Button>
    <!--下一页 end-->

    <!--跳转页码-->
    <template v-if="showGoto">
      <span>到第</span>
      <Input
        type="number"
        ref="input"
        :size="size"
        v-model="toIndex"
      />
      <Button
        :class="_toButtonClass"
        :size="size"
        @click="onToClick"
        :disabled="toIndex > maxPage || toIndex < 1">跳转
      </Button>
    </template>
    <!--跳转页码 end-->

  </div>
</template>

<script>
  import Input from '../input';
  import Button from '../button';

  const name = 'gd-pagination';

  export default {
    name,
    components: {
      Input,
      Button,
    },
    props: {
      size: String,
      index: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      total: {
        type: Number,
        required: true,
      },
      simple: Boolean,
      showTotal: {
        type: Boolean,
        default: true,
      },
      showGoto: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        curIndex: this.index,
        toIndex: this.index,
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-${this.size}`]: this.size,
          },
        ];
      },
      _buttonClass () {
        return [
          `${name}-button`,
        ];
      },
      _toButtonClass () {
        return [
          `${name}-to-button`,
        ];
      },

      maxPage () {
        return Math.ceil(this.total / this.pageSize);
      },

      indexArray () {
        const array = [];
        const min = this.curIndex - 2;
        const max = this.curIndex + 3;

        for (let i = min; i < max; i++) {
          if (i > 0 && i <= this.maxPage) {
            array.push(i);
          }
        }
        return array;
      },
    },
    watch: {
      index (value) {
        this.curIndex = value;
      },
      curIndex (value, oldValue) {
        if (value === oldValue) return;
        this.toIndex = value;
        this.$emit('change', value);
      },
    },

    methods: {
      // 上一页
      onPrevClick () {
        this.curIndex -= 1;
      },
      // 下一页
      onNextClick () {
        this.curIndex += 1;
      },
      // 转到
      onToClick () {
        this.curIndex = +this.toIndex;
      },

      getButtonType (index) {
        return this.curIndex === index ? 'primary' : 'thin';
      },

      // 页码按钮
      onButtonClick (index) {
        this.curIndex = index;
      },
    },
  };
</script>
