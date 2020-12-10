<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <div>
        <x-steps :current="1">
          <x-step title="已完成" content="这里是该步骤的描述信息"></x-step>
          <x-step title="进行中" content="这里是该步骤的描述信息"></x-step>
          <x-step title="待进行" content="这里是该步骤的描述信息"></x-step>
          <x-step title="待进行" content="这里是该步骤的描述信息"></x-step>
        </x-steps>
      </div>
    </section>
    <section class="demo-section">
      <h4>迷你版</h4>
      <div>
        <x-steps :current="2" size="small">
          <x-step title="已完成"></x-step>
          <x-step title="进行中"></x-step>
          <x-step title="待进行"></x-step>
          <x-step title="待进行"></x-step>
        </x-steps>
      </div>
    </section>
    <section class="demo-section">
      <h4>垂直方向</h4>
      <div>
        <x-steps :current="2" direction="vertical">
          <x-step title="已完成"></x-step>
          <x-step title="进行中"></x-step>
          <x-step title="待进行"></x-step>
          <x-step title="待进行"></x-step>
        </x-steps>
      </div>
    </section>
    <section class="demo-section">
      <h4>步骤运行错误</h4>
      <div>
        <x-steps :current="2" status="error">
          <x-step title="已完成" content="这里是该步骤的描述信息"></x-step>
          <x-step title="进行中" content="这里是该步骤的描述信息"></x-step>
          <x-step title="待进行" content="这里是该步骤的描述信息"></x-step>
          <x-step title="待进行" content="这里是该步骤的描述信息"></x-step>
        </x-steps>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss"></style>
