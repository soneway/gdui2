<template>
  <div>
    <gd-steps :active="active">
      <gd-step
        title="第一步"
        desc="这是一段相关的描述"
        @click="onClick">
      </gd-step>
      <gd-step
        title="第二步"
        desc="这是一段相关的描述"
        @click="onClick">
      </gd-step>
      <gd-step
        title="第三步"
        desc="这是一段相关的描述"
        @click="onClick">
      </gd-step>
      <gd-step
        title="第四步"
        desc="这是一段相关的描述"
        @click="onClick">
      </gd-step>
      <gd-step
        title="第五步"
        @click="onClick">
      </gd-step>
      <gd-step
        title="第六步"
        @click="onClick">
      </gd-step>
      <gd-step
        desc="这是一段相关的描述"
        @click="onClick">
      </gd-step>
    </gd-steps>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 1,
      };
    },
    methods: {
      onClick (target) {
        const { index } = target;
        this.active = index;
      },
    },
  };
</script>
