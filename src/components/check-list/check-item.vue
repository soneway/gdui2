<template>

  <Radio
    v-if="itemType === 'radio'"
    :size="curSize"
    :value="checked"
    :disabled="disabled"
    @click.stop="onClick">
    {{ curLabel }}
  </Radio>

  <Checkbox
    v-else-if="itemType === 'checkbox'"
    :size="curSize"
    :value="checked"
    :disabled="disabled"
    @click.stop="onClick">
    {{ curLabel }}
  </Checkbox>

  <div
    v-else
    :class="_class"
    @click.stop="onClick">
    <slot>{{ curLabel }}</slot>
  </div>

</template>

<script>
  import Emitter from 'utils-lib/dist/emitter';
  import GetItemChecked from '../../scripts/mixins/get-item-checked';
  import Radio from '../radio';
  import Checkbox from '../checkbox';

  const name = 'gd-check-item';

  export default {
    name,
    components: {
      Checkbox,
      Radio,
    },
    mixins: [
      Emitter,
      GetItemChecked,
    ],
    inject: [
      'checkList',
    ],
    props: {
      value: [String, Number, Boolean],
      label: [String, Number, Boolean],
    },
    computed: {
      _class () {
        return [
          name,
          {
            checked: this.checked,
          },
        ];
      },

      checked () {
        return this.getItemChecked(this.checkList);
      },

      curLabel () {
        return this.label || this.value;
      },

      itemType () {
        return this.checkList.itemType;
      },
      disabled () {
        return this.checkList.disabled;
      },
      curSize () {
        return this.checkList.curSize;
      },
    },

    methods: {
      onClick () {
        this.dispatch('gd-check-list', 'item.click', this);
      },
    },
  };
</script>
