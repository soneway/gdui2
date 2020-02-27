<template>
  <Poptip
    :class="_class"
    :trigger="trigger"
    :width="width"
    :placement="placement"
    v-bind="$attrs">
    <slot></slot>
    <div
      slot="content"
      :class="_contentClass">
      <RenderCell
        v-if="typeof content === 'function'"
        :render="content">
      </RenderCell>
      <h3 v-else>{{ content }}</h3>
      <div>
        <gd-button
          type="error"
          size="small"
          :data-close-poptip="confirmClosable"
          @click="onConfirmClick(passData)">{{ confirmText }}
        </gd-button>
        <gd-button
          size="small"
          :data-close-poptip="cancelClosable"
          @click="onCancelClick(passData)">{{ cancelText }}
        </gd-button>
      </div>
    </div>
  </Poptip>
</template>

<script>
  import Poptip from '../poptip';
  import RenderCell from '../render-cell';

  const name = 'gd-confirm-poptip';

  export default {
    name,
    components: {
      Poptip,
      RenderCell,
    },
    props: {
      trigger: {
        type: String,
        default: 'click',
      },
      width: {
        type: String,
        default: '200px',
      },
      placement: {
        type: String,
        default: 'top',
      },
      content: {
        type: [String, Function],
        default: '是否确认?',
      },
      passData: [Number, String, Object, Array],
      confirmText: {
        type: String,
        default: '确认',
      },
      confirmClosable: {
        type: Boolean,
        default: true,
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      cancelClosable: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      _class () {
        return [
          name,
        ];
      },
      _contentClass () {
        return [
          `${name}-content`,
        ];
      },
    },

    methods: {
      onConfirmClick (passData) {
        this.$emit('confirm', passData);
      },
      onCancelClick (passData) {
        this.$emit('cancel', passData);
      },
    },
  };
</script>
