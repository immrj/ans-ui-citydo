<template>
  <div>
    <section class="demo-section">
      <h4>基本用法</h4>
      <h5>最简单的使用方法。</h5>
      <div>
        <x-badge :count="3">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge>
          <a href="#" class="demo-badge" style="margin-left: 32px"></a>
          <i class="ans-icon-timer" slot="count"></i>
        </x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>小红点</h4>
      <h5>强迫症患者慎用！</h5>
      <div>
        <x-badge dot>
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge dot>
          <i class="ans-icon-home-empty"></i>
        </x-badge>
        <x-badge dot>
          <a href="#">可以是一个链接</a>
        </x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>封顶数字</h4>
      <h5>通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+</h5>
      <div>
        <x-badge :count="100">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="1000" overflow-count="999">
          <a href="#" class="demo-badge"></a>
        </x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>独立使用及自定义样式</h4>
      <h5>可以没有 slot 独立展示。</h5>
      <div>
        <x-badge :count="10"></x-badge>
        <x-badge :count="20" class-name="demo-badge-alone"></x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>自定义内容 </h4>
      <h5>设置 text 属性，可以自定义显示内容。</h5>
      <div>
        <x-badge text="new">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge text="hot">
          <a href="#" class="demo-badge"></a>
        </x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>状态点 </h4>
      <h5>用于表示状态的小圆点。</h5>
      <div>
        <x-badge status="success"></x-badge>
        <x-badge status="error"></x-badge>
        <x-badge status="default"></x-badge>
        <x-badge status="processing"></x-badge>
        <x-badge status="warning"></x-badge>
        <br/>
        <x-badge status="success" text="Success"></x-badge>
        <br/>
        <x-badge status="error" text="Error"></x-badge>
        <br/>
        <x-badge status="default" text="Default"></x-badge>
        <br/>
        <x-badge status="processing" text="Processing"></x-badge>
        <br/>
        <x-badge status="warning" text="Warning"></x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>多彩徽标 </h4>
      <h5>属性 color 可以设置更多预设的状态点颜色，或者自定义颜色。</h5>
      <div>
        <strong>预设:</strong>
        <br>
        <x-badge color="blue" text="blue"></x-badge>
        <x-badge color="green" text="green"></x-badge>
        <x-badge color="red" text="red"></x-badge>
        <x-badge color="yellow" text="yellow"></x-badge>
        <x-badge color="pink" text="pink"></x-badge>
        <x-badge color="magenta" text="magenta"></x-badge>
        <x-badge color="volcano" text="volcano"></x-badge>
        <x-badge color="orange" text="orange"></x-badge>
        <x-badge color="gold" text="gold"></x-badge>
        <x-badge color="lime" text="lime"></x-badge>
        <x-badge color="cyan" text="cyan"></x-badge>
        <x-badge color="geekblue" text="geekblue"></x-badge>
        <x-badge color="purple" text="purple"></x-badge>
        <br>
        <strong>自定义:</strong>
        <br>
        <x-badge color="#2db7f5" text="#2db7f5"></x-badge>
        <x-badge color="#f50" text="#f50"></x-badge>
      </div>
    </section>
    <section class="demo-section">
      <h4>预设颜色  </h4>
      <h5>使用 type 属性，可以设置不同的颜色。</h5>
      <div>
        <x-badge :count="5" type="primary">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="5" type="success">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="5" type="normal">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="5" type="info">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="5" type="error">
          <a href="#" class="demo-badge"></a>
        </x-badge>
        <x-badge :count="5" type="warning">
          <a href="#" class="demo-badge"></a>
        </x-badge>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
  .demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }

  .ans-icon-timer {
    font-size: 22px;
    color: #ff4646;
  }

  .ans-badge {
    margin-right: 50px;
  }

  .ans-icon-home-empty {
    font-size: 26px;
  }

  .demo-badge-alone {
    background: #5cb85c !important;
  }

</style>
