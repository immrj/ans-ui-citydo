<template>
  <div>
    <section class="demo-section">
      <h4>左右分割</h4>
      <h5>左右分割用法。</h5>
      <div class="demo-split">
        <x-split v-model="split1">
          <div slot="left" class="demo-split-pane">
            Left Pane
          </div>
          <div slot="right" class="demo-split-pane">
            Right Pane
          </div>
        </x-split>
      </div>
    </section>
    <section class="demo-section">
      <h4>上下分割</h4>
      <h5>上下分割用法。</h5>
      <div class="demo-split">
        <x-split v-model="split2" mode="vertical">
          <div slot="top" class="demo-split-pane">
            Top Pane
          </div>
          <div slot="bottom" class="demo-split-pane">
            Bottom Pane
          </div>
        </x-split>
      </div>
    </section>
    <section class="demo-section">
      <h4>嵌套使用</h4>
      <h5>可以嵌套使用。</h5>
      <div class="demo-split">
        <x-split v-model="split3">
          <div slot="left" class="demo-split-pane no-padding">
            <x-split v-model="split4" mode="vertical">
              <div slot="top" class="demo-split-pane">
                Top Pane
              </div>
              <div slot="bottom" class="demo-split-pane">
                Bottom Pane
              </div>
            </x-split>
          </div>
          <div slot="right" class="demo-split-pane">
            Right Pane
          </div>
        </x-split>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      split1: 0.5,
      split2: 0.5,
      split3: 0.5,
      split4: 0.5
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .demo-split{
    height: 200px;
    border: 1px solid #dcdee2;
  }
  .demo-split-pane{
    padding: 10px;
  }
  .demo-split-pane.no-padding{
    height: 200px;
    padding: 0;
  }
</style>
